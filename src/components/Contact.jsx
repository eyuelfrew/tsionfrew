import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal(".headline");
  }, []);
  return (
    <div
      id="contact"
      className="w-full h-screen flex justify-center items-center bg-pink-300"
    >
      Contact
      <h1 className="headline">joel frew</h1>
    </div>
  );
};

export default Contact;
