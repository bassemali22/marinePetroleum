import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-form">
          <h2>Contact Us</h2>

          <form>
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>

            <textarea placeholder="Message" rows="6"></textarea>

            <button>Send</button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
