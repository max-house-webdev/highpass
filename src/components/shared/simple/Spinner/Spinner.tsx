import { Spinner as ChakraSpinner, SpinnerProps } from "@chakra-ui/react";
import { useToggleAccent } from "@src/features/colorMode/useToggleAccent";

export function Spinner(props: SpinnerProps) {
  const color = useToggleAccent();

  return <ChakraSpinner color={color} {...props} />;
}
