import React from "react";

function Hero() {
    return (

        <div className="hero-div">

            <div className="background" >
                <video className="video" src="/project-pictures/istockphoto-908286212-640_adpp_is.mp4" autoPlay loop muted />

                
            </div>
            <div className="Hero-section">

                <h1 className="hero-text">
                    Building for you a digital workspace
                </h1>

                <p className="hero-text2">
                    Elevate Your Online Presence with Expert Web Development
                </p>

                    <a href="https://wa.link/92ieuy">
                    <button className="CTA">
                      Message me
                            
                        </button>
                    </a>
            </div>

        </div>



    );
}
export default Hero;