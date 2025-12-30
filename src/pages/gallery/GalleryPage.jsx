import { useState } from 'react';
import { mockGallery, galleryCategories } from '../../data/mockGallery';
import ImageGallery from '../../components/sections/Gallery/ImageGallery';
import './GalleryPage.css';

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? mockGallery
    : mockGallery.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      <div className="container">
        <section className="gallery-header section">
          <h1 className="section-title">Event Gallery</h1>
          <p className="gallery-intro">
            Explore our portfolio of successful events. Each event is a testament to our
            commitment to excellence and attention to detail.
          </p>
        </section>

        <section className="gallery-filters section">
          <div className="filter-buttons">
            {galleryCategories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="gallery-content section">
          <ImageGallery images={filteredImages} columns={3} />
        </section>
      </div>
    </div>
  );
}

export default GalleryPage;