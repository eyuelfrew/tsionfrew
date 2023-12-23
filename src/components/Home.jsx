/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "../App.css";
const photo = require("./../assets/tsionfrew.png");

const Home = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-around ">
      <div className="sm:text-left sm:mt-0">
        <h1 className="intro-text">Hello there,</h1>
        <div className=" sm:flex-row">
          <div>
            <p className="text-purple-800 font-extrabold text-2xl">
              I'm <span className="my-name font-medium">Tsion Frew</span>
            </p>
            <div className="flex items-start mt-36">
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
      </div>

      <div className="mt-4 sm:mt-0">
        <img src={photo} alt="" width={400} />
      </div>
    </div>
  );
};

export default Home;
