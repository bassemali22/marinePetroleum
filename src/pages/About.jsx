import { useEffect } from "react";
import MissionVision from "../components/MissionVision/MissionVision";
import QualityPolicy from "../components/QualityPolicy/QualityPolicy";
import Suppliers from "../components/Suppliers/Suppliers";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Clients from "../components/OurClients/Clients";

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
