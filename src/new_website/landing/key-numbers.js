import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";

const KeyNumbers = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-neutral-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-bold font-alliance leading-[1.2] md:text-5xl">
            We're good.{" "}
            <span className="text-neutral-400 font-alliance">Here's why.</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, description, Icon }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-black text-white" : " bg-white"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      {title}
      <p className="font-alliance">{description}</p>
    </motion.div>
  );
};

export default KeyNumbers;

const features = [
  {
    title: (
      <h3 className="text-left mb-8 text-3xl font-bold font-alliance">
        £40 000 On Average to build A software
      </h3>
    ),
    Icon: FiUpload,
    description: (
      <p className="text-left mb-8 font-bold font-alliance">
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae
        sed? Maxime!"
      </p>
    ),
  },
  {
    title: (
      <h3 className="text-left mb-8 text-3xl font-bold text-white font-alliance">
        £50 000 average salary
      </h3>
    ),
    Icon: FiArrowUp,
    description: (
      <p className="text-left mb-8 font-bold text-white font-alliance">
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae
        sed? Maxime!"
      </p>
    ),
  },
  {
    title: (
      <h3 className="text-left mb-8 text-3xl font-bold font-alliance">
        20% per year
      </h3>
    ),
    Icon: FiTarget,
    description: (
      <p className="text-left mb-8 font-bold font-alliance">
        On average, for every pound invested in R&D, companies see a return of
        20% per year from this new knowledge acquired.
      </p>
    ),
  },
  {
    title: (
      <h3 className="text-left mb-8 text-3xl font-bold text-white font-alliance">
        4 Times Cheaper
      </h3>
    ),
    Icon: FiLink,
    description: (
      <p className="text-left mb-8 font-bold text-white font-alliance">
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae
        sed? Maxime!"
      </p>
    ),
  },
  {
    title: (
      <h3 className="text-left mb-8 text-3xl font-bold font-alliance">
        4 Times Cheaper
      </h3>
    ),
    Icon: FiTool,
    description: (
      <p className="text-left mb-8 font-bold font-alliance">
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vitae
        sed? Maxime!"
      </p>
    ),
  },
];
