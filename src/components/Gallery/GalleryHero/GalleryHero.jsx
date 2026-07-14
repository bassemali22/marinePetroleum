import "./GalleryHero.css";

const GalleryHero = () => {
  return (
    <section className="gallery-hero">
      <div className="gallery-overlay"></div>

      <div className="container">
        <div className="hero-content-card">
          <span
            className="hero-badge"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            OUR GALLERY
          </span>

          <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            Certificates &
            <br />
            <span>Accreditation</span>
          </h1>

          <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            We proudly present our international certifications, approvals and
            inspection documents proving our commitment to quality, safety and
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
