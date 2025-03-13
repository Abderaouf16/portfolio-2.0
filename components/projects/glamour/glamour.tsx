"use client";
import Exitbutton from "@/components/navigation/exit-nav-button";
import Image from "next/image";
import glamourMac from "@/public/assets/projects-images/Glamour/macbook.png";
import signupPage from "@/public/assets/projects-images/Glamour/signup.png";
import glamourIpad from "@/public/assets/projects-images/Glamour/ipad.png";
import glamourHomePage1 from "@/public/assets/projects-images/Glamour/homePage1.png";
import aboutPage from "@/public/assets/projects-images/Glamour/aboutPage.png";
import Contact from "@/components/contact/contact";
import AnimationLink from "@/components/projects/animation-link";
import { motion } from "framer-motion";

export default function Glamour() {
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
              Find your glamorous outfit✨
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-fit py-2 px-4 text-sm rounded-2xl  bg-[#e8e5e4]"
            >
              <p>Glamour</p>
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
            <Image
              className="rounded-xl max-h-[840px]   "
              src={glamourIpad}
              alt="mac"
            />
          </motion.div>
          <div className="   py-28 flex flex-col gap-10">
            <div className=" flex items-center gap-8  ">
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Client
                </h4>
                <p className="md:text-md  text-sm  text-black">
                  Personnal project (web design prototype)
                </p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Category
                </h4>
                <p className="md:text-md  text-sm  text-black">
                  E-commerce (clothing)
                </p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Duration
                </h4>
                <p className="md:text-md  text-sm  text-black">1 month</p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Demo
                </h4>
                <AnimationLink
                  link={
                    "https://www.figma.com/proto/wnM1o1gLZFgyexxwxDWRyY/Clothing-E-commerce-website?node-id=39-7&t=hPo1aWdJB20QRq5a-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&device-frame=0"
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
                  <p className="md:text-md  text-sm px-2 text-black">
                    Figma, photoshop
                  </p>
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
            <div className="  flex-1  rounded-xl max-h-[400px]">
              <Image
                className="rounded-xl w-full h-full object-cover   "
                src={signupPage}
                alt="mac"
              />
            </div>
            <div className=" flex-1  rounded-xl max-h-[400px]">
              <Image
                className="rounded-xl w-full h-full object-cover   "
                src={glamourMac}
                alt="mac"
              />
            </div>
          </motion.div>
          <div className="  py-28  lg:w-2/5 ">
            <h4 className="md:text-md text-sm py-2 text-[#808080]">Overview</h4>
            <p className="md:text-md  text-sm  text-black">
              Glamour is a web design prototype for an e-commerce brand
              specializing in clothing for all genders and seasons. The design
              is minimalist and clean ensuring a seamless and enjoyable user
              experience.{" "}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="flex flex-col md:flex-row gap-5 mt-5 w-full">
              <div className="flex-1 rounded-xl w-full h-full overflow-hidden max-h-[370px]">
                <Image
                  className="w-full h-full object-cover"
                  src={glamourHomePage1}
                  alt="mac"
                />
              </div>
              <div className="flex-1 w-full h-full overflow-hidden max-h-[370px] border  border-gray-300 rounded-xl ">
                <Image
                  className="rounded-xl w-full h-full object-cover "
                  src={aboutPage}
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
