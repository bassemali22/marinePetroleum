import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "Inspection", path: "/services/inspection" },
        { name: "Certification", path: "/services/certification" },
        { name: "Load Testing", path: "/services/load-testing" },
        { name: "Training", path: "/services/training" },
      ],
    },

    { name: "Gallery", path: "/gallery" },
    { name: "Get a Quote", path: "/quote" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
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
                <li
                  key={link.path}
                  className={link.submenu ? "has-dropdown" : ""}
                >
                  {link.submenu ? (
                    <>
                      <div className="service-title">
                        <Link
                          to={link.path}
                          onClick={() => {
                            setMenuOpen(false);
                            setServiceOpen(false);
                          }}
                        >
                          {link.name}
                        </Link>

                        <FaChevronDown
                          className={serviceOpen ? "rotate" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setServiceOpen(!serviceOpen);
                          }}
                        />
                      </div>

                      <ul className={`dropdown ${serviceOpen ? "show" : ""}`}>
                        {link.submenu.map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              onClick={() => {
                                setMenuOpen(false);
                                setServiceOpen(false);
                              }}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={link.path} onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={() => {
            setMenuOpen(false);
            setServiceOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
