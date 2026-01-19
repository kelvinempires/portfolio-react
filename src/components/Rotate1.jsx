import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Rotate = () => {
  const [lineGradient, setLineGradient] = useState(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--line-gradient"
    )
  );

  useEffect(() => {
    // Function to update gradient from CSS variable
    const updateGradient = () => {
      const gradient = getComputedStyle(document.documentElement)
        .getPropertyValue("--line-gradient")
        .trim();
      setLineGradient(gradient);
    };

    // Observe <html> class changes (theme toggle)
    const observer = new MutationObserver(updateGradient);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-[9rem] sm:right-[-9rem] md:right-[-7rem] hidden sm:flex items-center gap-6 rotate-90">
      <motion.a
        href="mailto:kelvinewurum@gmail.com"
        className="flex items-center leading-8 tracking-wide"
        whileHover={{
          scale: 1.05,
          color: "var(--accent)", // theme-based
        }}
        transition={{ type: "spring", stiffness: 400 }}
        style={{ color: "var(--text-secondary)" }}
      >
        <motion.p
          className="font-mono text-[0.9rem] leading-8 tracking-widest transition-colors"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          kelvinewurum@gmail.com
        </motion.p>
      </motion.a>

      <motion.span
        className="w-28 h-0.5"
        style={{ background: lineGradient }} // theme-based gradient
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default Rotate;
