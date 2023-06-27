import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import { useToggleWhite } from "@src/features/colorMode/useToggleWhite";

export interface IHeadingProps extends HeadingProps {
  textContent: string;
}

export function Heading(props: IHeadingProps) {
  const { textContent, ...rest } = props;

  const textColor = useToggleWhite();

  return (
    <ChakraHeading
      color={textColor}
      fontFamily={"brand"}
      fontSize={"1.7rem"}
      lineHeight={0.8}
      {...rest}
    >
      {textContent}
    </ChakraHeading>
  );
}
