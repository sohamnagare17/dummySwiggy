import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter} from "react-router-dom";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Notfound from "./components/Notfound";
import Menu from "./components/Menu";
import context from "./utils/Usercontext";
import { Provider } from "react-redux";
import store  from "./redux/store";
import Cart from "./components/cart";


const App = () => {
  const [data,setdata]=useState({
    name:"soham",
    email:"nagare7@gmail.com"
  });
  return (
    <Provider store={store}> 
     
      <Router>
       <context.Provider value={{user:data}}>
       <Header />
          <Routes>
           
            <Route path="/" element={<Body/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/menu/:id" element={<Menu/>}/>
             <Route path="/cart" element={<Cart/>}/>
             <Route path="*" element={<Notfound/>}/>
           
          </Routes>
        <Footer />
       </context.Provider>
      </Router>
     
    </Provider>
  );
};

export default App;
