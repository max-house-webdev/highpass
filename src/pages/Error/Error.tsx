import { Text, VStack } from "@chakra-ui/react";

import { SectionHeading } from "@components/atoms/simple/SectionHeading";

export interface IErrorProps {
  heading?: string;
  message?: string;
}

export function Error(props: IErrorProps) {
  const { heading = "Ой...", message = "Что-то пошло не так..." } = props;

  return (
    <VStack id={"error-page"} alignContent={"center"} paddingTop={"25vh"}>
      <SectionHeading>{heading}</SectionHeading>
      <Text>{message}</Text>
    </VStack>
  );
}
