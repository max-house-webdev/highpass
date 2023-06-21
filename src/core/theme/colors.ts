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

export const colors = {
  brand: {
    white: "hsl(0, 0%, 98%)",
    black: "hsl(0, 0%, 13%)",
    gray: "hsl(0, 0%, 29%)",
    lightGray: "hsl(0, 0%, 50%)",
    danger: "hsl(0, 100%, 59%)",
    accent: "hsl(18, 100%, 59%)",
    accentHover: "hsl(18, 63%, 45%)",
    accentFocus: "hsl(18, 93%, 42%)",
    accentActive: "hsl(18, 93%, 42%)",
  },
  darkTheme: {
    accent: "hsl(288, 94%, 34%)",
    accentHover: "hsl(288, 58%, 31%)",
    accentFocus: "hsl(288, 64%, 53%)",
    accentActive: "hsl(288, 64%, 53%)",
  },
};
