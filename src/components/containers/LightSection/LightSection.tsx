import { ContainerProps, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Container } from "../Container";

export interface ILightSectionProps extends ContainerProps {
  children: ReactNode;
}

export function LightSection(props: ILightSectionProps) {
  const { children } = props;

  const bgColor = useColorModeValue("brand.white", "brand.lightGray");

  return <Container bgColor={bgColor}>{children}</Container>;
}
