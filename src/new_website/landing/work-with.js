import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiCopy,
  FiDatabase,
} from "react-icons/fi";

export const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      <div className="h-screen bg-black" />
    </>
  );
};

const Card = ({ position, card, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "black" : "white",
        color: isOddCard ? "white" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 text-4xl" />

      {card.style}
      <p
        className="font-alliance mb-8 max-w-lg text-center text-sm md:text-base"
        style={{
          color: isOddCard ? "white" : "black",
        }}
      >
        {card.description}
      </p>
      <a
        href={card.routeTo}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Learn more</span>
        <FiArrowRight />
      </a>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

const CARDS = [
  {
    id: 1,
    Icon: FiCalendar,
    title: "You want to innovate more",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-violet-300",
    routeTo: "#",
    style: (
      <h1 className="mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Profitez de votre{" "}
        <span className="relative whitespace-nowrap text-marron">
          <svg
            aria-hidden="true"
            viewBox="0 10 418 42"
            className="absolute left-0 z-10 w-full fill-none"
            preserveAspectRatio="none"
          >
            <path
              d="M12.3989 21.5774C12.3989 39.5955 12.3989 57.6135 12.3989 75.6316C12.3989 81.0652 23.585 75.5741 27.8322 74.6653C66.5494 66.3812 109.344 64.5923 149.566 63.1838C180.028 62.117 210.678 62.3167 241.175 62.5017C253.863 62.5787 266.27 64.5479 278.892 64.5479C288.956 64.5479 284.028 61.4926 281.945 55.6242C277.604 43.3927 275.868 31.0793 265.274 20.5543C252.023 7.38924 229.297 5.37706 207.337 3.72992C185.576 2.09768 163.836 2.13842 141.973 2.13842C109.82 2.13842 77.498 1.44517 45.4113 3.16153C31.2282 3.92021 16.1397 6.23085 2 6.23085"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <span className="relative z-0">nouvelle jeunesse</span>
        </span>{" "}
        avec Orion !
      </h1>
    ),
  },
  {
    id: 2,
    Icon: FiDatabase,
    title: "You want to offer new solutions to your customers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-pink-300",
    routeTo: "#",
    style: (
      <h1 className="font-alliance font-bold mx-auto max-w-7xl text-5xl font-medium tracking-tight text-black sm:text-7xl">
        You want to offer{" "}
        <span className="relative whitespace-nowrap">
          <span className=" font-alliance bg-teal-400 text-white px-2 py-1 rounded">
            New Solutions
          </span>
        </span>{" "}
        to your customers
      </h1>
    ),
  },
  {
    id: 3,
    Icon: FiCopy,
    title: "You want to increase your online presence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-red-300",
    routeTo: "#",
    style: (
      <h1 className="font-bold font-alliance mx-auto max-w-7xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
        You want to increase your online{" "}
        <span className="relative whitespace-nowrap teal-800">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="font-bold font-alliance relative z-0 text-teal-500">
            presence
          </span>
        </span>
      </h1>
    ),
  },
  {
    id: 4,
    Icon: FiAward,
    title: "You want to increase your efficiency and streamline your processes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
  {
    id: 5,
    Icon: FiAward,
    title: "Or, if you simply want to help uni students get more experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-amber-300",
    routeTo: "#",
  },
];
