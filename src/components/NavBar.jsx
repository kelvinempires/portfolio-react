import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/rmv1.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`nav h-20 flex items-center justify-between px-6 md:px-16 bg-white shadow-md fixed w-full z-30 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img className="h-16 w-20 md:h-24 md:w-28" src={logo} alt="logo" />

      <div className="hidden md:flex space-x-8">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer hover:text-indigo-600 transition-colors"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer hover:text-indigo-600 transition-colors"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          offset={-10}
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer hover:text-indigo-600 transition-colors"
        >
          Portfolio
        </Link>
      </div>

      <button
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:flex relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-green-400" />
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-green-400" />
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          Contact Me
        </span>
      </button>

      <FontAwesomeIcon
        icon={faBars}
        className="text-indigo-600 text-3xl cursor-pointer md:hidden"
        onClick={() => setShow(!show)}
      />

      {show && (
        <div className="absolute top-20 right-0 w-48 bg-white shadow-md rounded-xl md:hidden flex flex-col space-y-4 p-6 z-20">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer hover:text-indigo-600 transition-colors"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer hover:text-indigo-600 transition-colors"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            offset={-10}
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer hover:text-indigo-600 transition-colors"
            onClick={() => setShow(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer hover:text-indigo-600 transition-colors"
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
