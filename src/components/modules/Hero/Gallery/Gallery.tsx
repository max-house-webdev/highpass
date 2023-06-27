import { Flex, FlexProps, Image } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export interface IGalleryProps extends FlexProps {
  gallery: Array<string>;
}

export function Gallery(props: IGalleryProps) {
  const { gallery } = props;

  return (
    <Flex
      gridArea={"gallery"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={5}
      maxW={"280px"}
    >
      {gallery.map((imageSrc) => (
        <Image key={uuidv4()} src={imageSrc} objectFit={"cover"} />
      ))}
    </Flex>
  );
}
