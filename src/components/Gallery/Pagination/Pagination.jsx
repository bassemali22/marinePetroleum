import "./Pagination.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  return (
    <div
      className="pagination-wrapper"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="pagination">
        <button
          className="nav-btn prev-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          aria-label="Previous page"
        >
          <FaChevronLeft className="arrow-icon" />
          <span>Previous</span>
        </button>

        <div className="page-numbers-container">
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={index}
                className={`page-num-btn ${currentPage === pageNum ? "active" : ""}`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          className="nav-btn next-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          aria-label="Next page"
        >
          <span>Next</span>
          <FaChevronRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
