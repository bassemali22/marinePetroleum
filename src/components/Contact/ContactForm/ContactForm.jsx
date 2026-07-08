import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-content">
          <div className="form-header">
            <span className="subtitle">GET IN TOUCH</span>

            <h2>Send Us a Message</h2>

            <p>
              Have a question or need more information? Fill out the form and
              our team will get back to you as soon as possible.
            </p>
          </div>

          <form>
            <div className="input-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="input-row">
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
            </div>

            <input className="subject" type="text" placeholder="Subject" />

            <textarea rows="7" placeholder="Write your message..."></textarea>

            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
