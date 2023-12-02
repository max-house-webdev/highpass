import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sectionHeading = defineStyle({
  fontFamily: "brand",
  fontSize: "1.125rem",
});

export const brandHeading = defineStyleConfig({
  variants: { sectionHeading },
});
