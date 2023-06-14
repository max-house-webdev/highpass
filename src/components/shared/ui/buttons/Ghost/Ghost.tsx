import { Button, ButtonProps } from "@chakra-ui/react";
import { useEvent } from "@mh-utils/hooks/useEvent";
import { ReactNode } from "react";

export interface IGhostProps extends ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function Ghost(props: IGhostProps) {
  const { children, onClick, ...rest } = props;

  const onClickCb = useEvent(() => onClick());

  return (
    <Button variant={"brandGhost"} onClick={onClickCb} {...rest}>
      {children}
    </Button>
  );
}
