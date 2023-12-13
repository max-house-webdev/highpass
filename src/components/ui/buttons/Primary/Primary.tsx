import { Button, ButtonProps } from "@chakra-ui/react";

export interface IPrimaryProps extends ButtonProps {
  textContent: string;
  onClick?: () => void;
}

export function Primary(props: IPrimaryProps) {
  const { textContent, onClick, ...rest } = props;

  return (
    <Button
      data-testid="Primary"
      variant={"brandPrimary"}
      onClick={onClick}
      {...rest}
    >
      {textContent}
    </Button>
  );
}
