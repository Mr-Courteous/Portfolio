import React from "react";
// import ReactDOM from 'react-dom/client';
import {Routes, Route} from "react-router-dom"
import Home from "./Routes/Home";
import About from './Routes/About'
import Contact from "./Routes/ContactMe";



function App (){
    return (
        <Routes>

            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />





        </Routes>

    )
};
 

export default  App;