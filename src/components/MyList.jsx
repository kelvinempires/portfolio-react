import { FaArrowRight } from "react-icons/fa";

const MyList = () => {
  const items = [
    "HTML/CSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Express",
    "Node.js",
    "MongoDB/Mongoose",
    "Postman",
    "GitHub",
    "Vercel/Render",
  ];

  return (
    <div className="text-center md:text-left p-10 w-full h-auto custom-shadow-indigo transition duration-200 ease-in-out">
      <p className="text-zinc-400 text-3xl font-bold">About Me</p>
      <div>
        <abbr title="experience">
          <strong className="text-xl">Experience: </strong>
        </abbr>
        <span className="text-zinc-300">
          With over five years in tech, my diverse skill sets include:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center ml-4">
              <FaArrowRight className="text-purple-900 mr-2 text-xs" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <abbr title="Educational Background" className="block mt-6">
          <strong>Educational Background:</strong>
        </abbr>
        <div className="mt-2">
          <h3>National Open University of Nigeria, Victoria Island, Lagos</h3>
          <p>BSc in Computer Science</p>
          <h3>Gomycode, Ikeja, Lagos, Nigeria</h3>
          <p>Software Development Certificate</p>
          <p>MongoDB and Postman Certification</p>
        </div>
      </div>
      <div className="relative overflow-hidden whitespace-nowrap bg-gray-200 py-2 marquee-container">
        <div className="animate-marquee inline-block">
          <div className="marquee-container">
            <div className="marquee-text">
              My journey in web development began with a deep curiosity for how
              things work, and it has evolved into a career where I continuously
              strive to learn and adapt to new challenges. I thrive in
              collaborative environments and enjoy solving complex problems to
              deliver high-quality solutions. Outside of coding, I enjoy staying
              active, exploring new technologies, and contributing to open
              source projects. Join me on this exciting journey of innovation
              and excellence in web development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
