import "./QuoteForm.css";

const QuoteForm = () => {
  return (
    <section className="quote-form">
      <div className="container">
        <div className="form-card">
          <h2>Get a Price Quote</h2>

          <form>
            <div className="input-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Company" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
            </div>

            <div className="input-group">
              <select>
                <option>EG +20</option>
                <option>SA +966</option>
                <option>UAE +971</option>
              </select>

              <select>
                <option>Select a Service</option>
                <option>Inspection</option>
                <option>Certification</option>
                <option>Load Testing</option>
                <option>Training</option>
              </select>
            </div>

            <textarea rows="6" placeholder="Give us more details..."></textarea>

            <button type="submit">Request a Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
