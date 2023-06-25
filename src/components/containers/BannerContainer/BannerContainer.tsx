import { VStack, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IBannerContainerProps extends StackProps {
  children: ReactNode;
}

export function BannerContainer(props: IBannerContainerProps) {
  const { children, ...rest } = props;

  return (
    <VStack
      paddingInlineStart={7}
      paddingInlineEnd={2}
      paddingBlockStart={2}
      paddingBlockEnd={7}
      h={"100%"}
      justifyContent={"flex-end"}
      alignItems={"flex-start"}
      {...rest}
    >
      {children}t
    </VStack>
  );
}
