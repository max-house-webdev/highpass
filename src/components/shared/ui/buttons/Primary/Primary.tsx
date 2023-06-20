import { Button, ButtonProps } from "@chakra-ui/react";

export interface IPrimaryProps extends ButtonProps {
  textContent: string;
}

export function Primary(props: IPrimaryProps) {
  const { textContent, ...rest } = props;

  return (
    <Button data-testid="Primary" variant={"brandPrimary"} {...rest}>
      {textContent}
    </Button>
  );
}
