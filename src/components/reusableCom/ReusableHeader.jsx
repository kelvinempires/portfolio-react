import PropTypes from "prop-types";
import { motion } from "framer-motion";

const GradientTitle = ({ children, delay = 0, hover = true }) => {
  return (
    <motion.span
      className="inline-block text-transparent bg-clip-text"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--accent), var(--particle-dot))",
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      whileHover={
        hover
          ? {
              textShadow: "0 0 12px var(--accent)",
              scale: 1.02,
            }
          : {}
      }
    >
      {children}
    </motion.span>
  );
};

GradientTitle.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  hover: PropTypes.bool,
};

export default GradientTitle;
