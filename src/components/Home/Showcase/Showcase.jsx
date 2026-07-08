import "./Showcase.css";
import showcaseImage from "../../../assets/images/fake.jpg";

const Showcase = () => {
  return (
    <section
      className="showcase"
      style={{ backgroundImage: `url(${showcaseImage})` }}
    >
      <div className="showcases-overlay">
        <h2>Precision. Safety. Excellence.</h2>
      </div>
    </section>
  );
};

export default Showcase;
