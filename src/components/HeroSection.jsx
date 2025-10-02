import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Color palette
  const colors = {
    primary: "rgb(139, 92, 246)", // violet-500
    secondary: "rgb(124, 58, 237)", // violet-600
    accent: "rgb(196, 181, 253)", // violet-200
    dark: "rgb(15, 23, 42)", // gray-900
    darker: "rgb(9, 9, 11)", // gray-950
    text: {
      primary: "rgb(229, 231, 235)", // gray-100
      secondary: "rgb(156, 163, 175)", // gray-400
    },
  };

  // Typewriter content
  const desktopRoles = [
    "React Specialist",
    "Next.js Developer",
    "Full-Stack Engineer",
    "TypeScript Expert",
    "Node.js Developer",
    "Product Manager",
  ];

  const mobileRoles = [
    "React Dev",
    "Next.js",
    "Full-Stack",
    "TypeScript",
    "Node.js",
    "Product Manager",
  ];

  const [text] = useTypewriter({
    words: isMobile ? mobileRoles : desktopRoles,
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const floating = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="flex px-8 md:px-0 mt-6 relative overflow-hidden">
      <div
        id="home"
        className="h-screen flex flex-col justify-center max-w-7xl mx-auto"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="relative z-10 w-full"
        >
          {/* Greeting line */}
          <motion.div variants={item} className="flex items-center gap-2 mb-1">
            <div
              className="w-8 md:w-12 h-[2px] mb-2"
              style={{ backgroundColor: colors.text.secondary }}
            ></div>
            <p
              className="font-medium md:text-base pb-2"
              style={{ color: colors.text.secondary }}
            >
              Hello
            </p>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={floating} animate="animate" className="mb-4">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold"
              style={{ color: colors.text.primary }}
            >
              <span className="prata-regular" style={{ color: colors.primary }}>
                I&apos;m{" "}
              </span>
              <span className="prata-regular">Kelvin Ewurum</span>
            </h1>

            <div className="flex flex-wrap items-baseline mt-2">
              <h2
                className="prata-regular text-3xl sm:text-5xl mr-2"
                style={{ color: colors.primary }}
              >
                {isMobile ? "Dev," : "Developer,"}
              </h2>
              <div
                className="font-playfair text-2xl sm:text-5xl min-w-[200px]"
                style={{ color: colors.text.primary }}
              >
                {text}
                <Cursor cursorColor={colors.primary} cursorStyle="|" />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={item}
            className="max-w-2xl mt-6 mb-8"
            style={{ color: colors.text.secondary }}
          >
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              I build exceptional digital experiences with modern web
              technologies. Passionate about clean code, intuitive interfaces,
              and scalable architecture. Currently specializing in React,
              Next.js, and full-stack JavaScript solutions.
              <span
                className="inline-block align-middle ml-3 w-8 h-[2px]"
                style={{ backgroundColor: colors.text.secondary }}
              ></span>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={item}>
            <motion.button
              aria-label="Hire me button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 15px ${colors.primary}80`,
              }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 py-3 px-8 rounded-full font-medium relative overflow-hidden group"
              style={{
                background: `linear-gradient(45deg, ${colors.secondary}, ${colors.primary})`,
                color: colors.text.primary,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <FontAwesomeIcon icon={faUserTie} />
                <span>Hire Me</span>
              </span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating bubbles */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute right-20 top-1/4 w-3 h-3 rounded-full pointer-events-none"
              style={{ backgroundColor: colors.primary, opacity: 0.2 }}
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute left-10 top-1/3 w-2 h-2 rounded-full pointer-events-none"
              style={{ backgroundColor: colors.accent, opacity: 0.15 }}
              animate={{
                y: [0, -20, 0],
                x: [0, -8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute right-1/4 bottom-1/3 w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{ backgroundColor: colors.primary, opacity: 0.15 }}
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
