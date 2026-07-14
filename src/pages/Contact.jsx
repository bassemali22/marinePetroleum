import { useEffect } from "react";

import ContactHero from "../components/Contact/ContactHero/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo/ContactInfo";
import ContactForm from "../components/Contact/ContactForm/ContactForm";
import ContactMap from "../components/Contact/ContactMap/ContactMap";
import ContactFooter from "../components/Contact/ContactFooter/ContactFooter";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactFooter />
    </>
  );
};

export default Contact;
