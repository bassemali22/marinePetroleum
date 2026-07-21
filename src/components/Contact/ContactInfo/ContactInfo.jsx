import "./ContactInfo.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="info-glow glow-left"></div>
      <div className="info-glow glow-right"></div>

      <div className="container contact-info-container">
        <div className="info-box">
          <div className="info-icon-wrapper">
            <div className="info-pulse-ring"></div>
            <FaMapMarkerAlt className="info-icon" />
          </div>
          <h3>Address</h3>
          <p>Office: Apartment no. 2 Building no. 4 Faisal City - Alexandria - Egypt</p>
        </div>

        <div className="info-box">
          <div className="info-icon-wrapper">
            <div className="info-pulse-ring"></div>
            <FaPhoneAlt className="info-icon" />
          </div>
          <h3>Phone</h3>
          <p>
            <a href="tel:+20228607400" className="info-clickable-link">
              +202-2860-7400
            </a>
          </p>
        </div>

        <div className="info-box">
          <div className="info-icon-wrapper">
            <div className="info-pulse-ring"></div>
            <FaEnvelope className="info-icon" />
          </div>
          <h3>Email</h3>
          <p>
            <a
              href="mailto:info@mpleg.net"
              className="info-clickable-link"
            >
              info@mpleg.net
            </a>
          </p>
        </div>

        <div className="info-box">
          <div className="info-icon-wrapper">
            <div className="info-pulse-ring"></div>
            <FaClock className="info-icon" />
          </div>
          <h3>Working Hours</h3>
          <p className="hours-highlight">Sun - Thu</p>
          <p>8:00 AM - 4:30 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
