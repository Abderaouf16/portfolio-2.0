import githubIcon from "@/public/assets/icons/github.svg";
import linkedinIcon from "@/public/assets/icons/linkedin.svg";
import abdou from "@/public/assets/images/Abdou.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { annotate, annotationGroup } from "rough-notation";
import feather from "feather-icons";

function AboutMe() {
  const cv = "/assets/CV/cv.pdf";

  const [animationCompleted, setAnimationCompleted] = useState(false);

  useLayoutEffect(() => {
    if (animationCompleted) {
      const delay = 300;

      const timeout = setTimeout(() => {
        const el1 = document.querySelector("#e1") as HTMLElement | null;
        const el2 = document.querySelector("#e2") as HTMLElement | null;
        const el3 = document.querySelector("#e3") as HTMLElement | null;
        const el4 = document.querySelector("#e4") as HTMLElement | null;
        const el5 = document.querySelector("#e5") as HTMLElement | null;
        const el6 = document.querySelector("#e6") as HTMLElement | null;
        const el7 = document.querySelector("#e7") as HTMLElement | null;

        if (el1 && el2 && el3 && el4 && el5 && el6 && el7) {
          const a1 = annotate(el1, { type: "highlight", color: "#d0bfdc" });
          const a2 = annotate(el2, { type: "highlight", color: "#d0bfdc" });
          const a3 = annotate(el3, { type: "highlight", color: "#c0b762" });
          const a4 = annotate(el4, { type: "highlight", color: "#d4c8b9" });
          const a5 = annotate(el5, { type: "highlight", color: "#d0bfdc" });
          const a6 = annotate(el6, { type: "highlight", color: "#d0bfdc" });
          const a7 = annotate(el7, { type: "circle", color: "#d4c8b9" });

          const ag = annotationGroup([a1, a2, a3, a4, a5, a6, a7]);
          ag.show();
        }
      }, delay); // Delay in milliseconds

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [animationCompleted]);

  return (
    <>
      <motion.section
        id="aboutMe"
        className=" w-full pt-2 "
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        onAnimationComplete={() => setAnimationCompleted(true)}
      >
        <div className=" max-w-screen-xl mx-auto   px-4 lg:px-0 my-32  ">
          <div className=" flex  ">
            <div className="flex-1 md:mr-20 ">
              <h6 className="  font-bold text-gray-600 text-2xl  lg:text-3xl ">
                Hello ! I’m Abderraouf, a{" "}
                <span id="e1" className="inline-block">
                  full stack developer
                </span>{" "}
                bassed in Algeria
              </h6>
              <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"></h1>
              <div className="font-normal text-gray-600 text-sm  lg:text-base mb-16">
                <p className="mb-2">
                  I love building tools that are{" "}
                  <span id="e2" className="inline-block">
                    user-friendly, simple{" "}
                  </span>{" "}
                  <span> and </span>
                  <span id="e3"> delightful</span> .
                </p>
                <p className="mb-2">
                  {" "}
                  My journey of coding started when entering{" "}
                  <span id="e4">architecture</span> school and working with it
                  softwares made me wonder how they design & built it, This
                  curiosity pushed me to start a career as a full-stask
                  developer.
                </p>
                <p className="mb-2">
                  I was a student at Code labs academy School where I spent 10
                  months learning the fundamentals of{" "}
                  <span id="e5" className="inline-block">
                    front-end and back-end
                  </span>{" "}
                  web development and the{" "}
                  <span id="e6" className="inline-block">
                    {" "}
                    flexible skills
                  </span>{" "}
                  to succeed in this field
                </p>
                <p className="mb-2">
                  I'm currently looking for a new role as a developer.{" "}
                  <span className="inline-block" id="e7">
                    Hire me?
                  </span>
                </p>
              </div>
              <div className="  w-full  flex items-center md:gap-4 gap-2 flex-wrap">
                <a
                  href={cv}
                  download="Khamoum Abderraouf CV"
                  className=" flex items-center justify-center h-12 md:w-40 w-36   font-light md:font-normal bg-gray-700 border-2 border-gray-700  text-gray-50 text-xs rounded-md  "
                >
                  Download CV
                </a>
                <a
                  href="https://github.com/Abderaouf16"
                  className="flex items-center justify-center h-12  md:w-40 w-36   font-light md:font-normal  text-black border-2 border-black text-xs rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                  View Github
                  <Image src={githubIcon} className=" w-5 inline ml-3" alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abderaouf-khamoum-657527260/"
                  className=" flex items-center justify-center h-12  md:w-40 w-36  font-light md:font-normal border-2 border-black text-black text-xs rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                  View LinkedIn
                  <Image
                    src={linkedinIcon}
                    className="w-5 inline ml-3"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="flex  max-768px:hidden   justify-center mb-16    ">
              <Image
                src={abdou}
                className="myImage   lg:w-[280px] lg:h-72  rounded-3xl"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default AboutMe;
