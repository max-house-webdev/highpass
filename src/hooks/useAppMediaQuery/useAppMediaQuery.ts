import { useMediaQuery } from "@chakra-ui/react";

import { breakpoints } from "@core/constant";

export type TDevice =
  | "mobile"
  | "tablet"
  | "tabletWide"
  | "desktop"
  | "unsupported"
  | undefined;

export function useAppMediaQuery(): TDevice {
  const { min, md, lg, xxl } = breakpoints;

  const [isUnsupported, isMobile, isTablet, isTabletWide, isDesktop] =
    useMediaQuery([
      `(max-width: ${min - 1}px)`,
      `(min-width: ${min}px) and (max-width: ${md - 1}px)`,
      `(min-width: ${md}px) and (max-width: ${lg - 1}px)`,
      `(min-width: ${lg}px) and (max-width: ${xxl - 1}px)`,
      `(min-width: ${xxl}px)`,
    ]);

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  if (isTabletWide) return "tabletWide";
  if (isDesktop) return "desktop";
  if (isUnsupported) return "unsupported";
}
