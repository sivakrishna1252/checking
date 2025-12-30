import { useState } from 'react';
import Lightbox from '../../sections/Light/Lightbox';
import './ImageGallery.css';

function ImageGallery({ images, columns = 3 }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      <div className="image-gallery masonry">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.image} 
              alt={image.caption || `Gallery image ${image.id}`}
              loading="lazy"
            />
            {image.caption && (
              <div className="gallery-caption">
                <p>{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          totalImages={images.length}
          currentIndex={images.findIndex(img => img.id === selectedImage.id) + 1}
        />
      )}
    </>
  );
}

export default ImageGallery;
