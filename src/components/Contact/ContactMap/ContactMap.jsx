import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map">
      <div className="container">
        <div className="map-header">
          <span className="subtitle">OUR LOCATION</span>

          <h2>Visit Our Office</h2>
        </div>

        <iframe
          title="Marine Petroleum Lifting"
          src="https://www.google.com/maps/embed?pb="
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
