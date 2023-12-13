import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../colors";

const brandGhost = defineStyle({
  p: 3,
  mx: -3,

  _focusVisible: {
    boxShadow: `0 0 0 3px ${colors.brand.accentFocus}`,
  },
});

const brandPrimary = defineStyle({
  fontFamily: "inherit",
  fontSize: "0.75rem",
  bgColor: colors.brand.accent,
  color: colors.brand.white,
  rounded: "none",
  py: 2,
  px: 7,
  borderWidth: 3,
  borderStyle: "solid",
  borderColor: colors.brand.accent,

  _hover: {
    bgColor: colors.brand.accentHover,
    borderColor: colors.brand.accentHover,
  },

  _focus: {
    borderColor: colors.brand.accentHover,
  },

  _dark: {
    bgColor: colors.darkTheme.accent,
    color: colors.brand.lightGray,
    borderColor: colors.darkTheme.accent,
  },
});

const phonenumber = defineStyle({
  color: colors.brand.accent,
  fontSize: "0.75rem",

  _visited: {},
});

export const brandLinks = defineStyleConfig({
  variants: { brandGhost, brandPrimary, phonenumber },
});
