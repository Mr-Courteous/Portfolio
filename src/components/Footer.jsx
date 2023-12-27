import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Footer() {

    const year = new Date().getFullYear();

    return (

        
        <div className='footer'>
            <div className='footer-div1'>
                <img className='footer-img' src="/project-pictures/profile-pic1.jpg" alt='' />
                <a className='footer-nav' href="/">Home</a>
                <a className='footer-nav' href="/about">About</a>
                <a className='footer-nav' href="/about">Contact</a>
                <p> Mr Courteous &#169;	{year} </p>
            </div>
            <div className='footer-div2'>
                <div>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> Location: Olanrewaju Modakeke, Osun state
                    </p>
                    <p>
                        <i className="fas fa-phone"></i> Telephone: 08138021900
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> Email: inumiduncourteous@gmail.com
                    </p>
                </div>
            </div>
            <div className='footer-div3'>
                <p> About</p>
                <p> "Hello! I'm Taiwo Courteous, a web developer who kicked
                    off my coding journey in 2021. Passionate about creating seamless digital experiences
                    , I mastered HTML, CSS, and JavaScript, and later dived into frameworks like React.j
                    s. My commitment to continuous learning fuels my drive to stay current in the dynamic world of web development. 
                    I take pride in transforming ideas into functional, visually appealing websites and applications. Let's code the future together!"
                </p>

                <div>
                    <a className='social-med' href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a className='social-med' href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a className='social-med' href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className='social-med' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Footer;