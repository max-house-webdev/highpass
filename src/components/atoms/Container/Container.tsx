import { ReactNode } from "react";

import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

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
