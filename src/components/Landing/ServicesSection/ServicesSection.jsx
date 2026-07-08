import "./ServicesSection.css";

const services = ["Supply", "Inspection", "Training", "Projects"];

const Services = () => {
  return (
    <section className="services">
      <h2>SERVICES</h2>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
