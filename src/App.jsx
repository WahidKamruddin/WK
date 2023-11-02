import Construction from "./components/construction";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <Construction/>
      <Navbar/>
      <Hero/>
      <hr id="projects"></hr>
      <Projects/>
      <hr></hr>
      <Contact/>
      <hr></hr>
    </div>
  );
}

export default App;
