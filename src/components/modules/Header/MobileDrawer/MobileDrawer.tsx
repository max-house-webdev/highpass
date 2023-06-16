import { BurgerOpen as BurgerOpenButton } from "../ui/BurgerOpen";
import { BurgerClose as BurgerCloseButton } from "../ui/BurgerClose";
import { Drawer } from "./Drawer";

import { useMobileDrawer } from "./useMobileDrawer";
import { Navbar } from "../../Navbar";
import { HStack } from "@chakra-ui/react";
import { ToggleTheme } from "@components/shared/ui/buttons/ToggleTheme";

export function MobileDrawer() {
  const { state, burgerOpenClickHandler, burgerCloseClickHandler } =
    useMobileDrawer();

  return (
    <>
      <BurgerOpenButton onClick={burgerOpenClickHandler} />

      <Drawer status={state.mobileMenu}>
        <HStack justifyContent={"space-between"} w={"100%"}>
          <BurgerCloseButton onClick={burgerCloseClickHandler} />
          <ToggleTheme />
        </HStack>
        <Navbar />
      </Drawer>
    </>
  );
}
