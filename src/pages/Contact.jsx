import { useEffect } from "react";
import ContactHero from "../components/Contact/ContactHero/ContactHero";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactHero />
      
    </>
  );
};

export default Contact;
