import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Switcher from "./Switcher";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 dark:bg-black z-40">
      <img src={logo} className="w-12 h-12" />
      <div class="hidden w-full md:flex md:items-center md:w-auto">
        <ul
          className="pt-4
              text-base text-black dark:text-white
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li className="md:p-4 py-2 block">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="hover:text-primary"
            >
              About
            </Link>
          </li>
          <li className="md:p-4 py-2 block">
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              className="hover:text-primary"
            >
              Skills
            </Link>
          </li>
          <li className="md:p-4 py-2 block">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="hover:text-primary"
            >
              Projects
            </Link>
          </li>
          <li className="md:p-4 py-2 block">
            <Link
              to="contacts"
              smooth={true}
              duration={1000}
              className="hover:text-primary"
            >
              Contact
            </Link>
          </li>
          <li className="md:p-4 py-2 block">
            <Switcher />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10  dark:text-white text-xl"
      >
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white dark:bg-black dark:text-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="contacts"
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Switcher />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
