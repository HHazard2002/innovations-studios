import VideoThumb from "./img/innovationstudios.png";
import ModalVideo from "./video.tsx";

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-9xl md:text-8xl font-extrabold font-alliance leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              We are changing the way you{" "}
              <span className="bg-clip-text text-transparent font-alliance bg-gradient-to-r from-blue-500 to-teal-400">
                Innovate
              </span>{" "}
            </h1>
            <div className="max-w-3xl mx-auto font-alliance">
              <p
                className="text-xl font-alliance text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                We leverage the most talented university students in a
                professional environment allowing you to grow your company with
                great software.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="font-medium font-alliance inline-flex px-8 py-3 shadow-lg items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start Building
                  </a>
                </div>
                <div>
                  <a
                    className="font-medium font-alliance inline-flex px-8 py-3 shadow-lg items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
