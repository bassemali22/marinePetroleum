import "./CertificateCard.css";
import { FaExpandAlt } from "react-icons/fa";

const CertificateCard = ({ certificate, onOpen }) => {
  return (
    <div className="certificate-card" onClick={onOpen}>
      <img src={certificate.image} alt={certificate.title} />

      <div className="certificate-overlay">
        <FaExpandAlt />

        <h3>{certificate.title}</h3>

        <p>{certificate.category}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
