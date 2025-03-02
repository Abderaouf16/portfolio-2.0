"use client";
import "tailwindcss/tailwind.css";
import coryRightIcon from "@/public/assets/icons/copyright.svg";
import bars from "@/public/assets/icons/bars-solid.svg";
import { Element } from "react-scroll";
import { Link } from "react-scroll";

import Education from "@/components/education/education";
import Skills from "@/components/skills/skills";
import AboutMe from "@/components/aboutMe/aboutMe";
import Contact from "@/components/contact/contact";
import Attributes from "@/components/attributes/attributes";
import Image from "next/image";

import "@/components/css/home.css";
import Navbar from "@/components/navigation/navbar";
import DisplayProjects from "@/components/projects/display-projects";

const App = () => {
  

  return (
    <>
      <div className="bg-white   px-4 md:px-24 xl:px-56 ">
        <Navbar />

        <Element name="aboutMe">
          <AboutMe />
        </Element>

        <Element name="Projects">
          <DisplayProjects />
        </Element>

        <Element name="Education">
          <Education />
        </Element>

        <Element name="Skills">
          <Skills />
        </Element>

        <Attributes />
      </div>
      <Element name="Contact">
        <Contact />
      </Element>
    </>
  );
};

export default App;
