import "./ContactHero.css";
import heroImage from "../../../assets/images/fake.jpg";

const ContactHero = () => {
  return (
    <section
      className="contact-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="contact-hero-overlay">
        <div className="container contact-hero-container">
          <div className="hero-content">
            <div className="subtitle-wrapper">
              <span className="subtitle">CONTACT US</span>
              <div className="subtitle-line"></div>
            </div>

            <h1>We're Ready To Help Your Business</h1>

            <p>
              Contact Marine Petroleum Lifting for inspection, lifting,
              certification and engineering services. Our specialists are ready
              to assist you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
