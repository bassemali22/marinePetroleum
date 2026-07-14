import "./QuoteHero.css";
import heroImage from "../../../assets/images/fake.jpg";

const QuoteHero = () => {
  return (
    <section
      className="quote-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="quote-hero-overlay">
        <div className="container quote-container">
          <div className="quote-content">
            <div className="subtitle-wrapper">
              <span className="subtitle">GET A PRICE QUOTE</span>
              <div className="subtitle-line"></div>
            </div>

            <h1>Request a Free Quote</h1>

            <p>
              Fill out the form below and our specialists will contact you as
              soon as possible with the best industrial lifting solutions for
              your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteHero;
