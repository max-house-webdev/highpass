import { Grid, Image } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";

import { Container } from "@src/components/atoms/Container";

import { SectionHeading } from "@components/atoms/simple/SectionHeading";

import { Banner } from "@components/templates/Hero/Banner";

import { content } from "@core/content";

export function Hero() {
  const { sectionNavigation, sections } = content;
  const { hero } = sections;
  const { gallery } = hero;

  const { main, small } = gallery;

  return (
    <Container as={"section"} id={sectionNavigation[0].id} paddingBlockEnd={12}>
      <Banner />

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
