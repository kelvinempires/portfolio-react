import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
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
      <Link to="home" offset={-100} smooth={true} duration={500}>
        <img
          className="h-16 w-20 md:h-24 md:w-28 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </Link>

      <div className="hidden md:flex space-x-8">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
        >
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-violet-900 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={45}
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
        >
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-violet-900 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          offset={-40}
          smooth={true}
          duration={500}
          className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
        >
          Portfolio
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-violet-900 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>
        <a
          href="https://drive.google.com/file/d/1xv7vtcBU8RA5rfPPtSrWMgzGu3IKxVvS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
        >
          CV
        </a>
      </div>

      <button
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:flex relative  items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-fuchsia-900 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-zinc-300 group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-custom-gradient-text group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-purple-900" />
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-zinc-400" />
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          Contact Me
        </span>
      </button>
      {show ? (
        <FontAwesomeIcon
          icon={faTimes} // The "Cancel" or close icon
          className="text-purple-900 text-3xl cursor-pointer md:hidden transition-opacity duration-300 opacity-100"
          onClick={() => setShow(!show)} // Toggles to the menu
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars} // The menu icon
          className="text-purple-900 text-3xl cursor-pointer md:hidden transition-opacity duration-300 opacity-100"
          onClick={() => setShow(!show)} // Toggles to the cancel
        />
      )}

      {show && (
        <div className="absolute top-20 left-0 min-w-full h-screen bg-customBlue shadow-md rounded-xl md:hidden flex flex-col gap-8 p-10 z-20">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
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
            className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
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
            className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
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
            className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1xv7vtcBU8RA5rfPPtSrWMgzGu3IKxVvS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
          >
            CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
