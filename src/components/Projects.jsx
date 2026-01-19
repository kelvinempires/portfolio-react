import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import SectionHeader from "./reusableCom/SectionHeader";

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
        "Modern banking system with real-time transactions. Features include multi-currency accounts, transaction history, and fraud detection.",
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
        "SaaS platform that analyzes essay pricing across countries using geolocation and market data.",
      tags: ["Next.js", "Python", "Firebase", "Tailwind", "Stripe"],
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

  /* Floating particles */
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 25 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 10,
        opacity: Math.random() * 0.15 + 0.05,
      })),
    );
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 px-8 sm:px-16 md:px-24 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ bottom: -100, opacity: 0 }}
            animate={{ bottom: "110%", opacity: [0, bubble.opacity, 0] }}
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
              background: "var(--particle-color)",
              position: "absolute",
            }}
          />
        ))}
      </div>

      <SectionHeader number="04" title="Some Things I've Built" />

      <div className="space-y-28 relative z-10">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-7/12 relative group">
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "var(--hover-glow)" }}
                />
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ border: "1px solid var(--border-soft)" }}
                />

                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover rounded-xl"
                    style={{
                      border: "1px solid var(--image-border)",
                      boxShadow: "var(--image-shadow)",
                    }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div
                className={`lg:w-5/12 z-10 ${
                  isEven ? "lg:text-right" : "lg:text-left"
                }`}
              >
                <p
                  className="font-mono text-sm mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  Featured Project
                </p>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                {/* Glass card */}
                <div
                  className={`p-6 rounded-lg backdrop-blur-sm mb-4 ${
                    isEven ? "lg:ml-auto" : "lg:mr-auto"
                  }`}
                  style={{
                    maxWidth: "550px",
                    backgroundColor: "var(--card-bg)",
                  }}
                >
                  <p
                    className="text-xs sm:text-sm md:text-base mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  <ul
                    className="space-y-2 text-xs sm:text-sm"
                    style={{ color: "var(--metric-text)" }}
                  >
                    {project.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">▹</span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div
                  className={`flex flex-wrap gap-2 mb-6 ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{
                        backgroundColor: "var(--tag-bg)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className={`flex gap-4 ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--icon-muted)" }}
                      className="transition-colors"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--icon-hover)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--icon-muted)")
                      }
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
