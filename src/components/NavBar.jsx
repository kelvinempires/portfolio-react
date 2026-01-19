import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faTimes,
  faBars,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/rmv1.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 10);

      // Update active link based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          currentScrollPos >= sectionTop - 200 &&
          currentScrollPos < sectionTop + sectionHeight - 200
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { id: "home", label: "Home", offset: -100 },
    { id: "about", label: "About", offset: -80 },
    { id: "experience", label: "Work", offset: -80 },
    { id: "projects", label: "Projects", offset: -80 },
  ];

  const mobileItems = [
    ...navItems,
    { id: "contact", label: "Contact", offset: -80 },
    {
      id: "resume",
      label: "Resume",
      offset: 0,
      external: true,
      url: "https://eu.docworkspace.com/d/sIOGV2JeiAdP2-8YG?sa=601.1037",
    },
  ];

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/kelvinempires" },
    { icon: faLinkedin, url: "https://linkedin.com/in/kelvinewurum" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ type: "spring", damping: 25, stiffness: 500 }}
      className={`fixed w-full z-50 h-20 backdrop-blur-md transition-all duration-300 border-b border-[var(--border-light)]`}
      style={{
        background: scrolled ? "var(--nav-bg)" : "rgba(var(--bg-rgb),0.9)", // optional for transparency if you define --bg-rgb: 10,25,47;
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="flex items-center"
            onClick={() => setActiveLink("home")}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto transition-all duration-300 hover:opacity-90"
            />
            <span className="text-transparent text-xl hover:cursor-pointer bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)]">
              _elvin
            </span>
            <span className="text-transparent text-xl hover:cursor-pointer bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] display-name hidden sm:inline">
              _Ewurum
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={800}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeLink === item.id
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:cursor-pointer"
                }`}
                onClick={() => setActiveLink(item.id)}
              >
                <span className="text-[var(--accent)] mr-1">
                  0{navItems.indexOf(item) + 1}.
                </span>
                {item.label}
              </Link>
            </motion.div>
          ))}

          {/* Resume Link */}
          <motion.a
            href="https://eu.docworkspace.com/d/sIOGV2JeiAdP2-8YG?sa=601.1037"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            Resume
            <FontAwesomeIcon icon={faDownload} className="ml-2 text-xs" />
          </motion.a>

          {/* Contact Button */}
          <motion.button
            whileHover={{
              y: -2,
              backgroundColor: "var(--border-light)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
              setActiveLink("contact");
            }}
            className="ml-4 px-6 py-2 rounded-md border border-[var(--accent)] text-[var(--accent)] text-sm font-medium flex items-center hover:bg-[var(--border-light)] transition-all duration-300"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-xs" />
          </motion.button>

          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-[var(--text-secondary)] rounded-md focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <div className="flex items-center justify-between gap-2">
            {" "}
            <ThemeSwitcher />
            <FontAwesomeIcon
              icon={showMenu ? faTimes : faBars}
              className="text-xl"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-[var(--nav-bg)] shadow-xl border-t border-[var(--border-light)]"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col py-4 px-6"
            >
              {mobileItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-b border-[var(--border-light)] last:border-0"
                >
                  {item.external ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-4 text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium flex items-center"
                      onClick={() => setShowMenu(false)}
                    >
                      <span className="text-[var(--accent)] mr-2">
                        0{mobileItems.indexOf(item) + 1}.
                      </span>
                      {item.label}
                      {item.id === "resume" && (
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="ml-2 text-xs"
                        />
                      )}
                    </a>
                  ) : (
                    <Link
                      to={item.id}
                      smooth={true}
                      offset={item.offset}
                      duration={800}
                      className="block py-4 text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium"
                      onClick={() => {
                        setActiveLink(item.id);
                        setShowMenu(false);
                      }}
                    >
                      <span className="text-[var(--accent)] mr-2">
                        0{mobileItems.indexOf(item) + 1}.
                      </span>
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Social Links */}

              <div className="flex space-x-4 pt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "var(--accent)" }}
                    className="text-[var(--text-secondary)] text-xl"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
