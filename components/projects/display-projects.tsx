import Image from "next/image";
import React from "react";
import ExcellnceCoverImage from "@/public/assets/projects-images/Excellence/excellence-mac.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DisplayProjects() {
  const projects = [
    {
      name: "Excellence",
      coverImage: ExcellnceCoverImage,
      url: "/projects/Excellence",
    },
    {
      name: "Archi Vision",
      coverImage: ExcellnceCoverImage,
      url: "/projects/ArchiVision",
    },
  ];

  return (
    <div>
      <section className="py-10 md:py-16">
        <div className=" container max-w-screen-xl mx-auto ">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Projects & Experience
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Some of the side projects I'm currently working on.
          </p>

          <div className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map(({ name, coverImage, url }, index) => (
              <div key={index} className="   rounded-md ">
                <Link href={url} className="group relative block">
                  <div className="relative">
                    <Image
                      className="rounded-2xl transition-all duration-300 ease-in-out"
                      src={coverImage}
                      alt={name}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0  bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                      <div className=" absolute  h-1/4 p-5">
                        <p className=" inline text-white text-md  font-md ">
                          {name}
                        </p>
                      </div>
                      <div className=" absolute top-10 right-10  bg-white  flex items-center justify-center  w-12 h-12  rounded-full backdrop-blur-lg origin-center transform  transition-transform duration-500 group-hover:translate-x-5 group-hover:-translate-y-5">
                        <ArrowUpRight className="w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
