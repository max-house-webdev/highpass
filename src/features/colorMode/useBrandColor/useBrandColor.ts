import { theme } from "@core/theme";
import type { TBrandColor } from "@core/theme";

export type TUseBrandColor =
  | "white"
  | "black"
  | "gray"
  | "lightGray"
  | "danger"
  | "accent"
  | "accentHover"
  | "accentFocus"
  | "accentActive";

export function useBrandColor(color: TUseBrandColor) {
  const { brand } = theme.colors as Record<string, TBrandColor>;

  switch (color) {
    case "white": {
      return brand.white;
    }
    case "black": {
      return brand.black;
    }
    case "gray": {
      return brand.gray;
    }
    case "lightGray": {
      return brand.lightGray;
    }
    case "danger": {
      return brand.danger;
    }
    case "accent": {
      return brand.accent;
    }
    case "accentHover": {
      return brand.accentHover;
    }
    case "accentFocus": {
      return brand.accentFocus;
    }
    case "accentActive": {
      return brand.accentActive;
    }
  }
}
