import { Portal, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

import type { TAppearanceStatus } from "@features/hooks/useAppearanceAnimation";
import { useDrawerAnimation } from "./useDrawerAnimation";

export interface IDrawerProps {
  status: TAppearanceStatus;
  children: ReactNode;
}

export function Drawer(props: IDrawerProps) {
  const { status, children } = props;

  const animation = useDrawerAnimation(status);

  return (
    <Portal>
      <VStack
        position={"absolute"}
        display={status === "closed" ? "none" : "flex"}
        top={"70px"}
        left={0}
        width={"100vw"}
        height={"calc(100vh - 70px)"}
        paddingTop={"15px"}
        paddingBottom={"35px"}
        paddingX={5}
        zIndex={300}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        bgColor={"brand.black"}
        borderTopStyle={"solid"}
        borderTopWidth={"2px"}
        borderTopColor={"brand.lightGray"}
        animation={animation}
      >
        {children}
      </VStack>
    </Portal>
  );
}
