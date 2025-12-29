import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}
