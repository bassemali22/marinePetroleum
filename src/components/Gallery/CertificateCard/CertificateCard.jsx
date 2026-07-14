import "./CertificateCard.css";
import { FaExpandAlt } from "react-icons/fa";

const CertificateCard = ({ certificate, onOpen }) => {
  return (
    <div className="certificate-circle-card" onClick={onOpen}>
      <div className="medallion-ring ring-outer"></div>
      <div className="medallion-ring ring-inner"></div>

      <div className="circle-image-wrapper">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="certificate-img"
        />

        <div className="circle-overlay">
          <div className="overlay-content">
            <div className="zoom-icon-box">
              <FaExpandAlt />
            </div>
            <span className="overlay-category">{certificate.category}</span>
          </div>
        </div>
      </div>

      <div className="circle-card-info">
        <h4>{certificate.title}</h4>
        <span className="badge-category">{certificate.category}</span>
      </div>
    </div>
  );
};

export default CertificateCard;
