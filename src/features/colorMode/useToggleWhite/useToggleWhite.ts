import { useColorMode } from "@chakra-ui/react";
import { useBrandColor } from "../useBrandColor";

export function useToggleWhite() {
  const { colorMode } = useColorMode();

  const fillLight = useBrandColor("white");
  const fillDark = useBrandColor("lightGray");

  return colorMode === "light" ? fillLight : fillDark;
}
