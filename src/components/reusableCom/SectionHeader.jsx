// components/SectionHeader.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SectionHeader = ({ number, title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[var(--text-primary)]"
    >
      {/* Dynamic Gradient Text */}
      <span
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--gradient-start), var(--gradient-end))",
        }}
      >
        {number}. {title}
      </span>

      {/* Animated Underline */}
      <motion.div
        className="mt-2 h-0.5 w-1/2 mx-auto"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent, var(--gradient-start), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </motion.h2>
  );
};
SectionHeader.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
