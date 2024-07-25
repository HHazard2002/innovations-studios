import { MaskContainer } from "./new_svg_mask.tsx";
import { cn } from "./cn.ts";
import React from "react";
import Solution from "./img/solution.png";
import Problem from "./img/problem.png";

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold font-alliance bg-slate-300 text-blacks dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export const HighlightTeal = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold font-alliance bg-teal-400 text-white dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealImg={
          <div>
            {/* Assuming you have an image named 'solution.jpg' for the solution */}
            <img
              src={Problem}
              alt="The Problem"
              className="h-[35rem] w-[60rem]"
            />
          </div>
        }
        className="h-[35rem] w-[60rem] border rounded-md"
      >
        <div>
          {/* Assuming you have an image named 'solution.jpg' for the solution */}
          <img
            src={Solution}
            alt="The Solution"
            className="h-[35rem] w-[60rem]"
          />
        </div>
      </MaskContainer>
    </div>
  );
}
