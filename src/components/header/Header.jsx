import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"; //src/assets/images/logo.png
import "./Header.css";
const Header = () => {
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

        <nav className="nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
