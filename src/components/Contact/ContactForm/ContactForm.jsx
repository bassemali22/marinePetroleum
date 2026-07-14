import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-form-section">
      <div className="form-bg-glow"></div>

      <div className="container contact-form-container">
        <div className="form-content">
          <div className="form-header">
            <div className="form-subtitle-wrapper">
              <span className="subtitle">GET IN TOUCH</span>
              <div className="subtitle-line"></div>
            </div>

            <h2>Send Us a Message</h2>

            <p>
              Have a question or need more information? Fill out the form and
              our team will get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-wrapper">
                <input type="text" required placeholder="First Name" />
                <span className="input-focus-line"></span>
              </div>
              <div className="input-wrapper">
                <input type="text" required placeholder="Last Name" />
                <span className="input-focus-line"></span>
              </div>
            </div>

            <div className="input-row">
              <div className="input-wrapper">
                <input type="email" required placeholder="Email Address" />
                <span className="input-focus-line"></span>
              </div>
              <div className="input-wrapper">
                <input type="tel" placeholder="Phone Number" />
                <span className="input-focus-line"></span>
              </div>
            </div>

            <div className="input-wrapper subject-wrapper">
              <input
                className="subject"
                type="text"
                required
                placeholder="Subject"
              />
              <span className="input-focus-line"></span>
            </div>

            <div className="input-wrapper textarea-wrapper">
              <textarea
                rows="7"
                required
                placeholder="Write your message..."
              ></textarea>
              <span className="input-focus-line"></span>
            </div>

            <button type="submit" className="submit-btn">
              <span className="btn-text">Send Message</span>
              <span className="btn-glow-effect"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
