import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from "./Home"
import About from "./About"
import Galleria from "./Galleria"
import Contatti from "./Contatti"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

      <Route path ="/" element = {<Home />} />
      <Route path ="/Home" element = {<Home />} />
      <Route path ="/About" element = {<About />} />
      <Route path ="/Galleria" element = {<Galleria />} />
      <Route path="/Contacts" element = {<Contatti />} />
      

      
      </Routes>
      <Home />
      <Footer />
     
      
      
    </div>
  );
}

export default App;
