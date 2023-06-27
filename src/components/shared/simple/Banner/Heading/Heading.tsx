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
      fontSize={"1.5rem"}
      lineHeight={1.2}
      {...rest}
    >
      {textContent}
    </ChakraHeading>
  );
}
