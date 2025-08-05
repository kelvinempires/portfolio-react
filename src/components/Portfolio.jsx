import { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
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
    mediaType: "image",
    mediaSrc: joel,
    githubCode: "https://github.com/kelvinempires/joe-hair.git",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "peepPluse",
    description: "Twitter-like social media platform",
    url: "https://peeppluse.onrender.com",
    mediaType: "image",
    mediaSrc: peepPluse,
    githubCode: "https://github.com/kelvinempires/PeepPluse-.git",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
  },
  {
    title: "peepMusic",
    description: "Advanced music streaming platform",
    url: "https://peepmusic.onrender.com",
    mediaType: "image",
    mediaSrc: peepMusic,
    githubCode: "https://github.com/kelvinempires/peepMusic.git",
    tags: ["React", "Node.js", "MongoDB", "Audio API"],
  },
  {
    title: "E-Commerce Design",
    description: "Premium responsive E-commerce website Design",
    url: "https://kelvinempires.github.io/e-commarce/",
    mediaType: "image",
    mediaSrc: ecoms,
    githubCode: "https://github.com/kelvinempires/e-commarce.git",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Chat App",
    description: "Real time chatting App with smooth responsive design",
    url: "https://mern-chat-app-fgme.onrender.com",
    mediaType: "image",
    mediaSrc: chat,
    githubCode: "https://github.com/kelvinempires/chatapp.git",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Weather App",
    description: "Keep track of the weather from wherever you are",
    url: "https://kelvinempires.github.io/weather--app/",
    mediaType: "image",
    mediaSrc: weather,
    githubCode: "https://github.com/kelvinempires/weather--app.git",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    title: "Portfolio",
    description: "Portfolio showcasing diverse projects",
    url: "https://kelvinempires.github.io/portfolio-tailwind/",
    mediaType: "image",
    mediaSrc: portfolio,
    githubCode: "https://github.com/kelvinempires/portfolio-tailwind.git",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Portfolio = () => {
  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(".slider-wrapper .image-list");
      const slideButtons = document.querySelectorAll(
        ".slider-wrapper .slide-button"
      );
      const sliderScrollbar = document.querySelector(
        ".container .slider-scrollbar"
      );
      const scrollbarThumb = sliderScrollbar?.querySelector(".scrollbar-thumb");

      if (!imageList) return;

      // Mobile touch scrolling with momentum
      let isDown = false;
      let startX;
      let scrollLeft;
      let velocity;
      let momentumId;
      let lastScrollTime = 0;

      const handleTouchStart = (e) => {
        isDown = true;
        startX = e.pageX || e.touches[0].pageX;
        scrollLeft = imageList.scrollLeft;
        cancelMomentumTracking();
      };

      const handleTouchMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 2; // Scroll multiplier

        // Calculate velocity for momentum
        const now = Date.now();
        const timeDiff = now - lastScrollTime;
        if (timeDiff > 0) {
          velocity = (imageList.scrollLeft - (scrollLeft - walk)) / timeDiff;
        }
        lastScrollTime = now;

        imageList.scrollLeft = scrollLeft - walk;
      };

      const handleTouchEnd = () => {
        isDown = false;
        beginMomentumTracking();
      };

      const beginMomentumTracking = () => {
        cancelMomentumTracking();
        momentumId = requestAnimationFrame(momentumLoop);
      };

      const cancelMomentumTracking = () => {
        cancelAnimationFrame(momentumId);
      };

      const momentumLoop = () => {
        imageList.scrollLeft += velocity * 16; // 16ms for 60fps
        velocity *= 0.95; // Friction
        if (Math.abs(velocity) > 0.5) {
          momentumId = requestAnimationFrame(momentumLoop);
        }
      };

      // Desktop mouse events
      imageList.addEventListener("mousedown", handleTouchStart);
      imageList.addEventListener("mousemove", handleTouchMove);
      imageList.addEventListener("mouseup", handleTouchEnd);
      imageList.addEventListener("mouseleave", handleTouchEnd);

      // Mobile touch events
      imageList.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      imageList.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      imageList.addEventListener("touchend", handleTouchEnd);

      // Rest of slider initialization
      if (!scrollbarThumb) return;

      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      // Handle scrollbar thumb drag
      scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition =
          sliderScrollbar.getBoundingClientRect().width -
          scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(
            0,
            Math.min(maxThumbPosition, newThumbPosition)
          );
          const scrollPosition =
            (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });

      // Slide images according to the slide button clicks
      slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });

      // Show or hide slide buttons based on scroll position
      const handleSlideButtons = () => {
        if (slideButtons[0]) {
          slideButtons[0].style.display =
            imageList.scrollLeft <= 0 ? "none" : "flex";
        }
        if (slideButtons[1]) {
          slideButtons[1].style.display =
            imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
        }
      };

      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        if (!sliderScrollbar || !scrollbarThumb) return;
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition =
          (scrollPosition / maxScrollLeft) *
          (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };

      imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
      });

      handleSlideButtons();

      // Cleanup function
      return () => {
        imageList.removeEventListener("mousedown", handleTouchStart);
        imageList.removeEventListener("mousemove", handleTouchMove);
        imageList.removeEventListener("mouseup", handleTouchEnd);
        imageList.removeEventListener("mouseleave", handleTouchEnd);
        imageList.removeEventListener("touchstart", handleTouchStart);
        imageList.removeEventListener("touchmove", handleTouchMove);
        imageList.removeEventListener("touchend", handleTouchEnd);
        cancelMomentumTracking();
      };
    };

    const cleanup = initSlider();
    window.addEventListener("resize", initSlider);

    return () => {
      window.removeEventListener("resize", initSlider);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 max-w-8xl mx-auto overflow-hidden"
    >
      {/* Title with matching style */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          04. My Other Projects
        </span>
        <motion.div
          className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent w-1/2 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      <div className="container mt-12 px-0 sm:px-0 md:px-4 lg:px-4">
        <div className="slider-wrapper relative">
          <button
            id="prev-slide"
            className="slide-button material-symbols-rounded absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm text-white p-3 rounded-full z-10 hover:bg-violet-600 transition-colors duration-300 hidden md:flex"
            aria-label="Previous Slide"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          <ul className="image-list flex overflow-x-auto md:overflow-x-hidden space-x-6 pb-6 scrollbar-hide touch-pan-x snap-x snap-mandatory">
            {portfolioItems.map((item, index) => (
              <motion.li
                key={index}
                className="image-item flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-[28rem] bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-violet-500/30 transition-all duration-300 snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative group h-full flex flex-col">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                    className="block flex-grow"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                        <div>
                          <h3 className="text-white text-xl font-bold">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={item.mediaSrc}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                  </a>

                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-gray-400 px-2 py-1 bg-gray-800/50 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </a>
                      <a
                        href={item.githubCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                      >
                        <FaGithub />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          <button
            id="next-slide"
            className="slide-button material-symbols-rounded absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm text-white p-3 rounded-full z-10 hover:bg-violet-600 transition-colors duration-300 hidden md:flex"
            aria-label="Next Slide"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        <div className="slider-scrollbar mt-6 hidden md:block">
          <div className="scrollbar-track bg-gray-700/50 h-1.5 rounded-full">
            <div className="scrollbar-thumb bg-violet-500 h-1.5 rounded-full hover:bg-violet-400 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
