import "./ContactFooter.css";
import logo from "../../../assets/images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const ContactFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-bg-glow"></div>

      <div className="container contact-footer-container">
        <div className="footer-logo-section">
          <div className="logo-glow-wrapper">
            <img src={logo} alt="Marine Petroleum Lifting" />
          </div>

          <p className="footer-description">
            Marine Petroleum Lifting provides reliable lifting, inspection,
            certification, and engineering services across Egypt, the Middle
            East, and Africa.
          </p>
        </div>

        <div className="footer-social-wrapper">
          <a
            href="#"
            className="social-icon-btn facebook"
            aria-label="Facebook"
          >
            <div className="social-glow"></div>
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="social-icon-btn instagram"
            aria-label="Instagram"
          >
            <div className="social-glow"></div>
            <FaInstagram />
          </a>

          <a
            href="#"
            className="social-icon-btn linkedin"
            aria-label="LinkedIn"
          >
            <div className="social-glow"></div>
            <FaLinkedinIn />
          </a>

          <a href="#" className="social-icon-btn youtube" aria-label="YouTube">
            <div className="social-glow"></div>
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="copyright-section">
        <div className="copyright-container">
          <p className="copyright-text">
            © 2026{" "}
            <span className="brand-highlight">Marine Petroleum Lifting</span>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
