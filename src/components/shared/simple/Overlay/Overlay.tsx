import { Box, Portal } from "@chakra-ui/react";
import { useKeyframesAnimation } from "@mh-utils/hooks/useKeyframesAnimation";
import type { TOpenStatus } from "@src/core/types/TOpenStatus";
import { animationDuration } from "@src/core/constant/animation";

export interface IOverlayProps {
  status: TOpenStatus;
}

export function Overlay(props: IOverlayProps) {
  const { status } = props;

  const animationCSSInterpolationIn = `
  from { opacity: 0; }
  to { opacity: 1; }
`;

  const animationCSSInterpolationOut = `
from { opacity: 1; }
to { opacity: 0;}
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
      <Box
        position={"absolute"}
        display={status === "closed" ? "none" : "block"}
        top={0}
        left={0}
        width={"100vw"}
        height={"100vh"}
        zIndex={100}
        bgColor={"hsla(0, 0%, 50%, 70%)"}
        filter={"blur(2px)"}
        animation={animation}
        opacity={status === "isClosing" ? 0 : 1}
      />
    </Portal>
  );
}
