import "./QuoteForm.css";

const QuoteForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك معالجة بيانات الفورم لاحقاً
  };

  return (
    <section className="quote-form">
      {/* عناصر ضوئية عائمة في الخلفية لتعزيز الشعور بالعمق والبعد الثالث */}
      <div className="bg-glow bg-glow-left"></div>
      <div className="bg-glow bg-glow-right"></div>

      <div className="container quote-form-container">
        <div className="form-card" data-aos="fade-up" data-aos-duration="1200">
          <div className="form-header">
            <h2>Get a Price Quote</h2>
            <div className="header-bar"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-wrapper">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="input-wrapper">
                <input type="text" placeholder="Company" required />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-wrapper">
                <input type="tel" placeholder="Phone" required />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>
                    Country Code
                  </option>
                  <option value="EG">EG +20</option>
                  <option value="SA">SA +966</option>
                  <option value="UAE">UAE +971</option>
                </select>
              </div>

              <div className="input-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>
                    Select a Service
                  </option>
                  <option value="Inspection">Inspection</option>
                  <option value="Certification">Certification</option>
                  <option value="Load Testing">Load Testing</option>
                  <option value="Training">Training</option>
                </select>
              </div>
            </div>

            <div className="input-wrapper textarea-wrapper">
              <textarea
                rows="6"
                placeholder="Give us more details about your project..."
              ></textarea>
            </div>

            <button type="submit" className="submit-quote-btn">
              <span>Request a Quote</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
