import { theme } from "@core/theme";
import type { TBrandColor } from "@core/theme";

export type TDarkThemeColor =
  | "accent"
  | "accentHover"
  | "accentFocus"
  | "accentActive";

export function useDarkThemeColor(color: TDarkThemeColor) {
  const { darkTheme } = theme.colors as Record<string, TBrandColor>;

  switch (color) {
    case "accent": {
      return darkTheme.accent;
    }
    case "accentHover": {
      return darkTheme.accentHover;
    }
    case "accentFocus": {
      return darkTheme.accentFocus;
    }
    case "accentActive": {
      return darkTheme.accentActive;
    }
  }
}
