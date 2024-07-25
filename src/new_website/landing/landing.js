import Navbarv2 from "../../navbarv2";
import { TabsDemo } from "./competitors.js";
import { SVGMaskEffectDemo } from "./competitors3.js";
import SparklesPreview2 from "./hero.js";
import LogoCloud from "./logo-clouds/university-cloud.js";
import { BentoGridSecondDemo } from "./work-with-us.js";
import { ProjectFlow } from "./project-flow.js";
import { ParallaxScrollDemo } from "./work.js";
import { ParallaxScroll2 } from "./parallx-scroll-remix.js";
import Competitors from "./competitor4.js";
import LogoCloudCompanies from "./logo-clouds/company-cloud.js";
import Hero from "./hero2.js";
import KeyNumbers from "./key-numbers.js";
import HeroHome from "./hero3.js";
import UniqueModel from "./unique-model.js";
import Services from "../../website/about_us/services.js";
import Service from "./services.js";

export default function Landing() {
  return (
    <div>
      <Navbarv2></Navbarv2>
      <SparklesPreview2></SparklesPreview2>
      <HeroHome></HeroHome>
      <UniqueModel></UniqueModel>
      <Service></Service>
      <Hero></Hero>
      <KeyNumbers></KeyNumbers>
      <TabsDemo></TabsDemo>
      <LogoCloudCompanies></LogoCloudCompanies>
      <LogoCloud></LogoCloud>
      <BentoGridSecondDemo></BentoGridSecondDemo>
      <ProjectFlow></ProjectFlow>
      <ParallaxScroll2></ParallaxScroll2>
      <SVGMaskEffectDemo></SVGMaskEffectDemo>
      <Competitors></Competitors>
    </div>
  );
}
