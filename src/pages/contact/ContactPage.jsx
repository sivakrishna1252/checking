import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactPage.css';

// API URL - change this to your production URL when deploying
const API_URL = 'http://localhost:8008/api/contacts/';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For phone number, check for non-numeric characters
    if (name === 'phone') {
      const isNumeric = /^[0-9\s-]*$/.test(value);
      if (!isNumeric) {
        // If user types non-numeric, show error but don't update value (or strip it)
        setErrors(prev => ({
          ...prev,
          phone: 'Please enter numbers only'
        }));
        // Optionally strip the bad chars so the input remains clean
        const cleaned = value.replace(/[^\d\s-]/g, '');
        setFormData(prev => ({ ...prev, [name]: cleaned }));
      } else {
        // Valid input
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error if it was "Please enter numbers only" or empty
        if (errors.phone) {
          setErrors(prev => ({ ...prev, phone: '' }));
        }
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      // Clear error when user starts typing for other fields
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    if (errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (!recaptchaValue) {
      newErrors.recaptcha = "Please verify you are not a robot";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to send message';
        try {
          const errorData = await response.json();
          // Extract specific error messages if available from Django REST Framework
          // Check for common field errors or non_field_errors
          if (typeof errorData === 'object') {
            const messages = [];
            for (const key in errorData) {
              if (Array.isArray(errorData[key])) {
                messages.push(`${key}: ${errorData[key].join(', ')}`);
              } else {
                messages.push(`${key}: ${errorData[key]}`);
              }
            }
            if (messages.length > 0) errorMessage = messages.join(' | ');
          }
        } catch (e) {
          console.error("Error parsing error response", e);
        }
        throw new Error(errorMessage);
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setRecaptchaValue(null); // Reset captcha

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Submit error:', error);
      setIsSubmitting(false);
      setSubmitError(error.message || 'Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-header section">
          <h1 className="section-title">Contact Us</h1>
          <p className="contact-intro">
            Have a question or ready to plan your next event? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </section>

        <section className="contact-content section">
          <div className="contact-grid">
            <div className="contact-info">
              {/* <div className="badge">Contact Us</div> */}
              <h3>Have a question?<br /><span className="highlight-text" >Get in touch!</span></h3>

              <div className="info-item icon-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>

              <div className="info-item icon-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sivatools1252@gmail.com">eandldecoreandmore@gmail.com</a>
              </div>

              <div className="info-item icon-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>
                  <a href="https://www.google.com/maps/place/123+Event+St,+Party+City,+USA">
                    123 Event St, Party City, USA
                  </a>
                </span>
              </div>

              <div className="info-item business-hours">
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>


            <div className="contact-form-container">
              {/* <h2>Send us a Message</h2> */}

              {submitSuccess && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitError && (
                <div className="error-message-box">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Your Name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="Your Email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="Your Phone Number"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message"></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Your Message"
                    rows="4"
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <div className="form-group recaptcha-wrapper">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptchaChange}
                  />
                  {errors.recaptcha && <span className="error-message">{errors.recaptcha}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get in touch!'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;