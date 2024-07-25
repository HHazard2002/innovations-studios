export default function Projectflow() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-alliance font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p class="max-w-lg font-alliance mx-auto mt-4 text-base leading-relaxed text-gray-600">
            We have a unique approach to software engineering. We help you build
            the right solutions for your most painful problems so that you can
            focus on achieving your purpose as a business.
          </p>
        </div>

        <div class="relative mt-12 lg:mt-20">
          <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              class="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 class="mt-6 font-alliance text-xl font-semibold leading-tight text-black md:mt-10">
                Understanding the Problem
              </h3>
              <p class="mt-4 font-alliance text-base text-gray-600">
                Our team of professional Project Manager will work towards
                understanding your problem and scoping out the right solution.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 class="mt-6 font-alliance text-xl font-semibold leading-tight text-black md:mt-10">
                Creating the Solution
              </h3>
              <p class="mt-4 font-alliance text-base text-gray-600">
                We then leverage the most talented university students to build
                the software you need to improve your business.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span class="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 class="mt-6 text-xl font-alliance font-semibold leading-tight text-black md:mt-10">
                Launching and Iterating
              </h3>
              <p class="mt-4 font-alliance text-base text-gray-600">
                Launching the product is only the very first step, we put a lot
                of effort in improving once you have started using it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
