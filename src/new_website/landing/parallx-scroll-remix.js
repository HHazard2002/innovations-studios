import React, { useEffect, useRef } from "react";

export const ParallaxScroll2 = () => {
  const ref = useRef(null); // Use useRef to reference the container div

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = ref.current.getBoundingClientRect(); // Get the current position of the container

      // Check if the component is within the viewport
      if (top <= window.innerHeight && bottom >= 0) {
        // Select all elements with the data-speed attribute within the component
        ref.current.querySelectorAll("[data-speed]").forEach((element) => {
          const speed = element.getAttribute("data-speed");
          // Calculate the Y offset based on the scroll position and speed
          // Adjust calculation to start the effect when the element is in view
          const yOffset = -(window.scrollY - ref.current.offsetTop) * speed;
          // Apply the transform property to create the parallax effect
          element.style.transform = `translateY(${yOffset}px)`;
        });
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Use the ref attribute to reference this container in the useEffect hook
    <div ref={ref} className="grid grid-cols-7 grid-rows-5 gap-20 mt-60 m-20">
      <div data-speed="0" className="col-span-3 col-start-3 row-start-1">
        <p className="text-6xl font-bold font-alliance">
          We are the right partner if
        </p>
      </div>
      <div data-speed="0.8" className="col-span-3 col-start-5 row-start-1">
        <p className="text-6xl font-bold font-alliance">
          You want to innovate more
        </p>
      </div>
      <div data-speed="1.5" className="col-span-3 col-start-5 row-start-3">
        <p className="text-6xl font-bold font-alliance">
          You want to offer new solutions to your customers
        </p>
      </div>
      <div data-speed="1" className="col-span-3 col-start-4 row-start-4">
        <p className="text-6xl font-bold font-alliance">
          You want to increase your online presence
        </p>
      </div>
      <div data-speed="0.5" className="col-span-4 col-start-1 row-start-2">
        <p className="text-6xl font-bold font-alliance">
          You want to increase your efficiency and streamline your processes
        </p>
      </div>
      <div data-speed="0" className="col-span-3 col-start-3 row-start-5">
        <p className="text-6xl font-bold font-alliance">
          Or, if you simply want to help uni students get more experience
        </p>
      </div>
    </div>
  );
};
