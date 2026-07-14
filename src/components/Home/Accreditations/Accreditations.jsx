import "./Accreditations.css";

import iso9001 from "../../../assets/images/logo.png";
import iso14001 from "../../../assets/images/fake.jpg";
import iso45001 from "../../../assets/images/logo.png";
import ukas from "../../../assets/images/fake.jpg";

const logos = [iso9001, iso14001, iso45001, ukas];

const Accreditations = () => {
  return (
    <section className="accreditations">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1800">
          Our Accreditations
        </h2>

        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div
              className="logo-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="1500"
            >
              <div className="logo-glow"></div>

              <div className="logo-img-wrapper">
                <img src={logo} alt="Accreditation" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
