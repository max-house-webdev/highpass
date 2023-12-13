import { Heading, HeadingProps } from "@chakra-ui/react";

export interface IHeadingProps extends HeadingProps {
  // textContent: string;
}

export function BannerHeading(props: IHeadingProps) {
  // const { textContent, ...rest } = props;

  // return (
  //   <Heading variant={"bannerHeading"} {...rest}>
  //     {textContent}
  //   </Heading>
  // );

  return <Heading variant={"bannerHeading"} {...props} />;
}
