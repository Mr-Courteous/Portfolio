import React from "react";
// import { ReactDOM } from "react";

function NavBarSection (){
    return (
        <div className="nav">

            <div style={{color: "red"}}>
                            {/* <marquee> Mr. Courteous' Portfolio</marquee> */}
            <marquee > PLEASE, NOTE THAT THIS SITE IS CURRENTLY UNDER CONSTRUCTION. IT WILL COMPLETED SOON...</marquee>
            </div>



            <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/contact">Contact</a></li>
 
            </ul>

        </div>
    )
}

export default NavBarSection;