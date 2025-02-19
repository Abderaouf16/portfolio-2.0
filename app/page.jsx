'use client'
import { useEffect, useLayoutEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import nameLogo from "@/public/assets/nameLogo/nameLogo.svg";
import { annotate, annotationGroup } from "rough-notation";
import coryRightIcon from "@/public/assets/icons/copyright.svg";
import bars from '@/public/assets/icons/bars-solid.svg';
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


const App = () => {
  useLayoutEffect(() => {
    setTimeout(() => {
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
    }, 0); // Delay to allow layout to settle
  }, []);

  useEffect(() => {
    feather.replace();
  }, []);


  return (
    <>
      <div className="bg-white   px-4 md:px-24 xl:px-56 ">
       
        <Navbar/>

        <Element name="aboutMe">
          <AboutMe />
        </Element>

        <Element name="Projects">
        </Element>

        <Element name="Education">
          <Education />
        </Element>

        <Element name="Skills">
          <Skills />
        </Element>

        <Attributes />

        <Element name="Contact">
          <Contact />
        </Element>
      </div>
      <div className="flex footer font-rubik my-8  mx-11 justify-between items-center mt-64">
        <div className="brand flex items-center font-medium text-black text-sm">
          <Image
            className="cursor-pointer flex justify-center items-center  w-10"
            src={nameLogo}
            alt=""
          />
          <Image src={coryRightIcon} className="w-3 ml-3  mr-2" alt="" />
          <p>Khamoum Abderraouf 2024</p>
        </div>

        <div className="socials flex justify-center items-center font-medium text-black text-sm ">
          <a
            href=" https://www.linkedin.com/in/abderaouf-khamoum-657527260/"
            className=" social px-3"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abderaoufa88@gmail.com@example.com"
            className="social"
          >
            Mail
          </a>
        </div>
      </div>
    </>
  );
};

export default App;