import { Box, VStack } from "@chakra-ui/react";

import { Hashtag } from "../Hashtag";
import { Heading } from "./Heading";
import { Description } from "./Description";

export interface IBannerProps {
  bgImage: string;
  description: string;
  heading?: string;
  subHeading?: string;
  hashtag?: string;
  button?: JSX.Element;
  gridArea?: string;
}

export function Banner(props: IBannerProps) {
  const {
    gridArea,
    bgImage,
    description,
    heading,
    subHeading,
    hashtag,
    button,
  } = props;

  return (
    <Box
      gridArea={gridArea}
      minH={"422px"}
      bgImage={bgImage}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <VStack
        paddingInlineStart={7}
        paddingInlineEnd={2}
        paddingBlockStart={2}
        paddingBlockEnd={7}
        h={"100%"}
        justifyContent={"flex-end"}
        alignItems={"flex-start"}
      >
        {hashtag && <Hashtag textContent={hashtag} />}

        <Description textContent={description} />

        {heading && <Heading textContent={heading} />}
        {subHeading && <Heading textContent={subHeading} />}

        {button}
      </VStack>
    </Box>
  );
}
