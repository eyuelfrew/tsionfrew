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
        <div style={{ position: "sticky", top: 0 }} className="bg-white">
          <Navbar />
        </div>
        <div id="home">
          <Home></Home>
        </div>
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <button
          id="back-to-top"
          onClick={scroolTop}
          style={{ display: vissible ? "inline" : "none" }}
        >
          <FaArrowUp color="white" />
        </button>
      </section>
    </>
  );
}

export default App;
