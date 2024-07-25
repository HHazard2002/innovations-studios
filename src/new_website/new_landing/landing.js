import Navbarv2 from "../../navbarv2";
import HeroHome from "./hero3.js";
import UniqueModel from "./unique-model.js";
import Service from "./services.js";
import LogoCloudCompanies from "./logo-clouds/company-cloud.js";
import LogoCloud from "./logo-clouds/university-cloud.js";
import Stats from "./stats.js";
import Projectflow from "./project-flow.js";
import Hero from "./hero.js";

export default function Landing() {
  return (
    <div>
      <Navbarv2></Navbarv2>
      <Hero></Hero>
      <UniqueModel></UniqueModel>
      <Service></Service>
      <Stats></Stats>
      <LogoCloudCompanies></LogoCloudCompanies>
      <LogoCloud></LogoCloud>
      <Projectflow></Projectflow>
    </div>
  );
}
