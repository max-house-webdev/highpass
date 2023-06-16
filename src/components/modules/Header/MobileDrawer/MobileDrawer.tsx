import { HStack } from "@chakra-ui/react";
import { ToggleTheme } from "@components/shared/ui/buttons/ToggleTheme";
import { useAppearanceAnimation } from "@features/hooks/useAppearanceAnimation";
import { animationDuration } from "@core/constant/animation";

import { BurgerOpen as BurgerOpenButton } from "../ui/BurgerOpen";
import { BurgerClose as BurgerCloseButton } from "../ui/BurgerClose";
import { Drawer } from "./Drawer";
import { Navbar } from "../../Navbar";

export function MobileDrawer() {
  const { appearanceState, onOpen, onClose } = useAppearanceAnimation({
    initialState: "closed",
    animationDuration: animationDuration,
  });

  return (
    <>
      <BurgerOpenButton onClick={onOpen} />

      <Drawer status={appearanceState}>
        <HStack justifyContent={"space-between"} w={"100%"}>
          <BurgerCloseButton onClick={onClose} />
          <ToggleTheme />
        </HStack>
        <Navbar />
      </Drawer>
    </>
  );
}
