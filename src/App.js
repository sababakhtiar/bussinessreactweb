import React from "react"
import Home from "./Home"
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter ,  Route,  Routes} from 'react-router-dom';
import Navbar from "./Navbar";
function App() {
  return (
    <>
     < BrowserRouter>
    <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      </>
   
  );
};

export default App;

