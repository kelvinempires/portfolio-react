import { motion } from "framer-motion";

const Rotate = () => {
  return (
    <div className="fixed bottom-[9rem] sm:right-[-9rem] md:right-[-7rem] hidden sm:flex items-center gap-6 rotate-90">
      <motion.a
        href="mailto:kelvinewurum@gmail.com"
        className="flex items-center leading-8 tracking-wide"
        whileHover={{
          scale: 1.05,
          color: "#a78bfa", // violet-400
        }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.p
          className="font-mono text-[0.9rem] leading-8 tracking-widest text-gray-400 hover:text-violet-400 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          kelvinewurum@gmail.com
        </motion.p>
      </motion.a>
      <motion.span
        className="w-28 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default Rotate;
