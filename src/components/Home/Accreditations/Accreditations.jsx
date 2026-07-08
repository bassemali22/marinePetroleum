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
        <h2>Our Accreditations</h2>

        <div className="logos">
          {logos.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt="Accreditation" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
