import fly from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <section>
      <div
        id="about"
        className="flex   items-center p-10 md:p-20  py-12 px-8 md:px-24"
      >
        <img
          src={fly}
          alt="tech display"
          className="w-1/2 h-auto hidden lg:block custom-shadow-indigo"
        />
        <div className="text-center md:text-left pl-10 w-full h-auto custom-shadow-indigo transition duration-200 ease-in-out">
          <p className="custom-gradient-text text-4xl font-bold">
            Software Developer
          </p>
          <abbr title="About Me">
            With over five years of experience in the tech industry, I have
            developed a diverse skill set that includes HTML, CSS, TailwindCSS,
            JavaScript, TypeScript, React, Node.js, Express, Next.js, Appwrite,
            Dwolla, Plaid, MongoDB, and more.
            <br />
            <br />
            <strong>Educational Background:</strong>
            <br />
            <strong>Bachelor of Science in Computer Science:</strong> National
            Open University of Nigeria, Victoria Island, Lagos.
            <br />
            <strong>Bootcamp Certificate in Software Development:</strong>{" "}
            Gomycode, Ikeja, Lagos, Nigeria. Certification along side this
            program includes <strong>Postman Certification</strong> and{" "}
            <strong>Mongodb certification</strong>
            <br />
            <br />
          </abbr>

          <div className="relative overflow-hidden whitespace-nowrap bg-gray-200 py-2 marquee-container">
            <div className="animate-marquee inline-block">
              <div className="marquee-container">
                <div className="marquee-text">
                  My journey in web development began with a deep curiosity for
                  how things work, and it has evolved into a career where I
                  continuously strive to learn and adapt to new challenges. I
                  thrive in collaborative environments and enjoy solving complex
                  problems to deliver high-quality solutions. Outside of coding,
                  I enjoy staying active, exploring new technologies, and
                  contributing to open source projects. Join me on this exciting
                  journey of innovation and excellence in web development.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
