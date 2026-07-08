import LandingHero from "../components/Landing/LandingHero/LandingHero";
import AccreditationSection from "../components/Landing/AccreditationSection/AccreditationSection";
import ServicesSection from "../components/Landing/ServicesSection/ServicesSection";
import GallerySection from "../components/Landing/GallerySection/GallerySection";

const Landing = () => {
  return (
    <>
      <LandingHero />
      <AccreditationSection />
      <ServicesSection />
      <GallerySection />
    </>
  );
};

export default Landing;
