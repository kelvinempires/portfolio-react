import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/rmv1.png";
import { Link } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className=" h-16 max-w-75rem flex items-center justify-between py-3 px-6 md:px-16 sticky top-0 z-30">
      <img
        className="object-cover h-16 w-20 md:h-24 md:w-28"
        src={logo}
        alt="k logo image"
      />

      <div className="hidden md:flex space-x-6">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          className="m-2 md:m-6 cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
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
          className="m-2 md:m-6 cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
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
          className="m-2 md:m-6 cursor-pointer hover:text-purple-500 pb-1 border-b-2 border-transparent hover:border-b-purple-950"
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
        className="hidden md:flex py-1 px-4 border rounded-full text-black items-center space-x-2 transition-all duration-300 ease-in-out"
        style={{
          background:
            "linear-gradient(360deg, rgb(169, 50, 210), rgb(110, 50, 207), rgb(57, 50, 187))",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(360deg, rgb(57, 50, 187), rgb(110, 50, 207), rgb(169, 50, 210))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(360deg, rgb(169, 50, 210), rgb(110, 50, 207), rgb(57, 50, 187))";
        }}
      >
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-full group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-full bg-gray-50"></span>
            <span className="absolute left-0 w-24 h-24 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span className="relative">Contact Me</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-full group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-full"
          ></span>
        </a>
      </button>

      <FontAwesomeIcon
        icon={faBars}
        className="text-violet-600 text-3xl cursor-pointer md:hidden ml-auto"
        onClick={() => setShow(!show)}
      />

      {show && (
        <div className="absolute top-16 right-0 w-52  rounded-2xl shadow-lg md:hidden flex flex-col space-y-6 p-6 z-20">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-purple-500 pb-1 pl-5 rounded-xl bg-gray-800 border-b-2 border-transparent hover:border-b-purple-950"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            offset={-60}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-purple-500 pb-1 pl-5 rounded-xl bg-gray-800 border-b-2 border-transparent hover:border-b-purple-950"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            offset={-20}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-purple-500 pb-1 pl-5 rounded-xl bg-gray-800 border-b-2 border-transparent hover:border-b-purple-950"
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
            className="cursor-pointer hover:text-purple-500 pb-1 pl-5 rounded-xl bg-gray-800 border-b-2 border-transparent hover:border-b-purple-950"
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
