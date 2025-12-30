import { mockServices } from '../../data/mockServices';
import ServiceCard from '../../components/sections/Services/ServiceCard';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <div className="container">
        <section className="services-header section">
          <h1 className="section-title">Our Services</h1>
          <p className="services-intro">
            We offer comprehensive event management solutions tailored to your needs.
            From planning to execution, we handle every detail to ensure your event is a success.
          </p>
        </section>

        <section className="services-list section">
          <div className="services-grid grid grid-3">
            {mockServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
        <section className="services-preview">
          <div className="container">
            <div className="cta-content">
              <h2 className="section-title">Ready to Create Your Perfect Event?</h2>
              <p className="section-subtitle" style={{ color: '#ffffff' }}>Let's work together to bring your vision to life</p>

              <a href="/contact" className="btn btn-primary">Contact Us Today</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesPage;