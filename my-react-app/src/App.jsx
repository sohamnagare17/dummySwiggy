import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter} from "react-router-dom";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Notfound from "./components/Notfound";
import Menu from "./components/Menu";
const App = () => {
  return (
    <>
      <Router>
        <Header />
          <Routes>
             <Route path="/" element={<Body/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/menu/:id" element={<Menu/>}/>
             <Route path="*" element={<Notfound/>}/>
          </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
