import { useEffect } from "react";
import MissionVision from "../components/About/MissionVision/MissionVision";
import QualityPolicy from "../components/About/QualityPolicy/QualityPolicy";
import Suppliers from "../components/About/Suppliers/Suppliers";
import WhatWeDo from "../components/About/WhatWeDo/WhatWeDo";
import Clients from "../components/About/OurClients/Clients";

const About = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <WhatWeDo />
      <QualityPolicy />
      <Suppliers />
      <MissionVision />
      <Clients />
    </div>
  );
};

export default About;
