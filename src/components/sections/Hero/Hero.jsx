import { Link } from "react-router-dom"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            E<span className="highlight">&</span>L DECOR<span className="highlight">&</span>MORE
          </h1>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/Blog" className="btn btn-secondary" style={{ color: "black" }}>
              Our Insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
