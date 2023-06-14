import { useColorModeValue } from "@chakra-ui/react";
import { theme } from "@core/theme";
import type { TBrandColor } from "@core/theme";

export function useGrayModeValue() {
  const { brand, inverted } = theme.colors as Record<string, TBrandColor>;

  return useColorModeValue(brand.gray, inverted.gray);
}
