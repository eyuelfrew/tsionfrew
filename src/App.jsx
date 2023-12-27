import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
function App() {
  const [vissible, setVisuble] = useState(false);

  useEffect(() => {
    const toogleVissible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisuble(true);
      } else if (scrolled <= 300) {
        setVisuble(false);
      }
    };

    window.addEventListener("scroll", toogleVissible);
  }, []);
  const scroolTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <button
          id="back-to-top"
          onClick={scroolTop}
          className="sm:-ml-40"
          style={{ display: vissible ? "inline" : "none" }}
        >
          <FaArrowUp color="white" />
        </button>
      </section>
    </>
  );
}

export default App;
