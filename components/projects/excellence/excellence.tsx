import Exitbutton from "@/components/navigation/exit-nav-button";
import Image from "next/image";
import React from "react";
import excellenceMac from '@/public/assets/projects-images/Excellence/excellence-mac.png'

export default function Excellence() {
  return (
    <div className="">
      <Exitbutton />
      <div className=" p-14 h-[450px] bg-red-400 flex items-center justify-center">
        <div className="flex flex-col  items-center gap-14 ">
          <h1 className="text-4xl lg:text-5xl font-medium text-center">
            A better way to start your school year
          </h1>
          <div className="w-fit py-2 px-4 text-sm rounded-2xl  bg-[#e8e5e4]">
            <p>Excellence</p>
          </div>
        </div>
      </div>
      <div className=" p-14  bg-blue-400 flex items-center justify-center">
        <div className="flex flex-col  items-center gap-14 ">
          <Image className=" h-3/5 w-" src={excellenceMac} alt="mac"/>
        </div>
      </div>
    </div>
  );
}
