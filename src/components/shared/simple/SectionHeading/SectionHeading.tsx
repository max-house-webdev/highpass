import { Heading, HeadingProps } from "@chakra-ui/react";

export interface ISectionHeadingProps extends HeadingProps {
  textContent: string;
}

export function SectionHeading(props: ISectionHeadingProps) {
  const { textContent, ...rest } = props;

  return (
    <Heading fontSize={"1.125rem"} {...rest}>
      {textContent}
    </Heading>
  );
}
