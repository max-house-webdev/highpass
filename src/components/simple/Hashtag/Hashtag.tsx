import { Text, TextProps } from "@chakra-ui/react";

export interface IHashtagProps extends TextProps {
  textContent: string;
}

export function Hashtag(props: IHashtagProps) {
  const { textContent, ...rest } = props;

  return <Text variant={"hashtag"} {...rest}>{`#${textContent}`}</Text>;
}
