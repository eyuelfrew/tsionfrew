import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import ScrollReveal from "scrollreveal";
function App() {
  return (
    <>
      <section id="home">
        <div style={{ position: "sticky", top: 0 }} className="bg-white">
          <Navbar />
        </div>
        <div>
          <Home></Home>
        </div>
      </section>
    </>
  );
}

export default App;
