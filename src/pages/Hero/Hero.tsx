import { Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { Banner } from "@components/simple/Banner";
import { SectionHeading } from "@components/simple/SectionHeading";
import { content } from "@core/content";
import { Container } from "@src/components/global/Container";

import { Primary as Btn } from "@components/ui/buttons/Primary";
import { BannerHeading } from "@src/components/simple/BannerHeading";
import { Hashtag } from "@src/components/simple/Hashtag";
export function Hero() {
  const { sectionNavigation, sections } = content;
  const { hero } = sections;

  return (
    <Container as={"section"} id={sectionNavigation[0].id}>
      <Banner bgImage={hero.banner.bgImage}>
        <Hashtag textContent={hero.banner.hashtag} />
        <Text variant={"bannerDescription"}>{hero.banner.description}</Text>
        {hero.banner.heading.map((line) => (
          <BannerHeading key={uuidv4()} textContent={line} />
        ))}
        <Btn textContent={hero.banner.btnTextContent} marginBlockStart={2} />
      </Banner>
      <SectionHeading>{sectionNavigation[0].heading}</SectionHeading>
    </Container>
  );
}
