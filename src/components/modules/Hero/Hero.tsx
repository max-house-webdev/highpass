import { Box, Image, useColorModeValue } from "@chakra-ui/react";

import { ImageHeading } from "@components/shared/simple/ImageHeading";
import { Hashtag } from "@components/shared/simple/Hashtag";
import banner from "@images/Hero/banner.jpg";
import main from "@images/Hero/main.jpg";
import small_1 from "@images/Hero/small_1.jpg";
import small_2 from "@images/Hero/small_2.jpg";
import { FindOutMore as FindOutMoreLink } from "./ui/FindOutMore";

import { hero } from "@core/constant/content";
import { Container } from "@src/components/containers/Container";
import { BannerContainer } from "@src/components/containers/BannerContainer";

export function Hero() {
  const { imageHeading, imageSubheading, imageDescription } = hero;

  const bgColor = useColorModeValue("brand.white", "brand.lightGray");

  return (
    <Container
      display={"grid"}
      gridTemplateColumns={"repeat(4, 1fr)"}
      gridGap={7}
      gridTemplateAreas={`'banner banner banner banner' 
        'section-heading section-heading section-heading section-heading'`}
      bgColor={bgColor}
      py={5}
    >
      <Box
        gridArea={"banner"}
        minH={"422px"}
        bgImage={banner}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <BannerContainer>
          <Hashtag textContent="мастеркласс" />
          <ImageHeading textContent={imageHeading} maxW={"10rem"} />
          <ImageHeading textContent={imageSubheading} />
          <FindOutMoreLink />
        </BannerContainer>
      </Box>

      {/* <Image srcSet={banner} alt="banner" fit={"cover"} w={"100%"} /> */}
    </Container>
  );
}
