import React from 'react'
import NavBarSection from "../NavBar";
import Footer from "../Footer"



const Contact = () => {
    return (
        <div>
            <NavBarSection />

            <h1 className='about-heading'>Contact me</h1>

            <p className='about-me-text'> 👋 Hey there! I'm thrilled to connect with you. Whether you have a project idea, a question, or just want to chat about all things web development, I'm all ears.

                Feel free to reach out to me through:

                <p>
                    📧 Email: Inumiduncourteous@gmail.com
                </p>

                <p>
                    📱 WhatsApp: +2348138021900

                </p>
                <p>
                    💬 Facebook: Taiwo solomon Courteous

                </p>

                <p>
                    🌐 LinkedIn: [Your LinkedIn Profile]

                </p>
                <p>
                    🐦 Twitter: **********</p>

            </p>

            <Footer />

        </div>
    )
}

export default Contact;
