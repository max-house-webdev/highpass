import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IContainerProps extends ContainerProps {
  children: ReactNode;
}

export function Container(props: IContainerProps) {
  const { children, ...rest } = props;

  return (
    <ChakraContainer
      maxW={{ base: "100vw", md: "768px", lg: "1024px", "2xl": "1920px" }}
      px={{ base: 5, md: 7, lg: "30px", "2xl": "315px" }}
      {...rest}
    >
      {children}
    </ChakraContainer>
  );
}
