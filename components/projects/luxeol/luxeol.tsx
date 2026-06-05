"use client";
import Exitbutton from "@/components/navigation/exit-nav-button";
import Image from "next/image";
import HeroImage from "@/public/assets/projects-images/Luxeol/hero.png";
import productPage from "@/public/assets/projects-images/Luxeol/productPage.png";
import pacPage from "@/public/assets/projects-images/Luxeol/productPacImage.png";
import checkoutPage from "@/public/assets/projects-images/Luxeol/checkoutPage.png";
import bagSideBare from "@/public/assets/projects-images/Luxeol/bagSideBare.png";
import LandingPage from "@/public/assets/projects-images/Luxeol/landingPage.png";

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
              Browse, Buy, Glow.
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-fit py-2 px-4 text-sm rounded-2xl  bg-[#e8e5e4]"
            >
              <p>Luxeol</p>
            </motion.div>
          </div>
        </motion.div>
        <div className=" px-5 lg:px-20 py-14   flex flex-col  ">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="   flex justify-center items-center   "
          >
            <Image className="rounded-xl    " src={HeroImage} alt="mac" />
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
                <p className="md:text-md  text-sm  text-black">
                  Architectural Design
                </p>
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
                  <p className="md:text-md  text-sm px-2 text-black">Figma.</p>
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
            <div className=" flex-1  rounded-xl max-h-[600px] ">
              <Image
                className="rounded-xl w-full h-full object-cover    "
                src={productPage}
                alt="mac"
              />
            </div>
            <div className=" flex-1  rounded-xl max-h-[600px]">
              <Image
                className="rounded-xl w-full h-full object-cover    "
                src={pacPage}
                alt="mac"
              />
            </div>
          </motion.div>
          <div className="  py-28  lg:w-2/5 ">
            <h4 className="md:text-md text-sm py-2 text-[#808080]">Overview</h4>
            <p className="md:text-md  text-sm  text-black">
              Luxeol is a brand name specialized in skincare products. As a web
              designer I was assigned to design the e-commerce website including
              all pages the user may need in the process of exploring and buying
              products.
              
               My design logic for this one was: Clean, Easy to
              navigate, Effective. I chosed to do a minimalist design over a
              complicated one so the buy rate increases as the navigators feels
              no anxious and overwhelming during the process.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="flex flex-col md:flex-row gap-5 mt-5 w-full justify-center items-center">
              <div className="flex-1 rounded-xl w-full h-full overflow-hidden max-h-[600px]">
                <Image
                  className="w-full h-full object-cover"
                  src={checkoutPage}
                  alt="mac"
                />
              </div>
              <div className="flex-1 w-full h-full overflow-hidden max-h-[600px]">
                <Image
                  className="rounded-xl w-full h-full object-cover"
                  src={bagSideBare}
                  alt="mac"
                />
              </div>
            </div>

            <div className="  py-5   w-full h-full overflow-hidden   ">
              <Image
                className=" rounded-xl w-full h-full object-cover"
                src={LandingPage}
                alt="mac"
              />
            </div>
          </motion.div>
        </div>
        <Contact />
      </div>
    </>
  );
}
