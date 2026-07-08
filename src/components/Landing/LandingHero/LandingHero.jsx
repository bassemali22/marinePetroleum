import "./LandingHero.css";
import bg from "../../../assets/images/primary.jpg";
import logo from "../../../assets/images/logo.png";

const Hero = () => {
  return (
    <section className="landing-hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="landing-overlay">
        <img src={logo} alt="" className="landing-logo" />

        <h1>MARINE PETROLEUM LIFTING</h1>

        <p>SAFE LIFTING • RELIABLE PARTNER • GLOBAL STANDARDS</p>
      </div>
    </section>
  );
};

export default Hero;
