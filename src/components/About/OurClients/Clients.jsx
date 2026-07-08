import "./Clients.css";

import client1 from "../../../assets/images/logo.png";
import client2 from "../../../assets/images/fake.jpg";
import client3 from "../../../assets/images/logo.png";
import client4 from "../../../assets/images/fake.jpg";
import client5 from "../../../assets/images/logo.png";
import client6 from "../../../assets/images/fake.jpg";

const clients = [client1, client2, client3, client4, client5, client6];

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <span className="subtitle" data-aos="fade-down">
          OUR CLIENTS
        </span>

        <h2 data-aos="fade-down" data-aos-delay="200">
          Trusted by Leading Companies
        </h2>

        <p className="description" data-aos="fade-down" data-aos-delay="400">
          We are proud to work with leading organizations across Egypt, the
          Middle East, and Africa by providing reliable lifting, inspection, and
          industrial solutions.
        </p>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div
              className="client-card"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 120}
            >
              <img src={client} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
