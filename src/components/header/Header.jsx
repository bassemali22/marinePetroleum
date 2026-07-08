import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Get a Quote", path: "/quote" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Marine Petroleum Lifting" />
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
