import { Link } from "react-router-dom";
import "./ServicesSection.css";
import {
  FaBoxes,
  FaClipboardCheck,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

const services = [
  { title: "Supply", icon: <FaBoxes />, path: "/services/supply" },
  {
    title: "Inspection",
    icon: <FaClipboardCheck />,
    path: "/services/inspection",
  },
  { title: "Training", icon: <FaGraduationCap />, path: "/services/training" },
  { title: "Projects", icon: <FaProjectDiagram />, path: "/services/project" },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1800">
          SERVICES
        </h2>

        <div className="services-grid">
          {services.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="service-card-link"
              data-aos="fade-up"
              data-aos-delay={index * 250}
              data-aos-duration="1500"
            >
              <div className="service-card">
                <div className="service-glow"></div>
                <div className="service-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
