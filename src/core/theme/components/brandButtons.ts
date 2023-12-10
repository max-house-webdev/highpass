import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../colors";

const { brand } = colors;
const { accent, accentFocus, accentHover, lightGray, white } = brand;

const brandGhost = defineStyle({
  p: 3,
  mx: -3,

  _focusVisible: {
    boxShadow: `0 0 0 3px ${accentFocus}`,
  },
});

const brandPrimary = defineStyle({
  fontFamily: "inherit",
  fontSize: "0.75rem",
  bgColor: accent,
  color: white,
  rounded: "none",
  py: 2,
  px: 7,
  borderWidth: 3,
  borderStyle: "solid",
  borderColor: accent,

  _hover: {
    bgColor: accentHover,
    borderColor: accentHover,
  },

  _focus: {
    borderColor: accentHover,
  },

  _dark: {
    bgColor: colors.darkTheme.accent,
    color: lightGray,
    borderColor: colors.darkTheme.accent,
  },
});

export const brandButtons = defineStyleConfig({
  variants: { brandGhost, brandPrimary },
});
