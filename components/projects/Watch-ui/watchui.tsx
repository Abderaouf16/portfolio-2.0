"use client";
import Exitbutton from "@/components/navigation/exit-nav-button";
import Image from "next/image";
import Video from "next-video";
import signinPage from "@/public/assets/projects-images/ArchiVision/signIn.png";
import signupPage from "@/public/assets/projects-images/ArchiVision/signup.png";
import coverImage from "@/public/assets/projects-images/WatchUI/watchui-image2.jpg";
import watchuiVideo from "@/videos/animation apple watch 2_2.mp4";

import Contact from "@/components/contact/contact";
import { motion } from "framer-motion";
import AnimationLink from "../animation-link";

export default function WatchUI() {
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
              Listen, Enjoy, Dance.
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-fit py-2 px-4 text-sm rounded-2xl  bg-[#e8e5e4]"
            >
              <p>Music App ui</p>
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
            <Image className="rounded-xl   " src={coverImage} alt="mac" />
          </motion.div>
          <div className="   py-28 flex flex-col gap-10">
            <div className=" flex items-center gap-8  ">
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Client
                </h4>
                <p className="md:text-md  text-sm  text-black">
                  Personnal project
                  {/* <span className="text-red-400">
                    ( Working on new version )
                  </span> */}
                </p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Category
                </h4>
                <p className="md:text-md  text-sm  text-black">UI design</p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Duration
                </h4>
                <p className="md:text-md  text-sm  text-black"> 2 days</p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Demo
                </h4>
                <span>
                  {/*                 <AnimationLink link={"https://archivision.vercel.app/Home"} />
                   */}{" "}
                </span>
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
                  <p className="md:text-md  text-sm px-2 text-black">
                    Adobe Photoshop, Affter Effect.
                  </p>
                </div>
                {/* <div className=" flex items-center ">
                  <p className="md:text-md text-sm   text-[#808080]">
                    Back-end:
                  </p>
                  <p className="md:text-md  text-sm px-2 text-black">
                    Nodejs, Express, MongoDB.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="  py-14  lg:w-2/5 ">
            <h4 className="md:text-md text-sm py-2 text-[#808080]">Overview</h4>
            <p className="md:text-md  text-sm  text-black">
              This project is about to create a design for Apple watch Music
              app, I first worked on the frame and buttons design and layout on
              Adobe Photoshop then I created the animations on Affter Effect and
              combine the product of the two phases resulting this final output.
              The design orientation was a minimal design with some nostalgic
              and emotional touches that made the experience unique.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="  "
          >
            <div className="    w-full h-full overflow-hidden   ">
            <Video src={watchuiVideo}  loop muted autoPlay playsInline />
            </div>
           
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className=""
          ></motion.div>
        </div>
        <Contact />
      </div>
    </>
  );
}
