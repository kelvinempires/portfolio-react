
const OurServices = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "End-to-end web applications using the MERN stack (MongoDB, Express, React, Node.js).",
    },
    {
      title: "API Development",
      description:
        "Building RESTful and GraphQL APIs for seamless communication between front-end and back-end.",
    },
    {
      title: "Database Management",
      description:
        "Implementing and managing databases using MongoDB and Mongoose.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing code and implementing server-side rendering for improved performance.",
    },
    {
      title: "Authentication and Authorization",
      description:
        "Implementing secure authentication and authorization mechanisms.",
    },
    {
      title: "Third-Party Integrations",
      description:
        "Integrating third-party services such as payment gateways and social media platforms.",
    },
  ];

  return (
    <section id="our-services" className="p-10 md:p-20 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-300">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg rounded-md p-6 border-t-4 border-gray-900 hover:border-gray-700 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 bg-gray-800 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-gray-900 to-gray-800 transform -skew-x-12"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-gray-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
