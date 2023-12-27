/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Typed from "typed.js";
import React from "react";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "../App.css";
const photo = require("./../assets/tsi-three.png");

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(".ma-div-pic", {
      delay: 200,
      reset: true,
      useDelay: "onload",
      duration: 1500,
    });
    const typed = new Typed(el.current, {
      strings: ["Tsion Frew", "", "Receptionist", "Manager", "Counciler"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="">
      <div className="min-h-screen text-center mt-12">
        <h1 className="text-5xl font-fontCusome">Hello there-;</h1>
        <h1 className=" mt-3 font-fontCusome ">I'm </h1>
        <span
          ref={el}
          className="text-5xl bg-gradient-to-r from-pink-300 to-pink-600 bg-clip-text text-transparent"
        ></span>
        <div className="animate-pulse animate-infinite animate-duration-[2000ms] animate-delay-0 mx-auto bg-gradient-to-b from-pink-500 to-pink-200 rounded-full w-80 h-80 overflow-hidden">
          <img src={photo} alt="ZION" className="max-h-min b " />
        </div>
      </div>
      <div>
        <div className="flex  items-start sm:mt-7 lg:mt-36">
          <div className="card">
            <a className="socialContainer containerOne" href="#">
              <FaInstagram className="socialSvg instagramSvg" />
            </a>
            <a className="socialContainer containerTwo" href="">
              <FaFacebook className="socialSvg twitterSvg" />
            </a>

            <a className="socialContainer containerThree" href="">
              <FaLinkedin className="socialSvg linkdinSvg" />
            </a>

            <a className="socialContainer containerFour">
              <FaWhatsapp className="socialSvg whatsappSvg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
// eslint-disable-next-line no-lone-blocks
{
  /* <div className="flex  items-start sm:mt-7 lg:mt-36">
        <div className="card">
          <a className="socialContainer containerOne" href="#">
            <FaInstagram className="socialSvg instagramSvg" />
          </a>
          <a className="socialContainer containerTwo" href="">
            <FaFacebook className="socialSvg twitterSvg" />
          </a>

          <a className="socialContainer containerThree" href="">
            <FaLinkedin className="socialSvg linkdinSvg" />
          </a>

          <a className="socialContainer containerFour">
            <FaWhatsapp className="socialSvg whatsappSvg" />
          </a>
        </div>
      </div> */
}
{
  /* <div id="home" className="flex h-screen items">
      <div className="">
        <div className="flex-col">
          <h1 className="intro-text">Hello there,</h1>

          <div className="w-fit">
            <p className="text-purple-800 font-extrabold text-2xl">
              I'm <span ref={el} className="my-name font-medium "></span>
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={photo}
          alt="ZION"
          width={400}
          className="ma-div-pic h-screen"
        />
      </div>
      <div className=" "></div>
      
    </div> */
}
