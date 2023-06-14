import { useColorModeValue } from "@chakra-ui/react";
import { theme } from "@core/theme";
import type { TBrandColor } from "@core/theme";

export function useAccentModeValue() {
  const { brand, inverted } = theme.colors as Record<string, TBrandColor>;

  return useColorModeValue(brand.accent, inverted.accent);
}
