import { motion } from "framer-motion";
import "./WhyChooseUs.css";
import { FaShieldAlt, FaShip, FaUsers, FaAward } from "react-icons/fa";

const cards = [
  {
    icon: <FaShieldAlt />,
    title: "Safety First",
    text: "We maintain the highest safety standards in all operations.",
  },
  {
    icon: <FaShip />,
    title: "Marine Expertise",
    text: "Professional marine services with experienced teams.",
  },
  {
    icon: <FaUsers />,
    title: "Professional Team",
    text: "Skilled engineers and specialists delivering excellence.",
  },
  {
    icon: <FaAward />,
    title: "Quality Assurance",
    text: "Committed to international quality standards.",
  },
];

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="container">
        <motion.span
          className="section-subtitle"
          initial={{ opacity: 0, y: 20, letterSpacing: "2px" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "4px" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          WHY CHOOSE US
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Excellence In Marine Services
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          We provide reliable marine petroleum solutions with high standards of
          safety, quality and professionalism.
        </motion.p>

        <div className="why-grid">
          {cards.map((card, index) => (
            <motion.div
              className="why-card"
              key={index}
              initial={{
                opacity: 0,
                x: -100,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
            >
              <div className="icon-box">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
