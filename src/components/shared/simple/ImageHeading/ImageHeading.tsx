import { Heading, HeadingProps } from "@chakra-ui/react";
import { useToggleWhite } from "@src/features/colorMode/useToggleWhite";

export interface IImageHeadingProps extends HeadingProps {
  textContent: string;
}

export function ImageHeading(props: IImageHeadingProps) {
  const { textContent, ...rest } = props;

  const textColor = useToggleWhite();

  return (
    <Heading
      color={textColor}
      fontFamily={"brand"}
      fontSize={"1.5rem"}
      lineHeight={1.2}
      {...rest}
    >
      {textContent}
    </Heading>
  );
}
