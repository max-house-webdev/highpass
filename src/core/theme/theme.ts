import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { brandButtons } from "./brandButtons";
import { brandLinks } from "./brandLinks";

export const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    lg: "1024px",
    "2xl": "1920px",
  },

  colors,

  fonts: {
    body: `'Roboto', sans-serif`,
    brand: `'TT Firs Neue', sans-serif`,
  },

  components: {
    Button: brandButtons,
    Link: brandLinks,
  },
});
