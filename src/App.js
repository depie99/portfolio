import "./App.css";
import About from "./src/about/About";
import Home from "./src/home/Home";
import Navbar from "./components/Navbar";
import Skills from "./src/skills/Skills";
import Works from "./src/works/Works";

function App() {
  return (
    <div className="pb-8 mb-5">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
