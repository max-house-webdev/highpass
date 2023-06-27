import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { Container } from "@src/components/shared/Container";
import { Banner } from "@components/shared/simple/Banner";
import { Spinner } from "@components/shared/simple/Spinner";

import { FindOutMore as FindOutMoreLink } from "./FindOutMore";

import { useContent } from "@core/store/content";
import { useRemoteData } from "@src/features/hooks/useRemoteData";
import { SectionHeading } from "@src/components/shared/simple/SectionHeading";
import { Gallery } from "./Gallery";
<Image />;

export function Hero() {
  const bgColor = useColorModeValue("brand.white", "brand.lightGray");
  const heroContent = useContent((store) => store.hero);

  const fetchHero = useContent((store) => store.fetchHero);

  useRemoteData(fetchHero);

  const Hoc = (content: typeof heroContent) => {
    if (!content) {
      return <Spinner gridArea={"banner"} size={"lg"} justifySelf={"center"} />;
    }

    if (content.sectionHeading && content.banner && content.gallery) {
      return (
        <>
          <Banner
            gridArea="banner"
            bgImage={content.banner.bgImage}
            hashtag={content.banner.hashtag}
            heading={content.banner.heading}
            description={content.banner.description}
            button={<FindOutMoreLink />}
          />

          <SectionHeading
            gridArea={"section-heading"}
            textContent={content.sectionHeading}
          />
          <Gallery gallery={content.gallery} />
        </>
      );
    }
  };

  return (
    <Container
      as={"section"}
      id={"hero"}
      display={"grid"}
      gridTemplateColumns={"repeat(4, 1fr)"}
      gridGap={7}
      gridTemplateAreas={`
      'banner banner banner banner' 
      'section-heading section-heading section-heading section-heading'
      'gallery gallery gallery gallery'`}
      bgColor={bgColor}
      py={5}
    >
      {Hoc(heroContent)}
    </Container>
  );
}
