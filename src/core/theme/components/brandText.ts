import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const hashtag = defineStyle({
  as: "span",
  marginInlineStart: "auto",
  marginBlockEnd: "auto",
  px: 2,
  py: 0.5,
  color: "white",
  fontSize: "0.75rem",
  bgColor: "brand.gray",
});

const bannerDescription = defineStyle({
  px: 0,
  fontSize: "0.875rem",
  color: "white",
});

export const brandText = defineStyleConfig({
  variants: { hashtag, bannerDescription },
});
