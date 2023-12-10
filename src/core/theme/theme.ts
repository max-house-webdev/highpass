import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";

import { colors } from "./colors";

import {
  brandButtons,
  brandContainer,
  brandHeading,
  brandLinks,
  brandText,
} from "./components";

import { fonts } from "./fonts";

export const theme = extendTheme({
  breakpoints,

  colors,

  fonts,

  components: {
    Button: brandButtons,
    Container: brandContainer,
    Heading: brandHeading,
    Link: brandLinks,
    Text: brandText,
  },
});
