import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".ma-div-one", {
      delay: 1000,
      reset: true,
      duration: 2000,
    });
    ScrollReveal().reveal(".ma-div-two", {
      delay: 600,
      reset: true,
      duration: 2000,
    });
    ScrollReveal().reveal(".ma-div-three", {
      delay: 1400,
      reset: true,
      duration: 2000,
    });
  }, []);
  return (
    <div
      id="about"
      className="w-full bg-slate-500 h-screen flex justify-center items-center"
    >
      <div
        className="ma-div-one bg-yellow-500"
        style={{
          width: "10rem",
          height: "10rem",
          border: "1px solid black",
          margin: "0.5rem",
        }}
      >
        Nati
      </div>
      <div
        className="ma-div-two bg-red-700"
        style={{
          width: "10rem",
          height: "10rem",
          border: "1px solid black",
          margin: "0.5rem",
        }}
      >
        Frew
      </div>
      <div
        className="ma-div-three bg-green-700"
        style={{
          width: "10rem",
          height: "10rem",
          border: "1px solid black",
          margin: "0.5rem",
        }}
      >
        Joel
      </div>
    </div>
  );
};

export default About;
