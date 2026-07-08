import "./WhatWeDo.css";
import image from "../../../assets/images/logo.png";

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="container">
        <div className="what-image" data-aos="fade-right">
          <img src={image} alt="What We Do" />
        </div>
        <div className="what-content" data-aos="fade-left" data-aos-delay="300">
          <span className="subtitle">WHAT WE DO</span>

          <h2>Delivering Safe & Reliable Lifting Solutions</h2>

          <p>
            Petrolift provides professional lifting equipment inspection,
            certification, testing, training, and engineering services for
            various industrial sectors. Our commitment to quality and safety
            ensures reliable solutions that meet international standards.
          </p>

          <p>
            With years of experience and a dedicated team of certified
            engineers, we support our clients through every stage of their
            lifting operations.
          </p>

          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
