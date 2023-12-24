import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
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
      </section>
    </>
  );
}

export default App;
