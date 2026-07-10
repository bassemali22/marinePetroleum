import "./GalleryGrid.css";
import CertificateCard from "../CertificateCard/CertificateCard";

const GalleryGrid = ({ certificates, openImage }) => {
  return (
    <section className="gallery-grid">
      <div className="gallery-grid-container">
        {certificates.length > 0 ? (
          certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onOpen={() => openImage(index)}
            />
          ))
        ) : (
          <div className="empty-gallery">
            <h3>No Certificates Found</h3>

            <p>Try changing the search or filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
