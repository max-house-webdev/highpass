import { Portal, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import type { TOpenStatus } from "@src/core/types/TOpenStatus";
import { useKeyframesAnimation } from "@src/mh-utils/hooks/useKeyframesAnimation";
import { animationDuration } from "@src/core/constant/animation";

export interface IDrawerProps {
  status: TOpenStatus;
  children: ReactNode;
}

export function Drawer(props: IDrawerProps) {
  const { status, children } = props;

  const animationCSSInterpolationIn = `
  from { opacity: 0; transform: translateX(-75%) }
  to { opacity: 1; transform: translateX(0)}
`;

  const animationCSSInterpolationOut = `
  from { opacity: 1; transform: translateX(0) }
  to { opacity: 0; transform: translateX(75%)}
`;

  const animationCSSInterpolation = () => {
    switch (status) {
      case "isOpening": {
        return animationCSSInterpolationIn;
      }
      case "isClosing": {
        return animationCSSInterpolationOut;
      }
      default: {
        return "";
      }
    }
  };

  const animation = useKeyframesAnimation({
    animationCSSInterpolation: animationCSSInterpolation(),
    animationDuration,
  });

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
