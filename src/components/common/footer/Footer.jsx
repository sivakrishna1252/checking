import { Link } from "react-router-dom"
import { Phone, Mail, MapPin } from "lucide-react"
import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-card">
          <div className="footer-content">
            {/* LEFT: Brand + text + social */}
            <div className="footer-section footer-brand">
              <h3 className="footer-logo-text">E and L Decore and More</h3>
              <p className="footer-tagline">
                We offer a wide range of handyman services to meet all your needs, from minor fixes to major
                renovations.
              </p>

              <div className="social-links">
                {/* Instagram */}
                <a href="https://instagram.com" aria-label="Instagram">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://facebook.com" aria-label="Facebook">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* Check / Services */}

                {/* YouTube */}
                <a href="https://youtube.com" aria-label="YouTube">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.44a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.44a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            {/* MIDDLE: Extra links */}
            <div className="footer-section">
              <h4>Quick links</h4>
              <nav className="footer-nav">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
                <Link to="/Gallery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Gallery</Link>
                <Link to="/Blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blog</Link>
                <Link to="/Contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link>
              </nav>
            </div>

            {/* RIGHT: Contact - brief pointer plus key contact details */}
            <div className="footer-section">
              <h4>Contact</h4>
              <div className="footer-contact">
                <div className="footer-nav">
                  <p className="footer-contact-item">
                    <Phone size={18} />
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </p>
                  <p className="footer-contact-item">
                    <Mail size={18} />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=eandldecoreandmore@gmail.com">
                      eandldecoreandmore@gmail.com
                    </a>
                  </p>
                  <p className="footer-contact-item">
                    <MapPin size={18} />
                    <span>
                      <a href="https://www.google.com/maps/place/123+Event+St,+Party+City,+USA">
                        123 Event St, Party City, USA
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p>© {currentYear} Bienes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
