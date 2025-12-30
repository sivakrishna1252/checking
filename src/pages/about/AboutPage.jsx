import { mockAbout } from '../../data/mockAbout';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Main About Section with Two Columns */}
        <section className="about-main section">
          <h2 className="section-title">About Us</h2>

          <div className="about-content-grid">
            {/* Left Column - Text Content & Stats */}
            <div className="about-text-content">
              <p className="about-description">{mockAbout.description}</p>

              <p className="about-mission">{mockAbout.mission}</p>

              <div className="about-stats-row">
                <div className="about-stat-item">
                  <div className="stat-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                  </div>
                  <div className="stat-value">500+</div>
                  <div className="stat-label">Projects<br />Completed</div>
                </div>
                <div className="about-stat-item">
                  <div className="stat-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </div>
                  <div className="stat-value">450+</div>
                  <div className="stat-label">Happy<br />Clients</div>
                </div>
                <div className="about-stat-item">
                  <div className="stat-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  </div>
                  <div className="stat-value">15</div>
                  <div className="stat-label">Years<br />Experience</div>
                </div>
                <div className="about-stat-item">
                  <div className="stat-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <div className="stat-value">25+</div>
                  <div className="stat-label">Team<br />Members</div>
                </div>
              </div>

              <button className="btn btn-primary">Learn More</button>
            </div>

            {/* Right Column - Image Grid */}
            <div className="about-visual-content">
              <div className="about-image-grid">
                <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" alt="Living Room" className="grid-img img-1" /></div>
                <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop" alt="Dining Corner" className="grid-img img-2" /></div>
                <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop" alt="Bedroom" className="grid-img img-3" /></div>
                <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop" alt="Dining Room" className="grid-img img-4" /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}

        <h2 className="section-title">Our Values</h2>
        <div className="values-grid grid grid-2">
          {mockAbout.values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>


        {/* Team Section */}

        <h2 className="section-title">Our Team</h2>
        <div className="team-grid grid grid-3">
          {mockAbout.team.map((member, index) => (
            <div key={index} className="team-card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AboutPage;