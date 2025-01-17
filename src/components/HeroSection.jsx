import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import heroPics1 from "../assets/kelvin.png";
// import SocialIcons from "./SocialIcons";

const HeroSection = () => {
 
  return (
    <section className="flex">
      {/* <SocialIcons /> */}
      <div
        id="home"
        className="h-screen  md:mt-24 mt-16 w-full max-w-7xl mx-auto overflow-hidden relative md:py-8 py-12 px-8 md:px-24   sm:mt-20 sm:px-16  lg:py-12"
      >
        <div className="relative z-10">
          <span className="text-2xl sm:text-sm font-semibold block md:inline">
            Hello,
          </span>
          <br className="block md:hidden" />
          <span className="text-5xl font-bold mt-4 block ">
            <span className="text-customColor text-4xl sm:text-5xl">
              {"I'm "}
            </span>
            <span className="block md:inline">Kelvin Ewurum</span>
            <br />
            <span className="text-customColor text-4xl sm:text-5xl">
              Full Stack Web Developer.
            </span>
          </span>

          <p className="mt-6 text-xl bg- max-w-2xl hidden md:block text-colorP">
            Welcome to {"Kelvin's"} Web Development Portfolio, Discover my
            projects, skills, and experience in web development, design, and
            software engineering.
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
          className={`absolute top-[-2.5rem] mt-10 md:mt-0 h-[530px] md:right-0 sm:right-5 ml-20 sm:ml-10 mr-8 sm:mr-4 z-[-1] object-cover transition-opacity duration-500`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
