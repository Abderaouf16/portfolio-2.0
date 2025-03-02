import Image from "next/image";
import React from "react";
import ExcellnceCoverImage from "@/public/assets/projects-images/Excellence/excellence-mac.png";
import ArchiVisionCoverImage from "@/public/assets/images/archivision.png";
import ArchiWorldCoverImage from "@/public/assets/images/archi vision.png";
import LittleLemonCoverImage from "@/public/assets/images/little lemon.png";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DisplayProjects() {
  const projects = [
    {
      name: "Excellence",
      coverImage: ExcellnceCoverImage,
      url: "/projects/Excellence",
    },
    {
      name: "Archi Vision",
      coverImage: ArchiVisionCoverImage,
      url: "/projects/ArchiVision",
    },
    {
      name: "Archi world",
      coverImage: ArchiWorldCoverImage,
      url: "/projects/ArchiWorld",
    },
    {
      name: "Little lemon",
      coverImage: LittleLemonCoverImage,
      url: "/projects/LittleLemon",
    },
  ];

  return (
    <div>
      <section className="py-10 md:py-16">
        <div className=" container max-w-screen-xl mx-auto ">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Projects & Experience
            </h1>
            <p className="font-normal text-gray-500 text-sm md:text-base mb-20">
              Some of the side projects I'm currently working on.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            {projects.map(({ name, coverImage, url }, index) => (
              <div
                key={index}
                className="rounded-md w-full h-full overflow-hidden flex flex-col "
              >
                <Link href={url} className="group relative block w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      className="rounded-2xl transition-all duration-300 ease-in-out w-full h-full object-cover"
                      src={coverImage}
                      alt={name}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex flex-col justify-between">
                      <div className="p-5">
                        <p className="text-white text-md font-medium">{name}</p>
                      </div>
                      <div className="absolute top-10 right-10 bg-white flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-lg transition-transform duration-500 group-hover:translate-x-5 group-hover:-translate-y-5">
                        <ArrowUpRight className="w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
