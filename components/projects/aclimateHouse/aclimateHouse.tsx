"use client";
import Exitbutton from "@/components/navigation/exit-nav-button";
import Image from "next/image";
import HeroImage from "@/public/assets/projects-images/AclimateHouse/outside 4.png";
import haul1 from "@/public/assets/projects-images/AclimateHouse/haul 2.png";
import entry from "@/public/assets/projects-images/AclimateHouse/entry.png";
import living1 from "@/public/assets/projects-images/AclimateHouse/living 1.png";
import bedroom1 from "@/public/assets/projects-images/AclimateHouse/bedroom 1.png";
import bedroom2 from "@/public/assets/projects-images/AclimateHouse/bedroom 2.png";
import bathroom1 from "@/public/assets/projects-images/AclimateHouse/beth floor 1.png";
import bathroom2 from "@/public/assets/projects-images/AclimateHouse/bath floor 2.png";

import Contact from "@/components/contact/contact";
import { motion } from "framer-motion";

export default function Excellence() {
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
              A better place to live your life
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-fit py-2 px-4 text-sm rounded-2xl  bg-[#e8e5e4]"
            >
              <p>AclimateHouse</p>
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
              src={HeroImage}
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
                  Personnal project
                </p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Category
                </h4>
                <p className="md:text-md  text-sm  text-black">Architectural Design</p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Duration
                </h4>
                <p className="md:text-md  text-sm  text-black">1/2 month</p>
              </div>
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Demo
                </h4>
              </div>
            </div>
            <div className="  flex">
              <div className=" flex-1 ">
                <h4 className=" md:text-md text-sm py-2 text-[#808080] ">
                  Technologies used
                </h4>
                <div className=" flex items-center ">
                  <p className="md:text-md text-sm py-2 text-[#808080]">
                    Design Tools
                  </p>
                  <p className="md:text-md  text-sm px-2 text-black">
                    Autocad, Sketchup, Inscape.
                  </p>
                </div>
            
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
            <div className=" flex-1  rounded-xl max-h-[400px] ">
              <Image
                className="rounded-xl w-full h-full object-cover    "
                src={haul1}
                alt="mac"
              />
            </div>
            <div className=" flex-1  rounded-xl max-h-[400px]">
              <Image
                className="rounded-xl w-full h-full object-cover    "
                src={entry}
                alt="mac"
              />
            </div>
          </motion.div>
          <div className="  py-28  lg:w-2/5 ">
            <h4 className="md:text-md text-sm py-2 text-[#808080]">Overview</h4>
            <p className="md:text-md  text-sm  text-black">
              AclimateHouse is a an Architecture design project representing a luxury house of R+1 floors designed to be sustainable for the future.
              The proccess was at first creating the 2D plans then 3D structure, adding designs details / Colors / Furnitures ... and render the outcome with Enscape Engine.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="    w-full h-full overflow-hidden   ">
              <Image
                className=" rounded-xl w-full h-full object-cover"
                src={living1}
                alt="mac"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5 w-full">
              <div className="flex-1 rounded-xl w-full h-full overflow-hidden max-h-[370px]">
                <Image
                  className="w-full h-full object-cover"
                  src={bedroom1}
                  alt="mac"
                />
              </div>
              <div className="flex-1 w-full h-full overflow-hidden max-h-[370px]">
                <Image
                  className="rounded-xl w-full h-full object-cover"
                  src={bedroom2}
                  alt="mac"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5 w-full">
              <div className="flex-1 rounded-xl w-full h-full overflow-hidden max-h-[370px]">
                <Image
                  className="w-full h-full object-cover"
                  src={bathroom1}
                  alt="mac"
                />
              </div>
              <div className="flex-1 w-full h-full overflow-hidden max-h-[370px]">
                <Image
                  className="rounded-xl w-full h-full object-cover"
                  src={bathroom2}
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
