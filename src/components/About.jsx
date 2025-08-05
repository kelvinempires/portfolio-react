import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpg";
import aboutImgHover from "../assets/aboutImgHover.jpg";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git/GitHub",
    "Postman",
    "Vercel/Render",
  ];

  const education = [
    {
      institution: "National Open University of Nigeria",
      degree: "BSc Computer Science",
      location: "Victoria Island, Lagos",
    },
    {
      institution: "Gomycode",
      certifications: [
        "Software Development Certificate",
        "MongoDB and Postman Certification",
      ],
      location: "Ikeja, Lagos",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle decorative bubbles (only on desktop) */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute left-10 top-1/4 w-2 h-2 rounded-full bg-violet-400 opacity-10 pointer-events-none"
            animate={{
              y: [0, -15, 0],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-20 bottom-1/4 w-3 h-3 rounded-full bg-white opacity-10 pointer-events-none"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Header with animated underline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          01. About Me
        </span>
        <motion.div
          className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent w-1/2 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.1,
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-gray-300 space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hello! I&apos;m Kelvin Ewurum, a passionate software developer
              with over five years of experience creating digital solutions. My
              journey in tech began with a deep curiosity about how websites
              work, which led me to experiment with building simple web pages.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Fast-forward to today, I&apos;ve had the privilege of working on
              various projects ranging from small business websites to complex
              web applications. My focus is on building accessible, performant,
              and scalable digital experiences that solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Here are some technologies I&apos;ve been working with recently:
            </motion.p>

            <motion.ul
              className="grid grid-cols-2 gap-2 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaArrowRight className="text-violet-400 mr-2 text-xs" />
                  <span>{tech}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg text-violet-300">{edu.institution}</h4>
                  <p className="text-sm text-gray-400">{edu.location}</p>
                  {edu.degree && (
                    <p className="text-gray-300 mt-1">{edu.degree}</p>
                  )}
                  {edu.certifications && (
                    <ul className="mt-1 space-y-1">
                      {edu.certifications.map((cert, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-300 text-sm"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring" }}
                        >
                          {cert}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Image with enhanced hover effects */}
        <motion.div
          className="flex-1 relative group"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="w-full max-w-md mx-auto h-auto aspect-square relative">
            {/* Floating border */}
            <motion.div
              className="absolute inset-0 border-2 border-violet-500 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:border-violet-400 transition-all duration-300 z-0"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)",
              }}
            />

            {/* Image container with parallax effect */}
            <motion.div
              className="relative rounded-lg overflow-hidden w-full h-full z-10 shadow-xl hover:shadow-violet-900/30 transition-all"
              whileHover={{
                scale: 1.03,
                rotate: 0.5,
              }}
              transition={{ type: "spring" }}
            >
              <img
                src={aboutImg}
                alt="Kelvin Ewurum"
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src={aboutImgHover}
                alt="Kelvin Ewurum working"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-violet-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
