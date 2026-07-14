import "./QuoteFooter.css";

const QuoteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="quote-footer">
      <div className="footer-top-border"></div>

      <div className="container quote-footer-container">
        <p className="copyright-text">
          © {currentYear}{" "}
          <span className="brand-highlight">Marine Petroleum</span> Team. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default QuoteFooter;
