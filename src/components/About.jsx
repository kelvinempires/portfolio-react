import fly from "../assets/aboutImg.jpg";
import flyHover from "../assets/aboutImgHover.jpg"; // Import the second image
import MyList from "./MyList";

const About = () => {
  return (
    <section className=" overflow-hidden relative pt-8 sm:pt-0 mt-10 sm:mt-0 md:py-8 px-8 sm:px-16 md:px-24">
      <div
        id="about"
        className="flex flex-col lg:flex-row h-auto items-center md:py-20 space-y-8 lg:space-y-0 lg:space-x-8"
      >
        <div className="flex-1 w-full lg:w-1/2 h-auto relative group">
          <div className="absolute inset-0 border-4 border-zinc-400 rounded-lg transition-all duration-700 ease-in-out transform translate-x-3 translate-y-3 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <img
            src={fly}
            alt="tech display"
            className="w-full h-full object-cover rounded-lg relative z-10 transition-transform duration-700 ease-in-out transform translate-y-[-10px] group-hover:translate-y-[-20px] opacity-100 group-hover:opacity-0"
          />
          <img
            src={flyHover}
            alt="tech display hover"
            className="w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="flex-1 w-full lg:w-1/2 h-auto">
          <MyList />
        </div>
      </div>
    </section>
  );
};

export default About;
