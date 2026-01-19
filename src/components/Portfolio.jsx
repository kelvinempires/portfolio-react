import { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";

import joel from "../assets/joel.png";
import weather from "../assets/weather.png";
import portfolio from "../assets/portfolio.png";
import peepPluse from "../assets/peepPluse.png";
import ecoms from "../assets/ecoms.png";
import chat from "../assets/chat.png";
import peepMusic from "../assets/pmusic.png";
import SectionHeader from "./reusableCom/SectionHeader";

const portfolioItems = [
  {
    title: "E-commerce website",
    description: "Complete e-commerce website with Admin page",
    url: "https://joel-hair.vercel.app",
    mediaSrc: joel,
    githubCode: "https://github.com/kelvinempires/joe-hair.git",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "peepPluse",
    description: "Twitter-like social media platform",
    url: "https://peeppluse.onrender.com",
    mediaSrc: peepPluse,
    githubCode: "https://github.com/kelvinempires/PeepPluse-.git",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "peepMusic",
    description: "Advanced music streaming platform",
    url: "https://peepmusic.onrender.com",
    mediaSrc: peepMusic,
    githubCode: "https://github.com/kelvinempires/peepMusic.git",
    tags: ["React", "Node.js", "MongoDB", "Audio API"],
  },
  {
    title: "E-Commerce Design",
    description: "Premium responsive E-commerce website Design",
    url: "https://kelvinempires.github.io/e-commarce/",
    mediaSrc: ecoms,
    githubCode: "https://github.com/kelvinempires/e-commarce.git",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Chat App",
    description: "Real time chatting App with smooth responsive design",
    url: "https://mern-chat-app-fgme.onrender.com",
    mediaSrc: chat,
    githubCode: "https://github.com/kelvinempires/chatapp.git",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Weather App",
    description: "Keep track of the weather from wherever you are",
    url: "https://kelvinempires.github.io/weather--app/",
    mediaSrc: weather,
    githubCode: "https://github.com/kelvinempires/weather--app.git",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    title: "Portfolio",
    description: "Portfolio showcasing diverse projects",
    url: "https://kelvinempires.github.io/portfolio-tailwind/",
    mediaSrc: portfolio,
    githubCode: "https://github.com/kelvinempires/portfolio-tailwind.git",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section
      id="portfolio"
      className="min-h-screen px-6 sm:px-16 md:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="04.2" title="More Made by Me" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="rounded-xl overflow-hidden backdrop-blur-sm"
              style={{
                backgroundColor: "var(--card-bg)",
                boxShadow: "var(--image-shadow)",
                border: "1px solid var(--border-soft)",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden h-52 relative group">
                <img
                  src={item.mediaSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: "var(--hover-glow)" }}
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded font-mono"
                      style={{
                        backgroundColor: "var(--tag-bg)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-soft)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs flex items-center gap-2 px-3 py-1.5 rounded-md transition"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "#fff",
                    }}
                  >
                    Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>

                  <a
                    href={item.githubCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs flex items-center gap-2 px-3 py-1.5 rounded-md transition"
                    style={{
                      border: "1px solid var(--border-soft)",
                      color: "var(--icon-muted)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--icon-hover)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--icon-muted)")
                    }
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
