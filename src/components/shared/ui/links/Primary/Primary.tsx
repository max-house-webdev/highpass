import { Link as ReactRouterLink } from "react-router-dom";
import { Link, LinkProps } from "@chakra-ui/react";

export interface IPrimaryProps extends LinkProps {
  textContent: string;
}

export function Primary(props: IPrimaryProps) {
  const { textContent, ...rest } = props;

  return (
    <Link
      as={ReactRouterLink}
      data-testid="Primary"
      variant={"brandPrimary"}
      {...rest}
    >
      {textContent}
    </Link>
  );
}
