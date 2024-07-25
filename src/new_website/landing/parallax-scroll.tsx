import { useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { cn } from "./cn.ts";
import React from "react";

export const ParallaxScroll = ({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) => {
  // This ref is no longer used for scrolling but could be used for other purposes, e.g., measuring dimensions.
  const gridRef = useRef<any>(null);

  // Use useViewportScroll for page-wide scroll instead of container-specific scrolling
  const { scrollYProgress } = useViewportScroll();

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Assuming a more straightforward approach since you no longer need to account for internal scrolling.
  const third = Math.ceil(texts.length / 3);
  const firstPart = texts.slice(0, third);
  const secondPart = texts.slice(third, 2 * third);
  const thirdPart = texts.slice(2 * third);

  return (
    <div
      // Removed "overflow-y-auto" to ensure the component does not scroll independently.
      className={cn("h-auto items-start w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
      >
        {[firstPart, secondPart, thirdPart].map((part, colIdx) => (
          <div className="grid gap-10" key={`col-${colIdx}`}>
            {part.map((text, idx) => (
              <motion.div
                // Apply transforms based on viewport scroll progress.
                style={{ y: colIdx % 2 === 0 ? translateFirst : translateSecond }}
                key={`text-${colIdx}-${idx}`}
              >
                <div className="h-80 w-full flex items-center justify-center rounded-lg p-10 text-center">
  <p className="text-6xl font-bold font-alliance">{text}</p>
</div>

              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
