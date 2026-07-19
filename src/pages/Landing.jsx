import LandingHero from "../components/Landing/LandingHero/LandingHero";
import AccreditationSection from "../components/Landing/AccreditationSection/AccreditationSection";
import ServicesSection from "../components/Landing/ServicesSection/ServicesSection";
import GallerySection from "../components/Landing/GallerySection/GallerySection";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <AccreditationSection />
      <LandingHero />
      <ServicesSection />
      <GallerySection />
    </>
  );
};

export default Landing;
