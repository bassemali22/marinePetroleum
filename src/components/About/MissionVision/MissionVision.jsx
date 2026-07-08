import "./MissionVision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="container">
        <div
          className="mission-card"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <FaBullseye className="mission-icon" />

          <span className="subtitle">OUR MISSION</span>

          <h2>Our Mission</h2>

          <p>
            To provide high-quality industrial products and services safely,
            efficiently, and promptly. As a one-stop shop, we ensure a wide
            range of professional solutions under one roof, supporting
            industries to achieve their objectives with reliability and
            expertise.
          </p>
        </div>

        <div
          className="vision-card"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <FaEye className="mission-icon" />

          <span className="subtitle">OUR VISION</span>

          <h2>Our Vision</h2>

          <p>
            To be the trusted partner in industrial, safety, and lifting
            solutions, providing customers with reliable and innovative products
            and services. We are committed to continuously developing as a team,
            ensuring quality service across Egypt, the Middle East, and Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
