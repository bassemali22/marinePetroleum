import "./AccreditationSection.css";

import iso from "../../../assets/images/logo1.jpg";
import leea from "../../../assets/images/logo2.jpg";
import abs from "../../../assets/images/logo3.jpg";
import egac from "../../../assets/images/logo4.jpg";
import nqi from "../../../assets/images/logo5.jpg";

const accreditations = [
  {
    image: iso,
    title: "ISO",
    desc: "9001 • 14001 • 45001",
  },
  {
    image: leea,
    title: "LEEA",
    desc: "Accredited",
  },
  {
    image: abs,
    title: "ABS",
    desc: "Certification",
  },
  {
    image: egac,
    title: "EGAC",
    desc: "Accredited",
  },
  {
    image: nqi,
    title: "NQI",
    desc: "National Quality Institute",
  },
];

const AccreditationSection = () => {
  return (
    <section className="accreditation-section">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          ACCREDITATIONS
        </h2>

        <div className="accreditation-grid">
          {accreditations.map((item, index) => (
            <div
              className="accreditation-card"
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className="card-glow"></div>

              <div className="img-container">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
