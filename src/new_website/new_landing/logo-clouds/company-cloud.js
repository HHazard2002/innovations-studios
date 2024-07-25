import React from "react";
import amazon from "./img/logo-amazon.webp";
import barclays from "./img/logo-barclays.png";
import bnp from "./img/logo-bnp.png";
import deloitte from "./img/logo-deloitte.png";
import jp from "./img/logo-jp.png";
import goldman from "./img/logo-goldman.png";
import seagate from "./img/logo-seagate.png";

const LogoCloudCompanies = ({ className }) => {
  const logos = [
    amazon,
    barclays,
    bnp,
    deloitte,
    jp,
    goldman,
    seagate,
    amazon,
    barclays,
    bnp,
    deloitte,
    jp,
    goldman,
    seagate,
    //... More logos
  ];

  return (
    <div className={`mx-auto px-6 lg:px-8  overflow-hidden ${className}`}>
      {/* Centered title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-alliance font-bold">
          Our students go on to work with top companies
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

export default LogoCloudCompanies;
