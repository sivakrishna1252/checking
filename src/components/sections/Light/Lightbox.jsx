import { useEffect } from 'react';
import './Lightbox.css';

function Lightbox({ image, onClose, onNext, onPrevious, totalImages, currentIndex }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ×
        </button>
        
        <button 
          className="lightbox-nav lightbox-prev"
          onClick={onPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <div className="lightbox-image-container">
          <img 
            src={image.image} 
            alt={image.caption || 'Gallery image'}
            className="lightbox-image"
          />
          {image.caption && (
            <div className="lightbox-caption">
              <p>{image.caption}</p>
              {image.category && <span className="lightbox-category">{image.category}</span>}
            </div>
          )}
        </div>
        
        <button 
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Next image"
        >
          ›
        </button>
        
        <div className="lightbox-counter">
          {currentIndex} / {totalImages}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
