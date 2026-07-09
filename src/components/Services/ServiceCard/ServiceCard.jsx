import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, text, path }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <Link to={path} className="service-link">
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
