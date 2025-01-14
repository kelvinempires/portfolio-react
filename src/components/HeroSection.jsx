import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import heroPics1 from "../assets/kelvin.png";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {
 
  return (
    <section className="flex">
      <SocialIcons />
      <div
        id="home"
        className="md:pr-0 md:mt-16 mt-2 h-[calc(100vh-5rem)] w-full max-w-7xl mx-auto overflow-hidden relative px-4 md:px-16 py-4 md:py-8"
      >
        <div className="relative z-10">
          <span className="text-3xl font-semibold block md:inline">Hello,</span>
          <br className="block md:hidden" />
          <span className="text-5xl font-bold mt-4 block">
            {"I'm "}
            <span className="text-indigo-600 block md:inline">Kelvin</span>
            <br />
            A Full Stack Web Developer.
          </span>

          <p className="mt-6 text-xl max-w-2xl hidden md:block">
          Welcome to {"Kelvin's"} Web Development Portfolio, Discover my projects,
            skills, and experience in web development, design, and software
            engineering.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 py-3 px-6 border rounded-full text-white flex items-center space-x-3 transition-all duration-300 ease-in-out"
            style={{
              background:
                "linear-gradient(45deg, rgb(169, 50, 210), rgb(110, 50, 207), rgb(57, 50, 187))",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgb(57, 50, 187), rgb(110, 50, 207), rgb(169, 50, 210))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(45deg, rgb(169, 50, 210), rgb(110, 50, 207), rgb(57, 50, 187))";
            }}
          >
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center space-x-2">
                <FontAwesomeIcon icon={faUserTie} />
                <span>Hire me</span>
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </a>
          </button>
        </div>
        <img
          src={heroPics1}
          alt="profile"
          className={`absolute top-[-2.5rem] md:mt-0 mt-10 h-[530px] md:right-0 ml-20 mr-8 z-[-1] object-cover transition-opacity duration-500 `}
        />
      </div>
    </section>
  );
};

export default HeroSection;
