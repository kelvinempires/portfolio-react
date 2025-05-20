import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

// import gallery from "../assets/mygallery.png";
// import harvest from "../assets/harvest.png";
// import perfume from "../assets/perfume.png";
// import heroSection from "../assets/landingpage.png";

// import qrCode from "../assets/qrCode.png";
// import card from "../assets/c.png";
// import shoe from "../assets/shoe.png";
// import fly from "../assets/fly.png";
// import flex from "../assets/flex.png";
// import jumia from "../assets/jumia.png";
// import image1 from "../assets/image1.png";
// import form from "../assets/form.png";
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
    description: "complete e-commerce website with Admin page",
    url: "https://joel-hair.vercel.app",
    mediaType: "image",
    mediaSrc: joel,
    githubCode: "https://github.com/kelvinempires/joe-hair.git",
  },
  {
    title: "peepPluse",
    description: "Twitter-like peepPluse social media platform.",
    url: "https://peeppluse.onrender.com",
    mediaType: "image",
    mediaSrc: peepPluse,
    githubCode: "https://github.com/kelvinempires/PeepPluse-.git",
  },
  {
    title: "peepMusic",
    description: "Advanced peepMusic streaming platform.",
    url: "https://peepmusic.onrender.com",
    mediaType: "image",
    mediaSrc: peepMusic,
    githubCode: "https://github.com/kelvinempires/peepMusic.git",
  },
  {
    title: "E-Commerce Website Design",
    description: "premium and responsive E-commerce website Design",
    url: "https://kelvinempires.github.io/e-commarce/",
    mediaType: "image",
    mediaSrc: ecoms,
    githubCode: "https://github.com/kelvinempires/e-commarce.git",
  },
  {
    title: "chat App",
    description: "real time chatting App with smooth responsive design",
    url: "https://mern-chat-app-fgme.onrender.com",
    mediaType: "image",
    mediaSrc: chat,
    githubCode: "https://github.com/kelvinempires/chatapp.git",
  },
  {
    title: "Weather App",
    description: "keep track of the weather from wherever you are.. ",
    url: "https://kelvinempires.github.io/weather--app/",
    mediaType: "image",
    mediaSrc: weather,
    githubCode: "https://github.com/kelvinempires/weather--app.git",
  },
  {
    title: "portfolio",
    description: "portfolio showcasing diverse projects",
    url: "https://kelvinempires.github.io/portfolio-tailwind/",
    mediaType: "image",
    mediaSrc: portfolio,
    githubCode: "https://github.com/kelvinempires/portfolio-tailwind.git",
  },


  //   title: "Form",
  //   description: "non-responsive form with suboptimal navigation.",
  //   url: "https://kelvinempires.github.io/form/",
  //   mediaType: "image",
  //   mediaSrc: form,
  //   githubCode: "https://github.com/kelvinempires/form.git",
  // },
  // {
  //   title: "HarvestGrove",
  //   description: "Beginner-friendly web page with clear and clean design. ",
  //   url: "https://kelvinempires.github.io/harvestGrove/ ",
  //   mediaType: "image",
  //   mediaSrc: harvest,
  //   githubCode: "https://github.com/kelvinempires/harvestGrove.git",
  // },

  //   title: "Qr-code",
  //   description: "Qr-code  project with basic technologies",
  //   url: "https://kelvinempires.github.io/qr-code/",
  //   mediaType: "image",
  //   mediaSrc: qrCode,
  //   githubCode: "https://github.com/kelvinempires/qr-code.git",
  // },
  
  // {
  //   title: "Banking App",
  //   description: "(under-deployment....) real-time banking App.....",
  //   url: "https://example.com/full-stack-project",
  //   mediaType: "image",
  //   mediaSrc: harvest,
  //   githubCode: "https://github.com/kelvinempires/peepBank.git",
  // },
  // Add more portfolio items here
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
      const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      // Handle scrollbar thumb drag
      scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition =
          sliderScrollbar.getBoundingClientRect().width -
          scrollbarThumb.offsetWidth;

        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(
            0,
            Math.min(maxThumbPosition, newThumbPosition)
          );
          const scrollPosition =
            (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        // Add event listeners for drag interaction
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
        slideButtons[0].style.display =
          imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display =
          imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
      };

      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition =
          (scrollPosition / maxScrollLeft) *
          (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };
      // Call these two functions when image list scrolls
      imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
      });
    };

    window.addEventListener("resize", initSlider);
    window.addEventListener("load", initSlider);
    initSlider(); // Initialize slider on component mount

    return () => {
      window.removeEventListener("resize", initSlider);
      window.removeEventListener("load", initSlider);
    };
  }, []);

  return (
    <main id="portfolio" className="p-4 sm:p-6 md:p-0 lg:p-0">
      <div className="border-b-2 m-4 md:m-20 lg:m-16">
        <h1 className="font-playfair text-center text-zinc-700 dark:text-zinc-300 font-serif font-bold text-2xl sm:text-3xl md:text-4xl px-4 py-8 tracking-tight leading-tight">
          Explore the projects I&apos;ve built with creativity and code
        </h1>
      </div>

      <div className="container mt-6 sm:mt-8 md:mt-12 lg:mt-14  px-0 sm:px-0 md:px-18 lg:px-20">
        <div className="slider-wrapper relative">
          <button
            id="prev-slide"
            className="slide-button material-symbols-rounded"
            aria-label="Previous Slide"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <ul className="image-list flex overflow-x-scroll space-x-4">
            {portfolioItems.map((item, index) => (
              <li key={index} className="image-item flex-shrink-0">
                <div className="bg-gray-800 text-center p-2 rounded-md relative group  hover:bg-gray-900 transition duration-300">
                  <p className="text-xs sm:text-sm font-semibold pt-2 custom-gradient-text">
                    {item.title}
                  </p>
                  <h1 className="px-5 pb-5 font-semibold text-xs sm:text-sm md:text-base lg:text-lg fixed-size-description">
                    {item.description}
                  </h1>
                  <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href={item.url}
                    className="relative block"
                  >
                    {item.mediaType === "video" ? (
                      <video
                        className="h-36 w-96 px-5 sm:px-5 md:px-5 lg:px-5 hover:h-36 hover:w-105 hover:px-2 transition-all duration-500 transform group-hover:scale-105"
                        src={item.mediaSrc}
                        height="300"
                        width="300"
                        autoPlay
                        loop
                      ></video>
                    ) : (
                      <img
                        className="h-36 w-96 px-5 sm:px-5 md:px-5 lg:px-5 hover:h-36 hover:w-105 hover:px-2 transition-all duration-500 transform group-hover:scale-105"
                        src={item.mediaSrc}
                        height="200"
                        width="300"
                        alt="Project Screenshot"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FontAwesomeIcon
                        icon={faPlayCircle}
                        className="text-white text-4xl"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-500 hover:text-white"
                  >
                    Live Demo
                  </a>
                  <a
                    href={item.githubCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-500 hover:text-white"
                  >
                    GitHub Code
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <button
            id="next-slide"
            className="slide-button material-symbols-rounded"
            aria-label="Next Slide"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className="slider-scrollbar mt-0">
          <div className="scrollbar-track bg-gray-300 rounded-full">
            <div className="scrollbar-thumb bg-black rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center pt-8"></div>
      </div>
    </main>
  );
};

export default Portfolio;
