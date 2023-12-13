import { Text } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";

import { BannerStack } from "@components/atoms/simple/BannerStack";

import { BannerHeading } from "@components/atoms/simple/BannerHeading";
import { Hashtag } from "@components/atoms/simple/Hashtag";
import { LearnMore as BtnLearnMore } from "@components/atoms/ui/buttons/LearnMore";

import { content } from "@core/content";

export function Banner() {
  const { sections } = content;
  const { hero } = sections;
  const { banner } = hero;

  const { bgImage, btnTextContent, hashtag, heading, description } = banner;

  return (
    <BannerStack data-testid="Banner" bgImage={bgImage} marginBlockEnd={8}>
      <Hashtag textContent={hashtag} />

      <Text variant={"bannerDescription"}>{description}</Text>

      {heading.map((line) => (
        <BannerHeading key={uuidv4()}>{line}</BannerHeading>
      ))}

      <BtnLearnMore textContent={btnTextContent} marginBlockStart={2} />
    </BannerStack>
  );
}
