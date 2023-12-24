import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "../App.css";

let Logo = require("./../assets/logo.png");
const Navbar = () => {
  const [isToggle, setToggle] = useState(false);

  const buttonToggle = (e) => {
    setToggle(!isToggle);
  };
  return (
    <nav className="z-10 w-full top-0 left-0 h-20  bg-white">
      <div className="max-w-full mx-auto ">
        <div className="flex justify-between ">
          <div>
            <Link to={"home"} duration={500} className="flex">
              <img src={Logo} alt="ZION" className="h-26 w-24 " />
              <span className="font-semibold text-gray-500 pe-5"></span>
            </Link>
          </div>
          <div className="hidden lg:flex  items-center space-x-1 mx-24">
            <Link
              to={"home"}
              duration={500}
              className="py-4 px-2 text-pink-500 hover:cursor-pointer rounded-lg border-green-500 text-2xl font-semibold "
            >
              Home
            </Link>
            <Link
              to={"about"}
              duration={500}
              className="py-4 px-2 hover:cursor-pointer text-gray-500  hover:text-green-500 transition duration-300 text-2xl font-semibold"
            >
              About
            </Link>
            <Link
              to={"skill"}
              duration={500}
              className="py-4 px-2 hover:cursor-pointer text-gray-500 text-2xl font-semibold hover:text-green-500 transition duration-300"
            >
              Skill
            </Link>
            <Link
              to={"portfollio"}
              duration={500}
              className="py-4 px-2 hover:cursor-pointer text-gray-500 text-2xl font-semibold hover:text-green-500 transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              to={"contact"}
              duration={500}
              className="py-4 px-2 hover:cursor-pointer text-gray-500 text-2xl font-semibold  transition duration-300"
            >
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex md:hidden items-center  ">
            <Link
              to={"contact"}
              className="py-2  w-56 text-center font-medium text-white bg-pink-500 rounded hover:bg-green-400 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
          <div className="md:flex flex lg:hidden  items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => {
                buttonToggle();
              }}
            >
              <FaBars size={50} className="text-fuchsia-500" />
            </button>
          </div>
        </div>
      </div>
      {isToggle ? (
        <div className="lg:hidden md:hidden  mobile-menu">
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <Link
                href="#contact"
                className="block text-sm px-2 py-4 bg-pink-600 hover:bg-green-500 transition duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default Navbar;
