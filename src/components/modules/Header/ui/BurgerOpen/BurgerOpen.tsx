import { Button } from "@chakra-ui/react";
import { Burger as BurgerIcon } from "@components/shared/icons/Burger";
import { useEvent } from "@mh-utils/hooks/useEvent";
import { useToggleWhite } from "@features/colorMode/useToggleWhite";

export interface IBurgerOpenProps {
  onClick: () => void;
}

export function BurgerOpen(props: IBurgerOpenProps) {
  const { onClick } = props;

  const fill = useToggleWhite();

  const onClickCb = useEvent(onClick);

  return (
    <Button
      variant={"brandGhost}"}
      data-testid="BurgerOpen"
      onClick={onClickCb}
      paddingInlineStart={0}
    >
      <BurgerIcon fill={fill} />
    </Button>
  );
}
