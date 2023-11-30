import { About } from "@pages/About";
import { Projects } from "@pages/Projects";
import { Services } from "@pages/Services";
import { MasterClasses } from "@pages/MasterClasses";
import { Contacts } from "@pages/Contacts";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <>
      <About />
      <Projects />
      <Services />
      <MasterClasses />
      <Contacts />
    </>
  );
}
