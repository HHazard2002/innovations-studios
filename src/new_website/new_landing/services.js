import Website from "./img/website-img.jpg";
import RD from "./img/r&d.jpg";
import Software from "./img/software-img.jpg";

export default function Service() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight font-alliance">
            Our range of services
          </h2>
          <p class="max-w-2xl mx-auto mt-4 text-xl text-gray-600 font-alliance">
            From simple website development to complexe R&D project around new
            technologies such as AI and IoT.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
          <div>
            <img class="w-full" src={Website} alt="" />
          </div>

          <div>
            <img class="w-full" src={Software} alt="" />
          </div>

          <div>
            <img class="w-full" src={RD} alt="" />
          </div>
        </div>

        <div class="mt-8 text-center md:mt-16">
          <a
            href="#"
            title=""
            class="inline-flex font-alliance items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            {" "}
            See our full range of service{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
