import ServicesHeader from "../ServicesHeader/ServicesHeader";
import ServiceCard from "../ServiceCard/ServiceCard";

import { servicesData } from "../servicesData";

import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-section">
      <ServicesHeader />

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
