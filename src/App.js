import { Route, Routes } from "react-router-dom";
import Project from "./routes/Project";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;



/* 
<FaTimes size={20} style={{color: "#fff"}}/> 
<FaBars size={20} />
padding: 0 1rem , 
padding: 1rem , 
justify-content:space-between; 
.nav-menu li a {font-size: 2rem;}  -> (max-width:1040px)
display: initial;
  left: -100%;

  textarea
*/