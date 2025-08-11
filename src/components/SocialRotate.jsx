import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const SocialRotate = () => {
  return (
    <div className="fixed bottom-[9rem] left-[-9rem] md:left-[-7rem] flex items-center gap-6 rotate-90">
      <motion.a
        href="https://www.instagram.com/kelvin_empires"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-gray-400 hover:text-violet-400 text-[-1rem] md:text-base rotate-[-90deg] transition-colors"
        />
      </motion.a>
      <motion.a
        href="https://twitter.com/kelvinEwurum"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="text-gray-400 hover:text-violet-400 text-[-1rem] md:text-base rotate-[-90deg] transition-colors"
        />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/kelvin-ewurum/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-gray-400 hover:text-violet-400 text-[-1rem] md:text-base rotate-[-90deg] transition-colors"
        />
      </motion.a>
      <motion.a
        href="https://github.com/kelvinempires?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-gray-400 hover:text-violet-400 text-[-1rem] md:text-base rotate-[-90deg] transition-colors"
        />
      </motion.a>
      <motion.a
        href="mailto:kelvinewurum@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-gray-400 hover:text-violet-400 text-[-1rem] md:text-base rotate-[-90deg] transition-colors"
        />
      </motion.a>
      <motion.span
        className="w-28 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SocialRotate;
