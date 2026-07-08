import { useEffect } from "react";
import Accreditations from "../components/Home/Accreditations/Accreditations";
import ContactInfo from "../components/Home/ContactInfo/ContactInfo";
import ContactSection from "../components/Home/ContactSection/ContactSection";
import Hero from "../components/Home/hero/Hero";
import Showcase from "../components/Home/Showcase/Showcase";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Showcase />
      <WhyChooseUs />
      <Accreditations />
      <ContactInfo />
      <ContactSection />
    </div>
  );
};

export default Home;
