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
      <div className="container">
        <div className="info-box">
          <FaMapMarkerAlt />

          <h3>Address</h3>

          <p>Badr Industrial City - Plots 196 / 148 Cairo - Egypt</p>
        </div>

        <div className="info-box">
          <FaPhoneAlt />

          <h3>Phone</h3>

          <p>+202-2860-7400</p>
        </div>

        <div className="info-box">
          <FaEnvelope />

          <h3>Email</h3>

          <p>info@petrolift.com</p>
        </div>

        <div className="info-box">
          <FaClock />

          <h3>Working Hours</h3>

          <p>Sun - Thu</p>

          <p>8:00 AM - 4:30 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
