import { Box, VStack } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { Hashtag } from "../Hashtag";
import { Heading } from "./Heading";
import { Description } from "./Description";
import { TBanner } from "@src/core/store/content/interfaces";

export interface IBannerProps extends TBanner {
  button?: JSX.Element;
  gridArea?: string;
}

export function Banner(props: IBannerProps) {
  const { gridArea, bgImage, description, heading, hashtag, button } = props;

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

        {heading && typeof heading === "string" && (
          <Heading textContent={heading} />
        )}

        {heading &&
          Array.isArray(heading) &&
          heading.map((item) => <Heading key={uuidv4()} textContent={item} />)}

        {button}
      </VStack>
    </Box>
  );
}
