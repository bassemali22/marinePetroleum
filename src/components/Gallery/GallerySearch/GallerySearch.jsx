import "./GallerySearch.css";
import { FaSearch } from "react-icons/fa";

const GallerySearch = ({ search, setSearch }) => {
  return (
    <div className="gallery-search">
      <FaSearch />

      <input
        type="text"
        placeholder="Search certificates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default GallerySearch;
