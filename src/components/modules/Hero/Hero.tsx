import { Box, Image } from "@chakra-ui/react";
import { LightSection } from "@src/components/containers/LightSection";
import { Hashtag } from "@components/shared/simple/Hashtag";

import banner from "@images/Hero/banner.jpg";
import main from "@images/Hero/main.jpg";
import small_1 from "@images/Hero/small_1.jpg";
import small_2 from "@images/Hero/small_2.jpg";

export function Hero() {
  return (
    <LightSection>
      <Box position={"relative"} gridArea={"banner"}>
        <Hashtag
          textContent="мастеркласс"
          position={"absolute"}
          top={2}
          right={2}
        />
        <Image srcSet={banner} alt="banner" fit={"cover"} w={"100%"} />
      </Box>
      <Image srcSet={banner} alt="banner" fit={"cover"} w={"100%"} />
    </LightSection>
  );
}
