import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { brandButtons, brandContainer, brandLinks } from "./components";

export const theme = extendTheme({
  breakpoints,

  colors,

  fonts,

  components: {
    Button: brandButtons,
    Link: brandLinks,
    Container: brandContainer,
  },
});
