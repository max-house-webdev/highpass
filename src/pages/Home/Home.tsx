import { About } from "@pages/About";
import { Projects } from "@pages/Projects";
import { Services } from "@pages/Services";
import { MasterClasses } from "@pages/MasterClasses";
import { Contacts } from "@pages/Contacts";
import { Hero } from "@pages/Hero";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <MasterClasses />
      <Contacts />
    </>
  );
}
