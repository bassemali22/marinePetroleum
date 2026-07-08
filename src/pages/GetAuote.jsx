import { useEffect } from "react";
import QuoteHero from "../components/Quote/QuoteHero/QuoteHero";
import QuoteForm from "../components/Quote/QuoteForm/QuoteForm";
import ContactBanner from "../components/Quote/ContactBanner/ContactBanner";
import QuoteFooter from "../components/Quote/QuoteFooter/QuoteFooter";

const Quote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <QuoteHero />
      <QuoteForm />
      <ContactBanner />
      <QuoteFooter />
    </>
  );
};

export default Quote;
