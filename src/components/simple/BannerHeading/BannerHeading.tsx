import { Heading, HeadingProps } from "@chakra-ui/react";

export interface IHeadingProps extends HeadingProps {}

export function BannerHeading(props: IHeadingProps) {
  const { ...rest } = props;

  return <Heading variant={"bannerHeading"} {...rest} />;
}
