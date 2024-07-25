import React from "react";
import { cn } from "./cn.ts";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    imageUrl, // Use this for the background image
    icon,
  }) => {
    return (
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative",
          className
        )}
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay to ensure text is readable on any background */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        
        {/* Content container */}
        <div className="z-10 relative p-4">
          
          <div className="text-left font-alliance font-bold text-white mb-2">
            {title}
          </div>
          <div className="text-left font-alliance font-normal text-white text-xs">
            {description}
          </div>
        </div>
      </div>
    );
  };