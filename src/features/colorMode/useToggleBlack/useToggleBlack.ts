import { useColorMode } from "@chakra-ui/react";
import { useBrandColor } from "../useBrandColor";

export function useToggleBlack() {
  const { colorMode } = useColorMode();

  const fillLight = useBrandColor("black");
  const fillDark = useBrandColor("gray");

  return colorMode === "light" ? fillLight : fillDark;
}
