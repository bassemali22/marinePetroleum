import "./ContactInfo.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <div
          className="info-box"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <div className="icon-wrapper">
            <FaMapMarkerAlt className="icon" />
          </div>
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

        <div
          className="info-box"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="250"
        >
          <div className="icon-wrapper">
            <FaPhoneAlt className="icon" />
          </div>
          <h3>Phones & Email</h3>
          <ul>
            <li>Tel. +202-2860-7400</li>
            <li>Fax +202-2860-7444</li>
            <li className="email-link">
              <FaEnvelope className="mini-icon" /> info@Marine Petroleum.com
            </li>
          </ul>
        </div>

        <div
          className="info-box"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        >
          <div className="icon-wrapper">
            <FaClock className="icon" />
          </div>
          <h3>Opening Hours</h3>
          <p>
            From Sun. to Thu.
            <br />
            8:00 am – 4:30 pm
          </p>
        </div>

        <div
          className="info-box social-box"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="550"
        >
          <div className="icon-wrapper">
            <span className="join-dot"></span>
          </div>
          <h3>Join Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
