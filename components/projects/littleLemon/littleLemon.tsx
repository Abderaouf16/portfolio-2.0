"use client";
import Exitbutton from "@/components/navigation/exit-nav-button";
import Image from "next/image";
import Ipad from "@/public/assets/projects-images/LittelLemon/ipad.png";
import littleLemonMac from "@/public/assets/projects-images/LittelLemon/coverImage.png";
import reserveTablePage from "@/public/assets/projects-images/LittelLemon/reserveTable.png";
import orderPlatePage from "@/public/assets/projects-images/LittelLemon/orderPlate.png";

import Contact from "@/components/contact/contact";
import AnimationLink from "@/components/projects/animation-link";
import { motion } from "framer-motion";

export default function LittleLemon() {
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
              Best food, Best delivery.
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="w-fit py-2 px-4 text-sm rounded-2xl  bg-[#e8e5e4]"
            >
              <p>Little Lemon</p>
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
              src={littleLemonMac}
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
                <p className="md:text-md  text-sm  text-black">
                Online Food Ordering Platform
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
                <AnimationLink link={"https://littellemon.vercel.app"} />
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
                    HTML, CSS, JavaScript, React.
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
            <div className="  flex-1  rounded-xl max-h-[400px] ">
              <Image
                className="rounded-xl w-full h-full object-cover   "
                src={orderPlatePage}
                alt="mac"
              />
            </div>
            <div className=" flex-1  rounded-xl max-h-[400px]">
              <Image
                className="rounded-xl w-full h-full object-cover   "
                src={reserveTablePage}
                alt="mac"
              />
            </div>
          </motion.div>
          <div className="  py-28  lg:w-2/5 ">
            <h4 className="md:text-md text-sm py-2 text-[#808080]">Overview</h4>
            <p className="md:text-md  text-sm  text-black">
              Little Lemon is a restaurant website designed to provide customers
              with a seamless dining experience. Users can browse the menu,
              order their favorite meals with a convenient delivery option, and
              even reserve a table for special occasions, celebrations, or
              feasts. The platform ensures a smooth and enjoyable experience for
              all customers.
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
                src={Ipad}
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
