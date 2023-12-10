import { Grid, Image, Text } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";

import { Container } from "@components/global/Container";

import { Banner } from "@components/simple/Banner";
import { BannerHeading } from "@components/simple/BannerHeading";
import { Hashtag } from "@components/simple/Hashtag";
import { SectionHeading } from "@components/simple/SectionHeading";

import { LearnMore as BtnLearnMore } from "@components/ui/buttons/LearnMore";

import { content } from "@core/content";

export function Hero() {
  const { sectionNavigation, sections } = content;
  const { hero } = sections;
  const { banner, gallery } = hero;

  const { bgImage, btnTextContent, hashtag, heading, description } = banner;
  const { main, small } = gallery;

  return (
    <Container as={"section"} id={sectionNavigation[0].id} paddingBlockEnd={12}>
      <Banner bgImage={bgImage} marginBlockEnd={8}>
        <Hashtag textContent={hashtag} />
        <Text variant={"bannerDescription"}>{description}</Text>
        {heading.map((line) => (
          <BannerHeading key={uuidv4()} textContent={line} />
        ))}

        <BtnLearnMore textContent={btnTextContent} marginBlockStart={2} />
      </Banner>

      <SectionHeading>{sectionNavigation[0].heading}</SectionHeading>

      <Grid
        id={"hero-gallery"}
        gridTemplateColumns={{ base: "repeat(2, 2fr)" }}
        gap={{ base: 4 }}
      >
        <Image
          key={uuidv4()}
          src={main}
          alt={"gallery-main-image"}
          gridColumn={{ base: "1 / 3" }}
        />
        {small.map((image) => (
          <Image key={uuidv4()} src={image} alt={"gallery-small-image"} />
        ))}
      </Grid>
    </Container>
  );
}
