import "./Suppliers.css";
import bgImage from "../../assets/images/fake.jpg";

import supplier1 from "../../assets/images/logo.png";
import supplier2 from "../../assets/images/fake.jpg";
import supplier3 from "../../assets/images/logo.png";
import supplier4 from "../../assets/images/fake.jpg";
import supplier5 from "../../assets/images/logo.png";
import supplier6 from "../../assets/images/fake.jpg";

const suppliers = [
  supplier1,
  supplier2,
  supplier3,
  supplier4,
  supplier5,
  supplier6,
];

const Suppliers = () => {
  return (
    <section
      className="suppliers"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="container">
          <span className="subtitle">OUR SUPPLIERS</span>

          <h2>Trusted Global Suppliers</h2>

          <p className="description">
            We proudly collaborate with internationally recognized suppliers to
            deliver certified lifting equipment and industrial solutions.
          </p>

          <div className="suppliers-grid">
            {suppliers.map((supplier, index) => (
              <div
                className="supplier-card"
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <img src={supplier} alt={`Supplier ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
