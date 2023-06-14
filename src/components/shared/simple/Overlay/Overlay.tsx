import { Box, Portal } from "@chakra-ui/react";
import type { TOpenStatus } from "@core/types/TOpenStatus";
import { useOverlayAnimation } from "./useOverlayAnimation";

export interface IOverlayProps {
  status: TOpenStatus;
}

export function Overlay(props: IOverlayProps) {
  const { status } = props;

  const animation = useOverlayAnimation({ status });

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
