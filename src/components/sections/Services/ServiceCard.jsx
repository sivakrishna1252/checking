import './ServiceCard.css';

import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-card-bg">
        <img src={service.image} alt={service.title} loading="lazy" />
        <div className="service-overlay"></div>
      </div>

      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        {/* Optional: Add short description or keep it clean like the reference */}
        <Link to="/Blog" className="btn">
          Know More <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
