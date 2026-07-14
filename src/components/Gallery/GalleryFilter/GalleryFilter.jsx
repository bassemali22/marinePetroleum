import "./GalleryFilter.css";
import {
  FaGlobe,
  FaAward,
  FaShieldAlt,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case "all":
      return <FaGlobe />;
    case "quality":
    case "iso 9001":
      return <FaAward />;
    case "safety":
    case "health":
    case "iso 45001":
      return <FaShieldAlt />;
    case "environment":
    case "iso 14001":
      return <FaLeaf />;
    default:
      return <FaCheckCircle />;
  }
};

const GalleryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div
      className="gallery-filter-wrapper"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="gallery-filter-dock">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              className={`filter-btn ${isActive ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
              title={category}
            >
              <span className="filter-icon">{getCategoryIcon(category)}</span>
              <span className="filter-text">{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryFilter;
