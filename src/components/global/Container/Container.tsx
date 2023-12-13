import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IContainerProps extends ContainerProps {
  children: ReactNode;
}

export function Container(props: IContainerProps) {
  const { children, ...rest } = props;

  return (
    <ChakraContainer
      data-testid="Container"
      variant={"mainContainer"}
      {...rest}
    >
      {children}
    </ChakraContainer>
  );
}
