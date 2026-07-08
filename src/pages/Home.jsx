import Accreditations from "../components/Accreditations/Accreditations";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactSection from "../components/ContactSection/ContactSection";
import Hero from "../components/hero/Hero";
import Showcase from "../components/Showcase/Showcase";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
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
