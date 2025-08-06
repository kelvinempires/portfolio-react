import { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,

} from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";

// Import your images
import joel from "../assets/joel.png";
import weather from "../assets/weather.png";
import portfolio from "../assets/portfolio.png";
import peepPluse from "../assets/peepPluse.png";
import ecoms from "../assets/ecoms.png";
import chat from "../assets/chat.png";
import peepMusic from "../assets/pmusic.png";

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
      className="min-h-screen  text-white px-4 sm:px-16 md:px-24 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center relative z-10"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
            04. more Made by Me
          </span>
          <motion.div
            className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent w-1/2 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={item.mediaSrc}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-purple-800/20 text-purple-300 rounded-full border border-purple-500/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 px-3 py-1.5 rounded-md bg-purple-600 hover:bg-purple-700 transition text-white"
                  >
                    Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  <a
                    href={item.githubCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-500 hover:border-white transition text-gray-300 hover:text-white"
                  >
                    <FaGithub />
                    Code
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
