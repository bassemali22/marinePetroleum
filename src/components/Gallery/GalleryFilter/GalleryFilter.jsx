import "./GalleryFilter.css";

const GalleryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="gallery-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
