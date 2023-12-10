import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// header
const headerTop = defineStyle({
  display: "flex",

  minHeight: { base: "70px" },
  bgColor: "brand.black",
});

const headerBottom = defineStyle({
  minHeight: { base: "45px" },
  bgColor: "brand.gray",
});

// main
const mainContainer = defineStyle({
  maxWidth: { base: "100vw", md: "768px", lg: "1024px", "2xl": "1920px" },
  paddingInline: { base: 5, md: 7, lg: "30px", "2xl": "315px" },
});

export const brandContainer = defineStyleConfig({
  variants: { mainContainer, headerTop, headerBottom },
});
