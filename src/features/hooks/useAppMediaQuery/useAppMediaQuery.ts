import { useMediaQuery } from "@chakra-ui/react";
import { breakpoints } from "@core/constant/breakpoints";

export type TDevice =
  | "isMobile"
  | "isTablet"
  | "isTabletWide"
  | "isDesktop"
  | null;

export function useAppMediaQuery(): TDevice {
  const { min, md, lg, xxl } = breakpoints;

  const [isMobile, isTablet, isTabletWide, isDesktop] = useMediaQuery([
    `(min-width: ${min}px) and (max-width: ${md - 1}px)`,
    `(min-width: ${md}px) and (max-width: ${lg - 1}px)`,
    `(min-width: ${lg}px) and (max-width: ${xxl - 1}px)`,
    `(min-width: ${xxl}px)`,
  ]);

  if (isMobile) return "isMobile";

  if (isTablet) return "isTablet";

  if (isTabletWide) return "isTabletWide";

  if (isDesktop) return "isDesktop";

  return null;
}
