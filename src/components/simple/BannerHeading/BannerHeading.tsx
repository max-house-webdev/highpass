import { Heading, HeadingProps } from "@chakra-ui/react";

export interface IHeadingProps extends HeadingProps {}

export function BannerHeading(props: IHeadingProps) {
  return <Heading variant={"bannerHeading"} {...props} />;
}
