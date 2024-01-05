import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Courses from "./Courses";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-tertiary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Courses />
        <Projects /> 
        <Contact />   
      </div>
    </div>
  );
}

export default Home;
