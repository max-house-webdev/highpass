import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@src/components/templates/Layout";
// import { useAppMediaQuery } from "@hooks/useAppMediaQuery";
import { About } from "@pages/About";
import { Contacts } from "@pages/Contacts";
import { Error } from "@pages/Error";
import { Home } from "@pages/Home";
import { MasterClasses } from "@pages/MasterClasses";
import { Projects } from "@pages/Projects";
import { Services } from "@pages/Services";

export function Router() {
  // const device = useAppMediaQuery();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path={"projects"} element={<Projects />} />
          <Route path={"services"} element={<Services />} />
          <Route path={"master-classes"} element={<MasterClasses />} />
          <Route path={"contacts"} element={<Contacts />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
