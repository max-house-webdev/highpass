import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sectionHeading = defineStyle({
  marginBlockStart: 4,
  marginBlockEnd: 4,
  fontFamily: "brand",
  fontSize: "1.125rem",
});

const bannerHeading = defineStyle({
  color: "white",
  fontFamily: "brand",
  fontSize: "1.5rem",
  lineHeight: 0.8,
});

export const brandHeading = defineStyleConfig({
  variants: { sectionHeading, bannerHeading },
});
