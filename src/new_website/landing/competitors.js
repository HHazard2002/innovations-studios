import { Tabs } from "./tabs.tsx";
import CompetitorsImg from "./img/competitors.png";
import ISImg from "./img/innovationstudios.png";

export function TabsDemo() {
  const tabs = [
    {
      title: "Offshore Agencies",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-teal-600 to-teal-800">
          <p className="font-alliance font-bold text-left text-white">
            Offshore Agencies
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Freelance",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-teal-600 to-teal-800">
          <p className="font-alliance font-bold text-left text-white">
            Freelance
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Local Agencies",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-teal-600 to-teal-800">
          <p className="font-alliance font-bold text-left text-white">
            Local Agencies
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Innovation Studios",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-teal-600 to-teal-800">
          <p className="font-alliance font-bold text-left text-white">
            Innovation Studios
          </p>
          <InnovationStudios />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src={CompetitorsImg}
      alt="image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const InnovationStudios = () => {
  return (
    <img
      src={ISImg}
      alt="image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
