import "./ContactBanner.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="contact-card">
          <FaMapMarkerAlt />
          <h3>Address</h3>
          <p>Badr Industrial City - Plots 196 / 148 Cairo - Egypt</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>+202-2860-7400</p>
        </div>

        <div className="contact-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>info@petrolift.com</p>
        </div>

        <div className="contact-card">
          <FaFax />
          <h3>Fax</h3>
          <p>+202-2860-7444</p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
