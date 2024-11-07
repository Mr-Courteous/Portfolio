import React from "react";
// import ReactDom from "react-dom";
import Projects from "../../Project-samples";
import NavBarSection from "../NavBar";
import  WApp from "../Api";
import StudentList from'../Api2';
import Hero from "../Hero"
import Hero2 from "../Hero-2"
import Footer from "../Footer"

function Sample(props) {
  return (
    <div className="card">
      <a style={{ textDecoration: 'none', fontSize: '20px', }} href={props.location}>
        <img className="projects-image" src={props.img} alt="project" />
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
      </a>
    </div>
  );
}

const Home = () => {
  return (
    <div >

      <div className="hero-sub-section-1">
        <NavBarSection />
      </div>


      <div className="hero-sub-section-2">
        <div className="name-weather">

          <Hero />

          {/* <Hero2 /> */}

          {/* <div className="weather-container">

            <div className="search-input">
              <WApp />
            </div>


            <br />




          </div> */}
        </div>

      </div>


      <div className="dictionary">
        {Projects.map((e) => {
          return (
            <Sample
              img={e.imgSrc}
              title={e.title}
              description={e.description}
              location={e.location}
            />
          );
        })}
      </div>


      <Footer />
    </div>
  );
};

export default Home;
