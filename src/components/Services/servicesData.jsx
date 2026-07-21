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
    title: "Supply",
    text: "Reliable certification services ensuring compliance with global requirements.",
    path: "/services/Supply",
  },

  {
    icon: <FaTools />,
    title: "Traning",
    text: "Advanced load testing solutions for industrial equipment.",
    path: "/services/training",
  },

  {
    icon: <FaGraduationCap />,
    title: "Projects",
    text: "Certified training programs helping professionals improve safety and operational skills.",
    path: "/services/project",
  },
];
