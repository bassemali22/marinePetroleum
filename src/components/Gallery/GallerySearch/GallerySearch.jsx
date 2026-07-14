import "./GallerySearch.css";
import { FaSearch, FaTimes } from "react-icons/fa";

const GallerySearch = ({ search, setSearch }) => {
  return (
    <div
      className="gallery-search-wrapper"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
    >
      <div className={`gallery-search ${search ? "has-text" : ""}`}>
        <div className="search-icon-box">
          <FaSearch className="search-icon" />
        </div>

        <input
          type="text"
          placeholder="Search certificates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className={`clear-btn ${search ? "visible" : ""}`}
          onClick={() => setSearch("")}
          title="Clear search"
          type="button"
        >
          <FaTimes />
        </button>

        <span className="search-glow"></span>
      </div>
    </div>
  );
};

export default GallerySearch;
