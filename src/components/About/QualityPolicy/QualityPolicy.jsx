import "./QualityPolicy.css";
import { FaCheckCircle } from "react-icons/fa";

const policies = [
  "Compliance with all Egyptian regulations and international HSE standards.",
  "Identify hazards, eliminate risks, and minimize workplace incidents.",
  "Maintain accident-free facilities to improve productivity and efficiency.",
  "Apply proper planning and best safety practices in every operation.",
  "Protect employees, customers, and the environment at all times.",
  "Continuously improve our Quality Management System (QMS).",
  "Provide regular training to ensure high professional standards.",
  "Achieve our long-term goal of a zero-injury workplace.",
];

const QualityPolicy = () => {
  return (
    <section className="quality-policy">
      <div className="container">
        <div
          className="policy-header"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="subtitle" data-aos="fade-down" data-aos-delay="100">
            QUALITY & HSE POLICY
          </span>

          <h2 data-aos="fade-down" data-aos-delay="250">
            Committed to Quality, Safety & Environmental Excellence
          </h2>

          <p data-aos="fade-down" data-aos-delay="400">
            PETROLIFT Industrial Services is committed to delivering safe,
            high-quality products and services while complying with
            international standards. We continuously improve our processes,
            invest in employee development, and protect the environment through
            responsible business practices.
          </p>
        </div>
        <div className="policy-grid">
          {policies.map((item, index) => (
            <div
              className="policy-item"
              key={index}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={index * 100}
            >
              <FaCheckCircle className="check-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="buttons" data-aos="fade-up" data-aos-delay="1000">
          <button className="btn-quntity">QUALITY</button>
          <button className="btn-hse">HSE</button>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
