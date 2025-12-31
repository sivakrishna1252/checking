
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { mockServices } from '../../data/mockServices';
import { mockBlogPosts } from '../../data/mockBlogPosts';
import { mockAbout } from '../../data/mockAbout';
import ServiceCard from '../../components/sections/Services/ServiceCard';
import BlogCard from '../../components/sections/Blog/BlogCard';
import Counter from '../../components/sections/Counter/Counter';
import './HomePage.css';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

function HomePage() {
  // Get first 6 services for carousel
  const featuredServices = mockServices.slice(0, 6);

  // Swiper Navigation Refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Ref for Swiper instance to update navigation after init
  const swiperRef = useRef(null);

  // Scroll to Top State
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled more than 500px (approx after hero)
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update swiper navigation when refs are ready
  // This helps when refs are initially null
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  // Scroll to Top Action
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Get latest 3 blog posts
  const featuredBlogs = mockBlogPosts.slice(0, 4);

  return (
    <>
      <div id='home'></div>
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero section">
          <div className="container">

            <div className="hero-content">
              <h1 className="hero-title">
                E<span className="highlight">&</span>L DECOR<span className="highlight">&</span>MORE
              </h1>


              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">Get Started</Link>
                <Link to="/Blog" className="btn btn-secondary" style={{ color: 'black' }}>Our Insights</Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-preview section">
          <div className="container">
            <div className="about-content">
              {/* Left Column - Text & Stats */}
              <div className="about-text-column">
                <h2 className="section-title">About Us</h2>
                <div className="about-text-body">
                  <p>{mockAbout.description}</p>
                  <p>{mockAbout.mission}</p>
                </div>

                <div className="about-stats-row">
                  <div className="about-stat-item">
                    <Counter targetValue={parseInt(mockAbout.stats.eventsCompleted, 10)} label="Projects Completed" duration={2500} />
                  </div>
                  <div className="about-stat-item">
                    <Counter targetValue={parseInt(mockAbout.stats.happyClients, 10)} label="Happy Clients" duration={2500} />
                  </div>
                  <div className="about-stat-item">
                    <Counter targetValue={parseInt(mockAbout.stats.yearsExperience, 10)} label="Years Experience" duration={2500} />
                  </div>
                </div>
              </div>

              {/* Right Column - Image Grid */}
              <div className="about-image-column">
                <div className="about-image-grid">
                  <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" alt="Living Room" className="grid-img img-1" /></div>
                  <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop" alt="Dining Corner" className="grid-img img-2" /></div>
                  <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop" alt="Bedroom" className="grid-img img-3" /></div>
                  <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop" alt="Dining Room" className="grid-img img-4" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section (Swiper Carousel) */}
        <section className="services-preview section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            {/* <p className="section-subtitle">Comprehensive event management solutions tailored to your needs</p> */}

            <div className="services-carousel-wrapper">
              <button ref={prevRef} className="custom-prev" aria-label="Previous slide">
                <ChevronLeft size={28} />
              </button>

              <Swiper
                ref={swiperRef}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30} // Add gap between slides
                slidesPerView={1}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="services-carousel"
              >
                {featuredServices.map((service) => (
                  <SwiperSlide key={service.id}>
                    <ServiceCard service={service} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button ref={nextRef} className="custom-next" aria-label="Next slide">
                <ChevronRight size={28} />
              </button>
            </div>


            <div className="section-cta">
              <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="blog-preview section">
          <div className="container">
            <h2 className="section-title">Latest from Our Blog</h2>
            <p className="footer-tagline">Insights, tips, and inspiration for your next event</p>
            <div className="blog-grid grid grid-3">
              {featuredBlogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="section-cta">
              <Link to="/blog" className="btn btn-primary">Read More Articles</Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="services-preview">
          <div className="container">
            <div className="cta-content">
              <h2 className="section-title">Ready to Create Your Perfect Event?</h2>
              <p className="section-subtitle" style={{ color: 'black' }}>Let's work together to bring your vision to life</p>
              <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
            </div>
          </div>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}

export default HomePage;