import { useColorModeValue } from "@chakra-ui/react";

export function useToggleAccent() {
  const accent = useColorModeValue("brand.accent", "darkTheme.accent");

  return accent;
}
