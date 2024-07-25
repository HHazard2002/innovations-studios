"use client";
import React from "react";
import { SparklesCore } from "./sparkle.tsx";
import { TypeAnimation } from "react-type-animation";

export default function SparklesPreview() {
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
      <h1 className="md:text-7xl font-alliance text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Building great software with
      </h1>
      <TypeAnimation
        className="typingText text-6xl"
        sequence={[
          "",
          1500,
          "Creative Uni Students",
          1500,
          "Bright Uni Students",
          1500,
          "Tomorrow's Engineers",
          1500,
          "Innovation Studios",
          5000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="strong"
        cursor={true}
        repeat={Infinity}
        style={{
          display: "inline-block",
          color: "teal",
          fontFamily: "Alliance",
        }}
      />
      <h1 className="md:text-7xl font-alliance text-3xl lg:text-6xl font-bold text-center text-white relative z-20"></h1>
    </div>
  );
}
