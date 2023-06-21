import { ContainerProps, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Container } from "../Container";

export interface ILightSectionProps extends ContainerProps {
  children: ReactNode;
}

export function LightSection(props: ILightSectionProps) {
  const { children } = props;

  const bgColor = useColorModeValue("brand.white", "brand.lightGray");

  return (
    <Container
      display={"grid"}
      gridTemplateColumns={"repeat(4, 1fr)"}
      gridGap={7}
      gridTemplateAreas={"'banner banner banner banner'"}
      bgColor={bgColor}
      py={5}
    >
      {children}
    </Container>
  );
}
