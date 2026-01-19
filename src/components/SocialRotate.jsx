import { useEffect, useState } from "react";
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

    // Observe theme changes on <html>
    const observer = new MutationObserver(updateGradient);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const icons = [
    { href: "https://www.instagram.com/kelvin_empires", icon: faInstagram },
    { href: "https://twitter.com/kelvinEwurum", icon: faTwitter },
    { href: "https://www.linkedin.com/in/kelvinewurum/", icon: faLinkedin },
    {
      href: "https://github.com/kelvinempires?tab=repositories",
      icon: faGithub,
    },
    { href: "mailto:kelvinewurum@gmail.com", icon: faEnvelope },
  ];

  return (
    <div className="fixed bottom-[9rem] left-[-9rem] md:left-[-7rem] flex items-center gap-6 rotate-90">
      {icons.map(({ href, icon }, idx) => (
        <motion.a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-gray-400 hover:text-[var(--accent)] text-[-1rem] md:text-base rotate-[-90deg] transition-colors"
          />
        </motion.a>
      ))}

      <motion.span
        className="w-28 h-0.5"
        style={{ background: lineGradient }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SocialRotate;
