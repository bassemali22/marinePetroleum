import "./LightBox.css";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
} from "react-icons/fa";
import { useEffect, useCallback } from "react";

const LightBox = ({
  certificates,
  currentIndex,
  setCurrentIndex,
  closeImage,
}) => {
  const nextImage = useCallback(() => {
    if (currentIndex === null) return;

    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  }, [currentIndex, certificates.length, setCurrentIndex]);

  const prevImage = useCallback(() => {
    if (currentIndex === null) return;

    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  }, [currentIndex, certificates.length, setCurrentIndex]);
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeImage();
          break;

        case "ArrowRight":
          nextImage();
          break;

        case "ArrowLeft":
          prevImage();
          break;

        default:
          break;
      }
    };
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
    
  }, [currentIndex, closeImage, nextImage, prevImage]);
  if (currentIndex === null) return null;

  const currentImage = certificates[currentIndex];

  return (
    <div className="lightbox" onClick={closeImage}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeImage}>
          <FaTimes />
        </button>

        <button className="prev-btn" onClick={prevImage}>
          <FaChevronLeft />
        </button>

        <img src={currentImage.image} alt={currentImage.title} />

        <button className="next-btn" onClick={nextImage}>
          <FaChevronRight />
        </button>

        <div className="lightbox-footer">
          <div className="counter">
            {currentIndex + 1} / {certificates.length}
          </div>

          <a href={currentImage.image} download className="download-btn">
            <FaDownload />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
