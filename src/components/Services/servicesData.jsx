import {
  FaSearch,
  FaTools,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";

export const servicesData = [
  {
    icon: <FaSearch />,
    title: "Inspection Services",
    text: "Professional inspection solutions for lifting equipment and industrial assets following international standards.",
    path: "/services/inspection",
  },

  {
    icon: <FaCertificate />,
    title: "Certification",
    text: "Reliable certification services ensuring compliance with global requirements.",
    path: "/services/certification",
  },

  {
    icon: <FaTools />,
    title: "Load Testing",
    text: "Advanced load testing solutions for industrial equipment.",
    path: "/services/load-testing",
  },

  {
    icon: <FaGraduationCap />,
    title: "Training Services",
    text: "Certified training programs helping professionals improve safety and operational skills.",
    path: "/services/training",
  },
];
