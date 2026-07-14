import "./ServicesSection.css";
import {
  FaBoxes,
  FaClipboardCheck,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

const services = [
  { title: "Supply", icon: <FaBoxes /> },
  { title: "Inspection", icon: <FaClipboardCheck /> },
  { title: "Training", icon: <FaGraduationCap /> },
  { title: "Projects", icon: <FaProjectDiagram /> },
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
            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 250}
              data-aos-duration="1500"
            >
              <div className="service-glow"></div>
              <div className="service-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
