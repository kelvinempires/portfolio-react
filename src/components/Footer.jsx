
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = new Date().toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <span className="text-lg font-semibold">
          © {currentYear} Kelvin Empire. All rights reserved.
        </span>
        <div className="flex space-x-4 text-sm text-gray-400">
          <span>Date: {currentDate}</span>
          <span>Time: {currentTime}</span>
          <span>Crafted with passion.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
