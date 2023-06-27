import { useColorModeValue } from "@chakra-ui/react";

import { Container } from "@src/components/shared/Container";
import { Banner } from "@components/shared/simple/Banner";
import { Spinner } from "@components/shared/simple/Spinner";

import { FindOutMore as FindOutMoreLink } from "./ui/FindOutMore";

import { useContent } from "@core/store/content";
import { useRemoteData } from "@src/features/hooks/useRemoteData";
import { SectionHeading } from "@src/components/shared/simple/SectionHeading";

export function Hero() {
  const bgColor = useColorModeValue("brand.white", "brand.lightGray");
  const heroContent = useContent((store) => store.hero);

  const fetchHero = useContent((store) => store.fetchHero);

  useRemoteData(fetchHero);

  const Hoc = (content: typeof heroContent) => {
    if (!heroContent) {
      return <Spinner gridArea={"banner"} size={"lg"} justifySelf={"center"} />;
    }

    if (heroContent.sectionHeading && heroContent.banner) {
      return (
        <>
          <Banner
            gridArea="banner"
            bgImage={heroContent.banner.bgImage}
            hashtag={heroContent.banner.hashtag}
            heading={heroContent.banner.heading}
            description={heroContent.banner.description}
            button={<FindOutMoreLink />}
          />
          <SectionHeading
            gridArea={"section-heading"}
            textContent={heroContent.sectionHeading}
          />
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
      gridTemplateAreas={`'banner banner banner banner' 
        'section-heading section-heading section-heading section-heading'`}
      bgColor={bgColor}
      py={5}
    >
      {Hoc(heroContent)}
      {/* <Image srcSet={banner} alt="banner" fit={"cover"} w={"100%"} /> */}
    </Container>
  );
}
