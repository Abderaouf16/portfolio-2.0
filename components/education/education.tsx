import React, { useLayoutEffect, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { annotate, annotationGroup } from "rough-notation";

function Education() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useLayoutEffect(() => {
    if (animationCompleted) {
      const delay = 500; // Delay in milliseconds

      const timeout = setTimeout(() => {
        const el1 = document.querySelector("#b1") as HTMLElement | null;
        const el2 = document.querySelector("#b2") as HTMLElement | null;
        const el3 = document.querySelector("#b3") as HTMLElement | null;

        if (el1 && el2 && el3) {
          const b1 = annotate(el1, { type: "underline", color: "#d0bfdc" });
          const b2 = annotate(el2, { type: "underline", color: "#c0b762" });
          const b3 = annotate(el3, { type: "underline", color: "#d4c8b9" });

          const ag = annotationGroup([b1, b2, b3]);
          ag.show();
        }
      }, delay);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [animationCompleted]);

  return (
    <div>
      <section className="py-10 md:py-16">
        <motion.div
          className="container max-w-screen-xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          onAnimationComplete={() => setAnimationCompleted(true)} // ✅ Trigger rough notation after animation
        >
          <div>
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Education
            </h1>
            <p className="font-normal text-gray-500 text-sm md:text-base mb-20">
              Below is a summary of the places I studied
            </p>
          </div>
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <h4
                id="b1"
                className="w-fit font-medium text-gray-700 text-lg mb-2"
              >
                BSc in Architectural Engineering & Design
              </h4>
              <h2 className="font-medium text-gray-600 text-sm mb-2">
                University of Algiers 1
              </h2>
              <h2 className="font-medium text-gray-500 text-sm mb-3">
                Sep 2021 - Jun 2024
              </h2>
              <p className="font-normal text-gray-500 text-sm md:text-base mb-4">
                This program covers engineering design, structures, and
                construction management.
                <br />I have developed strong visual skills, and a grasp of
                mathematics, and the history of architecture.
              </p>
            </div>
            <div>
              <h4
                id="b2"
                className="w-fit font-medium text-gray-700 text-lg mb-2"
              >
                Meta Front-End Developer
              </h4>
              <h2 className="font-medium text-gray-600 text-sm mb-2">Meta</h2>
              <h2 className="font-medium text-gray-500 text-sm mb-3">
                Jun 2023 - Jan 2024
              </h2>
              <p className="font-normal text-gray-500 text-sm md:text-base mb-4">
                This is a training that consists of front-end development, UI/UX
                design, React Native development <br />
                and web development in general.
              </p>
            </div>
            <div>
              <h4
                id="b3"
                className="w-fit font-medium text-gray-700 text-lg mb-2"
              >
                Web Development Bootcamp
              </h4>
              <h2 className="font-medium text-gray-600 text-sm mb-2">
                Code Labs Academy
              </h2>
              <h2 className="font-medium text-gray-500 text-sm mb-3">
                Jun 2021 - Apr 2022
              </h2>
              <p className="font-normal text-gray-500 text-sm md:text-base mb-4">
                10-month program to learn Full Stack Web Development. <br />
                The program focuses on self-directed technical training in
                coding and web design as well as Capstone Project.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Education;
