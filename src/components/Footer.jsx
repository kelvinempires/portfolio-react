const Footer = () => {
  return (
    <footer className="bottom-0 w-full text-white">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4 text-xs text-gray-400">
          <span>Crafted by Kelvin Ewurum &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
