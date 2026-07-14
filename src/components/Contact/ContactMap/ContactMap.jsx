import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map">
      <div className="map-glow-bg"></div>

      <div className="container contact-map-container">
        <div className="map-header">
          <div className="map-subtitle-wrapper">
            <span className="subtitle">OUR LOCATION</span>
            <div className="subtitle-line"></div>
          </div>

          <h2>Visit Our Office</h2>
        </div>

        <div className="iframe-wrapper">
          <iframe
            title="Marine Petroleum Lifting"
            src="https://www.google.com/maps/embed?pb="
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="map-border-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
