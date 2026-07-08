import "./ContactInfo.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="container">
        {/* Address */}
        <div className="info-box">
          <FaMapMarkerAlt className="icon" />
          <h3>Address</h3>

          <p>
            Badr Industrial City
            <br />
            Plots 196 / 148
            <br />
            Badr City
            <br />
            Postal Code 11829
            <br />
            Cairo - Egypt
          </p>
        </div>

        {/* Phone */}
        <div className="info-box">
          <FaPhoneAlt className="icon" />
          <h3>Phones & Email</h3>

          <ul>
            <li>Tel. +202-2860-7400</li>
            <li>Fax +202-2860-7444</li>
            <li>info@petrolift.com</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="info-box">
          <FaClock className="icon" />
          <h3>Opening Hours</h3>

          <p>
            From Sun. to Thu.
            <br />
            8:00 am – 4:30 pm
          </p>
        </div>

        {/* Social */}
        <div className="info-box">
          <h3>Join Us</h3>

          <div className="social-links">
            <FaLinkedin />
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
