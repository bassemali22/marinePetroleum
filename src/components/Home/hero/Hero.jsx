import "./Hero.css";
import logo from "../../../assets/images/logo.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="container">
          <div className="hero-content">
            <img src={logo} alt="Logo" className="hero-logo" />

            <h1>Marine Petroleum Lifting</h1>

            <p>
              Established with a vision to deliver high-quality lifting,
              inspection, and certification services backed by years of
              experience and international standards.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Get a Quote</button>
              <button className="secondary-btn">Our Services</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
