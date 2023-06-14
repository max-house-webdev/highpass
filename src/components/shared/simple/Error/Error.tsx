import { VStack, Text, StackProps, TextProps } from "@chakra-ui/react";

export interface IErrorProps {
  errorMessage?: string;
  stackProps?: StackProps;
  textProps?: TextProps;
}

export function Error(props: IErrorProps) {
  const { errorMessage = "Error occurred!", stackProps, textProps } = props;

  return (
    <VStack {...stackProps}>
      <Text {...textProps} color={"brand.danger"}>
        {errorMessage}
      </Text>
    </VStack>
  );
}
