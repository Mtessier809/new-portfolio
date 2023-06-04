import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Work />
      <Contact />
    </div>
  );
}
export default App;
