import { extendTheme } from "@chakra-ui/react";

export type TBrandColor = {
  white: string;
  black: string;
  gray: string;
  lightGray: string;
  danger: string;
  accent: string;
  accentHover: string;
  accentFocus: string;
  accentActive: string;
};

export const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    lg: "1024px",
    "2xl": "1920px",
  },

  colors: {
    brand: {
      white: "hsl(0, 0%, 98%)",
      black: "hsl(0, 0%, 13%)",
      gray: "hsl(0, 0%, 29%)",
      lightGray: "hsl(0, 0%, 50%)",
      danger: "hsl(0, 100%, 59%)",
      accent: "hsl(18, 100%, 59%)",
      accentHover: "hsl(18, 63%, 45%);",
      accentFocus: "hsl(18, 93%, 42%)",
      accentActive: "hsl(18, 93%, 42%)",
    },
    inverted: {
      white: "hsl(0, 0%, 13%)",
      black: "hsl(0, 0%, 98%)",
      gray: "hsl(0, 0%, 71%)",
      lightGray: "hsl(0, 0%, 50%)",
      danger: "hsl(180, 100%, 41%)",
      accent: "hsl(198, 100%, 41%)",
      accentHover: "hsl(198, 63%, 55%)",
      accentFocus: "hsl(198, 93%, 58%)",
      accentActive: "hsl(198, 93%, 58%)",
    },
  },

  fonts: {
    body: `'Roboto', sans-serif`,
    brand: `'TT Firs Neue', sans-serif`,
  },

  components: {
    Buttons: {
      variants: {
        brandGhost: {
          _hover: {
            background: "transparent",
          },
          _active: {
            background: "transparent",
          },
        },
      },
    },
  },
});
