import { theme } from "@core/theme";
import type { TBrandColor } from "@core/theme";

export interface IUseBrandColorArgs {
  color:
    | "white"
    | "black"
    | "gray"
    | "lightGray"
    | "danger"
    | "accent"
    | "accentHover"
    | "accentFocus"
    | "accentActive";
  invert?: boolean;
}

export function useBrandColor(args: IUseBrandColorArgs) {
  const { color, invert = false } = args;

  const { brand, inverted } = theme.colors as Record<string, TBrandColor>;

  switch (color) {
    case "white": {
      return invert ? inverted.white : brand.white;
    }
    case "black": {
      return invert ? inverted.black : brand.black;
    }
    case "gray": {
      return invert ? inverted.gray : brand.gray;
    }
    case "lightGray": {
      return invert ? inverted.lightGray : brand.lightGray;
    }
    case "danger": {
      return invert ? inverted.danger : brand.danger;
    }
    case "accent": {
      return invert ? inverted.accent : brand.accent;
    }
    case "accentHover": {
      return invert ? inverted.accentHover : brand.accentHover;
    }
    case "accentFocus": {
      return invert ? inverted.accentFocus : brand.accentFocus;
    }
    case "accentActive": {
      return invert ? inverted.accentActive : brand.accentActive;
    }
  }
}
