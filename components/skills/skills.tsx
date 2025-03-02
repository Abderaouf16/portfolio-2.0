import React from "react";

/*Tools */
import git from "@/public/assets/icons/git-icon.svg";
import github from "@/public/assets/icons/github.svg";
import vsCode from "@/public/assets/icons/visual studio code.svg";
import figma from "@/public/assets/icons/figma.svg";
import photoshop from "@/public/assets/icons/photoshop.svg";

import postman from "@/public/assets/icons/postman.svg";
import vite from "@/public/assets/icons/vitejs.svg";
import chakraUI from "@/public/assets/icons/chakra-ui.svg";
import shadCN from "@/public/assets/icons/shadcn-ui.svg";

/*Front-end */
import html from "@/public/assets/icons/html.svg";
import css from "@/public/assets/icons/css.svg";
import javaScript from "@/public/assets/icons/javascript.svg";
import react from "@/public/assets/icons/react.svg";
import tailwindCSS from "@/public/assets/icons/tailwindcss.svg";
import bootstrap from "@/public/assets/icons/bootstrap.svg";
import nextjs from "@/public/assets/icons/next-js.svg";
import typeScript from "@/public/assets/icons/typescript.svg";

/*Backend */
import mongodb from "@/public/assets/icons/mongodb.svg";
import expressjs from "@/public/assets/icons/expressjs.svg";
import nodejs from "@/public/assets/icons/node-js.svg";
import postgresql from "@/public/assets/icons/postgresql.svg";
import Image from "next/image";


import { motion } from "framer-motion";

function Skills() {
  return (
    <>
      <section className=" skills font-rubik py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <motion.div className=""
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          >
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Technical Skills
          </h1>
          <p className="font-normal text-gray-500 text-sm md:text-base mb-20">
            Technologies I'm currently working with
          </p>
          </motion.div>

          <motion.div className="container max-w-screen-xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay:0.1 }}
          viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" px-8 py-10 rounded-md">
                <h4 className="font-medium text-gray-700 text-xl md:text-2xl mb-9 ">
                  Front-End
                </h4>
                <div className=" flex justify-start  flex-wrap  gap-5 ">
                  <div className="  skill-buble rounded-[100px] py-2 px-4  flex  justify-center items-center">
                    <Image src={html} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Html
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={css} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      CSS
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={javaScript} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      JavaScript
                    </p>
                  </div>

                  <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={react} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      React
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={nextjs} className="w-4 md:w-5" alt="" />
                    <p className=" inline-block mx-2 font-medium text-gray-500 text-sm md:text-base">
                      NextJS
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={typeScript} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      TypeScript
                    </p>
                  </div>

                  <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={tailwindCSS} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Tailwind CSS
                    </p>
                  </div>

                  <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={bootstrap} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Bootstrap
                    </p>
                  </div>
                </div>
              </div>

              <div className=" px-8 py-10 rounded-md">
                <h4 className="font-medium text-gray-700 text-xl md:text-2xl mb-9 ">
                  Back-End
                </h4>
                <div className=" flex justify-start  flex-wrap  gap-5 ">
                  <div className="  skill-buble rounded-[100px] py-2 px-4  flex  justify-center items-center">
                    <Image src={nodejs} className="w-5 md:w-6" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Node JS
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={expressjs} className="w-5 md:w-6" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Express JS
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={mongodb} className="w-5 md:w-6" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      MongoDB
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={postgresql} className="w-5 md:w-6" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="px-8 py-10 rounded-md mx-auto w-full md:col-span-2">
                <h4 className="font-medium text-gray-700 text-xl md:text-2xl mb-9 ">
                  Tools
                </h4>
                <div className=" flex justify-start  flex-wrap  gap-5 ">
                  <div className="  skill-buble rounded-[100px] py-2 px-4  flex  justify-center items-center">
                    <Image src={git} className="w-5 md:w-6" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Git
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={github} className="w-5 md:w-6" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      GitHub
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={postman} className="w-5 md:w-6" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Postman
                    </p>
                  </div>

                  <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={figma} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Figma
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={photoshop} className="w-5 md:w-6" alt="" />
                    <p className=" inline-block mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Adobe photoshop
                    </p>
                  </div>

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={vsCode} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      VS code
                    </p>
                  </div>

                  <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={vite} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Vite
                    </p>
                  </div>

                  <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={chakraUI} className="w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Chakra UI
                    </p>
                  </div>

                  <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <Image src={shadCN} className=" w-4 md:w-5" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-sm md:text-base">
                      Shadcn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Skills;
