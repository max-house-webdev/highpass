import { Heading, HeadingProps } from "@chakra-ui/react";

export interface ISectionHeadingProps extends HeadingProps {}

export function SectionHeading(props: ISectionHeadingProps) {
  const { ...rest } = props;

  return <Heading variant={"sectionHeading"} {...rest} />;
}
