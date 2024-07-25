"use client";
import React from "react";
import { SparklesCore } from "./sparkle.tsx";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-9xl font-alliance text-9xl lg:text-7xl font-bold text-center text-white relative z-20">
        INNOVATE FASTER WITH
      </h1>
      <h1 className="md:text-9xl font-alliance text-9xl lg:text-7xl font-bold text-center bg-gradient-to-r from-lime-100 via-teal-500 to-blue-400 text-transparent bg-clip-text animate-gradient relative z-20">
        TOMORROW'S
      </h1>
      <h1 className="md:text-9xl font-alliance text-9xl lg:text-7xl font-bold text-center text-white pb-10 relative z-20">
        BRIGHTEST MINDS
      </h1>
      <p className="md:text-9xl font-alliance text-9xl lg:text-base  text-center text-white relative z-20">
        We leverage the brightest university students to help your business
        innovate more. We build websites, software and AI research.
      </p>
    </div>
  );
}
