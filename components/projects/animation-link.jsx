"use client";
import Link from "next/link";
import React, {  useLayoutEffect } from "react";
import { annotate } from "rough-notation";


export default function AnimationLink({link}) {
  useLayoutEffect(() => {
    setTimeout(() => {
      const a8 = annotate(document.querySelector("#e8"), {
        type: "circle",
        color: "#af7b4d",
      });

      a8.show();
    }, 0); // Delay to allow layout to settle
  }, []);

  return (
    <div>
      <Link id="e8" href={link} className="md:text-md py-2 text-sm  text-black"
        target="_blank"
        rel="noopener noreferrer"
        >
        Click here
      </Link>
    </div>
  );
}

