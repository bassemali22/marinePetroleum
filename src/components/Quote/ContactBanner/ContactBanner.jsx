import "./ContactBanner.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="container contact-banner-container">
        {/* كارت العنوان */}
        <div className="contact-card">
          <div className="icon-wrapper">
            <div className="icon-pulse"></div>
            <FaMapMarkerAlt className="contact-icon" />
          </div>
          <h3>Address</h3>
          <p>Badr Industrial City - Plots 196 / 148 Cairo - Egypt</p>
        </div>

        {/* كارت الهاتف */}
        <div className="contact-card">
          <div className="icon-wrapper">
            <div className="icon-pulse"></div>
            <FaPhoneAlt className="contact-icon" />
          </div>
          <h3>Phone</h3>
          <p>
            <a href="tel:+20228607400" className="contact-link">
              +202-2860-7400
            </a>
          </p>
        </div>

        {/* كارت الإيميل */}
        <div className="contact-card">
          <div className="icon-wrapper">
            <div className="icon-pulse"></div>
            <FaEnvelope className="contact-icon" />
          </div>
          <h3>Email</h3>
          <p>
            <a href="mailto:info@petrolift.com" className="contact-link">
              info@Marine Petroleum.com
            </a>
          </p>
        </div>

        {/* كارت الفاكس */}
        <div className="contact-card">
          <div className="icon-wrapper">
            <div className="icon-pulse"></div>
            <FaFax className="contact-icon" />
          </div>
          <h3>Fax</h3>
          <p>+202-2860-7444</p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
