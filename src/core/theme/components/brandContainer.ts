import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const mainContainer = defineStyle({
  maxW: { base: "100vw", md: "768px", lg: "1024px", "2xl": "1920px" },
  px: { base: 5, md: 7, lg: "30px", "2xl": "315px" },
});

export const brandContainer = defineStyleConfig({
  variants: { mainContainer },
});
