import "./Showcase.css";
import showcaseImage from "../../../assets/images/primary.jpg";

const Showcase = () => {
  return (
    <section
      className="showcase"
      style={{ backgroundImage: `url(${showcaseImage})` }}
    >
      <div className="showcase-overlay">
        <h2>Precision. Safety. Excellence.</h2>
      </div>
    </section>
  );
};

export default Showcase;
