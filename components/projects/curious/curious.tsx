"use client";
import Exitbutton from "@/components/navigation/exit-nav-button";
import Image from "next/image";
import curiousMain from "@/public/assets/projects-images/Curious/landingPage.png";
import signupCard from "@/public/assets/projects-images/Curious/signup_card.png";
import signinCard from "@/public/assets/projects-images/Curious/signin_card.png";
import colors_designSystem from "@/public/assets/projects-images/Curious/colors-designSystem.png";
import typo_designSystem from "@/public/assets/projects-images/Curious/typo-designSystem.png";
import navbar_designSystem from "@/public/assets/projects-images/Curious/navbar-designSystem.png";

import EmailCard from "@/public/assets/projects-images/Curious/email_card.png";
import Contact from "@/components/contact/contact";
import AnimationLink from "../animation-link";
import { motion } from "framer-motion";

export default function Curious() {
  return (
    <>
      <Exitbutton />
      <div className=" ">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className=" p-14 h-[450px] flex items-center justify-center"
        >
          <div className="flex flex-col  items-center gap-14 ">
            <h1 className="text-4xl lg:text-5xl font-medium text-center">
              Turn your time into knowledge.{" "}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-fit py-2 px-4 text-sm rounded-2xl  bg-[#e8e5e4]"
            >
              <p>Curious</p>
            </motion.div>
          </div>
        </motion.div>
        <div className=" px-5 lg:px-20 py-14   flex flex-col  ">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="     "
          >
            <Image className="rounded-xl   " src={curiousMain} alt="mac" />
          </motion.div>
          <div className="   py-28 flex flex-col gap-10">
            <div className=" flex items-center gap-8  ">
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Client
                </h4>
                <p className="md:text-md  text-sm  text-black">
                  Personnal project
                </p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Category
                </h4>
                <p className="md:text-md  text-sm  text-black">Blog</p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Duration
                </h4>
                <p className="md:text-md  text-sm  text-black">3 days</p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Demo
                </h4>
                <AnimationLink
                  link={
                    "https://www.figma.com/proto/QwClLZh8BWG4IRvOmxCljQ/Untitled?node-id=37-119&t=oNAcODqfnJanIP5i-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A119"
                  }
                />
              </div>
            </div>
            <div className="  flex">
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Technologies used
                </h4>
                <div className=" flex items-center ">
                  <p className="md:text-md text-sm py-2 text-[#808080]">
                    Front-end:
                  </p>
                  <p className="md:text-md  text-sm px-2 text-black">Figma</p>
                </div>
                {/* <div className=" flex items-center ">
                  <p className="md:text-md text-sm   text-[#808080]">
                    Back-end:
                  </p>
                  <p className="md:text-md  text-sm px-2 text-black">
                    NextJS, DrizzleORM, PostgresSQL, NoenDB.
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="  flex flex-col md:flex-row w-full gap-5 "
          >
            <div className=" flex-1  rounded-xl  ">
              <Image
                className="rounded-xl w-full h-full object-cover    "
                src={signupCard}
                alt="mac"
              />
            </div>
            <div className=" flex-1  rounded-xl ">
              <Image
                className="rounded-xl w-full h-full object-cover    "
                src={signinCard}
                alt="mac"
              />
            </div>
          </motion.div>
          <div className="  py-28  lg:w-2/5 ">
            <h4 className="md:text-md text-sm py-2 text-[#808080]">Overview</h4>
            <p className="md:text-md  text-sm  text-black">
              Curious is a blog landing page designed for browsing and reading
              the latest science and tech trends. The design was inspired by
              Medium's website. I opted for a minimal design approach that
              focuses on simplicity and user-friendliness. The design system
              includes a color palette, typography, and components that ensure
              consistency and coherence throughout the landing page. It was
              designed to be flexible and adaptable to different screen sizes
              and devices, ensuring a seamless user experience across all
              platforms.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="flex flex-col md:flex-row gap-5 mb-5 w-full">
              <div className="flex-1 rounded-xl w-full h-full overflow-hidden ">
                <Image
                  className="w-full h-full object-cover"
                  src={EmailCard}
                  alt="mac"
                />
              </div>
              <div className="flex-1 w-full h-full overflow-hidden ">
                <Image
                  className="rounded-xl w-full h-full object-cover"
                  src={colors_designSystem}
                  alt="mac"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mb-5 w-full">
              <div className="flex-1 rounded-xl w-full h-full overflow-hidden ">
                <Image
                  className="w-full h-full object-cover"
                  src={typo_designSystem}
                  alt="mac"
                />
              </div>
              <div className="flex-1 w-full h-full overflow-hidden ">
                <Image
                  className="rounded-xl w-full h-full object-cover"
                  src={navbar_designSystem}
                  alt="mac"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <Contact />
      </div>
    </>
  );
}
