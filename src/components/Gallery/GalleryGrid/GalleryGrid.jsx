import "./GalleryGrid.css";
import CertificateCard from "../CertificateCard/CertificateCard";
import { FaInbox } from "react-icons/fa";

const GalleryGrid = ({ certificates, openImage }) => {
  const getAnimationDirection = (index) => {
    const directions = [
      "slide-from-left",
      "slide-from-top",
      "slide-from-right",
      "slide-from-bottom",
    ];
    return directions[index % 4];
  };

  return (
    <section className="gallery-grid">
      <div className="gallery-grid-container">
        {certificates.length > 0 ? (
          certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`grid-card-animator ${getAnimationDirection(index)}`}
              style={{ "--card-index": index }}
            >
              <CertificateCard
                certificate={certificate}
                onOpen={() => openImage(certificate.id)}
              />
            </div>
          ))
        ) : (
          <div
            className="empty-gallery"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="empty-icon-box">
              <FaInbox />
            </div>
            <h3>No Certificates Found</h3>
            <p>Try changing the search or adjusting your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
