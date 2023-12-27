import React from "react";
// import { ReactDOM } from "react";

function NavBarSection (){
    return (
        <div className="nav">
            <marquee> Mr. Courteous' Portfolio</marquee>
            <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/contact">Contact</a></li>
 
            </ul>

        </div>
    )
}

export default NavBarSection;