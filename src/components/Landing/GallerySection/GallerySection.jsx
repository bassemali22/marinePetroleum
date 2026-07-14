import { Link } from "react-router-dom";
import "./GallerySection.css";

const Gallery = () => {
  return (
    <section className="gallery">
      <Link to="/certificate">
        <button>VIEW CERTIFICATE</button>
      </Link>
    </section>
  );
};

export default Gallery;
