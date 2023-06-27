import { Text, TextProps } from "@chakra-ui/react";
import { useToggleWhite } from "@src/features/colorMode/useToggleWhite";

export interface IDescriptionProps extends TextProps {
  textContent: string;
}

export function Description(props: IDescriptionProps) {
  const { textContent, ...rest } = props;

  const color = useToggleWhite();

  return (
    <Text color={color} {...rest}>
      {textContent}
    </Text>
  );
}
