import { Heading, HeadingProps } from "@chakra-ui/react";
import { useToggleBlack } from "@features/colorMode/useToggleBlack";

export interface ISectionHeadingProps extends HeadingProps {
  textContent: string;
}

export function SectionHeading(props: ISectionHeadingProps) {
  const { textContent, ...rest } = props;

  const color = useToggleBlack();

  return (
    <Heading fontSize={"1.125rem"} color={color} {...rest}>
      {textContent}
    </Heading>
  );
}
