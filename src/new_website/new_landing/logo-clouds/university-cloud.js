import React from "react";
import birmingham from "./img/logo-birmingham.png";
import bath from "./img/logo-bath.svg";
import cambridge from "./img/logo-cambridge.png";
import oxford from "./img/logo-oxford.svg";
import edimburgh from "./img/logo-edimburgh.png";
import kings from "./img/logo-kings.svg";
import manchester from "./img/logo-manchester.png";
import warwick from "./img/logo-warwick.png";
import ucl from "./img/logo-ucl.png";
import lse from "./img/logo-lse.png";

const LogoCloud = ({ className }) => {
  const logos = [
    birmingham,
    bath,
    cambridge,
    oxford,
    edimburgh,
    kings,
    manchester,
    warwick,
    ucl,
    lse,
    //... More logos
  ];

  return (
    <div className={`mx-auto px-6 lg:px-8  overflow-hidden ${className}`}>
      {/* Centered title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-alliance font-bold">
          Work With the UK's Brightest Students
        </h2>
      </div>

      {/* Logo ticker */}
      <div className="w-full overflow-hidden mt-20">
        <div className="flex space-x-36 animate-ticker">
          {" "}
          {/* Increase space here */}
          {logos.map((logo, index) => (
            <img
              key={index}
              className="max-h-16 object-contain"
              src={logo}
              alt="Company logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
