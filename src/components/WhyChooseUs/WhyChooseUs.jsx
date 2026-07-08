import "./WhyChooseUs.css";

const features = [
  {
    title: "Experienced Team",
    description: "Highly qualified engineers and certified inspectors.",
  },
  {
    title: "International Standards",
    description: "All services comply with international quality standards.",
  },
  {
    title: "Safety First",
    description:
      "We prioritize safety in every lifting and inspection operation.",
  },
  {
    title: "24/7 Support",
    description: "Fast response and continuous customer support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <span className="section-subtitle">WHY CHOOSE US</span>

        <h2>Reliable Lifting & Inspection Solutions</h2>

        <p className="section-description">
          We deliver trusted lifting, inspection, and certification services
          with a commitment to safety, quality, and customer satisfaction.
        </p>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div className="why-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
