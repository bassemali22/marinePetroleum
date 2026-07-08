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
      <div className="container">
        <div className="footer-logo">
          <img src={logo} alt="Marine Petroleum Lifting" />

          <p>
            Marine Petroleum Lifting provides reliable lifting, inspection,
            certification, and engineering services across Egypt, the Middle
            East, and Africa.
          </p>
        </div>

        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaLinkedinIn />
          </a>

          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="copyright">
        © 2026 Marine Petroleum Lifting. All Rights Reserved.
      </div>
    </footer>
  );
};

export default ContactFooter;
