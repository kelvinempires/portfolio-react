import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      title: "CinemaHub Pro",
      description:
        "A full-featured movie ticket booking platform that can be white-labeled by multiple cinema chains. Supports seat selection, payment processing, and admin management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
      image: "/cinema.png",
      links: [
        {
          url: "https://github.com/kelvinempires/movieTicket-bookingApp.git",
          icon: <FaGithub />,
        },
        { url: "#", icon: <FaExternalLinkAlt /> },
      ],
      metrics: [
        "Used by 3 cinema chains",
        "Processed 5,000+ ticket sales",
        "95% booking success rate",
      ],
    },
    {
      title: "PeepBank",
      description:
        "Modern banking system with real-time transactions, built with TypeScript and Century for monetization. Features include multi-currency accounts, transaction history, and fraud detection.",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Century", "Jest"],
      image: "/bank.png",
      links: [
        {
          url: "https://github.com/kelvinempires/peepBank.git",
          icon: <FaGithub />,
        },
      ],
      metrics: [
        "Handled 10,000+ transactions",
        "99.9% uptime",
        "Reduced fraud by 30%",
      ],
    },
    {
      title: "GlobalEssay Pricing SaaS",
      description:
        "SaaS platform that analyzes and compares essay writing service pricing across different countries. Uses geolocation and market data to provide optimal pricing strategies.",
      tags: ["Next.js", "Python", "Firebase", "Tailwind CSS", "Stripe"],
      image: "/ecom.png",
      links: [
        {
          url: "https://github.com/kelvinempires/saas.git",
          icon: <FaGithub />,
        },
        { url: "#", icon: <FaExternalLinkAlt /> },
      ],
      metrics: [
        "Analyzed 50+ services",
        "Saved users 40% on average",
        "95% accuracy rate",
      ],
    },
  ];

  // Bubble data for the background animation
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate bubbles with random properties
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 25 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.15 + 0.05,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 px-8 sm:px-16 md:px-24 lg:px-24 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ bottom: -100, opacity: 0 }}
            animate={{
              bottom: "110%",
              opacity: [0, bubble.opacity, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              borderRadius: "50%",
              background: "rgba(139, 92, 246, 0.2)",
              position: "absolute",
            }}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center relative z-10"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          04. Some Things I&apos;ve Built
        </span>
        <motion.div
          className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent w-1/2 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      <div className="space-y-28 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-12 items-center`}
          >
            {/* Image Container */}
            <div className="lg:w-7/12 relative group">
              <div className="absolute inset-0 bg-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-violet-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                className="relative rounded-xl overflow-hidden"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                  style={{
                    border: "1px solid rgba(74, 4, 134, 0.2)",
                    boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                  }}
                />
              </motion.div>
            </div>

            {/* Project Details */}
            <div
              className={`lg:w-5/12 z-10 ${
                index % 2 === 0 ? "lg:text-right" : "lg:text-left"
              }`}
            >
              <p className="text-violet-400 font-mono text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <div
                className={`bg-gray-900/70 p-6 rounded-lg backdrop-blur-sm mb-4 ${
                  index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                }`}
                style={{ maxWidth: "550px" }}
              >
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Achievement Metrics */}
                <ul className="space-y-2 text-xs sm:text-sm text-violet-300">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">▹</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`flex flex-wrap gap-2 mb-6 ${
                  index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                }`}
              >
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-gray-400 px-2 py-1 bg-gray-800/50 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={`flex gap-4 ${
                  index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                }`}
              >
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-400 transition-colors"
                    aria-label={`${
                      link.icon.type === FaGithub ? "GitHub" : "Live Demo"
                    } for ${project.title}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
