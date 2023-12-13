import { StackProps, VStack } from "@chakra-ui/react";

export interface IBannerStackProps extends StackProps {}

export function BannerStack(props: IBannerStackProps) {
  const { children, ...rest } = props;

  return (
    <VStack
      {...rest}
      justifyContent={"flex-end"}
      alignItems={"flex-start"}
      minHeight={"422px"}
      paddingInlineStart={7}
      paddingInlineEnd={2}
      paddingBlockStart={2}
      paddingBlockEnd={7}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      {children}
    </VStack>
  );
}
