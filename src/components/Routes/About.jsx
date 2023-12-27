import React from 'react'
// import ReactDom from 'react-dom'
import NavBarSection from "../NavBar";
import Footer from "../Footer"



const About = () => {
    return (
        <div>
            <NavBarSection />

            <h1 className='about-heading'>MR COURTEOUS</h1>

            <p className='about-me-text'>Hello there! 👋 I'm Taiwo Courteous, a passionate web developer who embarked on this coding journey in 2021. What began as a curiosity has evolved into a profound love for crafting digital experiences.

                I've delved into the core technologies that power the web, mastering the trinity of HTML, CSS, and JavaScript. The magic of turning lines of code into visually stunning and interactive interfaces continues to captivate me.

                My journey led me to embrace the power of React, where I honed my skills in building dynamic and responsive user interfaces. The thrill of solving problems and bringing designs to life keeps me on this exhilarating path.

                Currently, I'm exploring the realms of backend development, eager to deepen my understanding of server-side technologies and create robust, full-stack applications.

                I believe in the endless possibilities that technology brings and the positive impact it can have on people's lives. Through continuous learning and a commitment to excellence, I'm dedicated to shaping the digital landscape.

                Let's build something extraordinary together! 💻✨</p>
            <Footer />
        </div>
    )
}

export default About;
