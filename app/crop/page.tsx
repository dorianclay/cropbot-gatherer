"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import { detectObjects } from "./huggingface";
import Image from "next/image";

const Crop = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-5 2xl:px-16 pt-8">
        <Image
          src="/images/jusfilm-f6HiXy8Gu-I-unsplash.jpg"
          height={2400 / 3}
          width={1920 / 3}
          alt="Image of a hand squeezing a lime over a cocktail"
          id="myImage"
        />
        <canvas width="320" height="240">
          <p>Highlight of detected object</p>
        </canvas>
        <button
          onClick={detectObjects}
          className="rounded-full bg-purple-400 w-56 h-12 m-6 text-xl font-semibold hover:drop-shadow-2xl hover:scale-110 ease-in-out duration-150"
        >
          Click to load detect
        </button>
      </div>
    </div>
  );
};

export default Crop;
