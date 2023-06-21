import { Text, TextProps } from "@chakra-ui/react";
import { useToggleWhite } from "@src/features/colorMode/useToggleWhite";

export interface IHashtagProps extends TextProps {
  textContent: string;
}

export function Hashtag(props: IHashtagProps) {
  const { textContent, ...rest } = props;

  const color = useToggleWhite();

  return (
    <Text
      as={"span"}
      bgColor={"brand.gray"}
      px={2}
      py={1}
      color={color}
      {...rest}
    >
      {`#${textContent}`}
    </Text>
  );
}
