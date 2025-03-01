"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { annotate, annotationGroup } from "rough-notation";
import coryRightIcon from "@/public/assets/icons/copyright.svg";
import bars from "@/public/assets/icons/bars-solid.svg";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import feather from "feather-icons";

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
  useLayoutEffect(() => {
    const delay = 1000; // Set delay in milliseconds (e.g., 1000ms = 1s)
  
    const timeout = setTimeout(() => {
      const a1 = annotate(document.querySelector("#e1"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a2 = annotate(document.querySelector("#e2"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a3 = annotate(document.querySelector("#e3"), {
        type: "highlight",
        color: "#c0b762",
      });
      const a4 = annotate(document.querySelector("#e4"), {
        type: "highlight",
        color: "#d4c8b9",
      });
      const a5 = annotate(document.querySelector("#e5"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a6 = annotate(document.querySelector("#e6"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a7 = annotate(document.querySelector("#e7"), {
        type: "circle",
        color: "#d4c8b9",
      });
  
      const ag = annotationGroup([a1, a2, a3, a4, a5, a6, a7]);
      ag.show();
    }, delay); // Delay in milliseconds
  
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);
  useEffect(() => {
    feather.replace();
  }, []);

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
