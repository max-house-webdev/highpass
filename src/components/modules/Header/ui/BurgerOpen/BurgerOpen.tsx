import { Ghost as GhostButton } from "@components/shared/ui/buttons/Ghost";
import { Burger as BurgerIcon } from "@components/shared/icons/Burger";
import { useWhiteModeValue } from "@features/colorMode";

export interface IBurgerOpenProps {
  onClick: () => void;
}

export function BurgerOpen(props: IBurgerOpenProps) {
  const { onClick } = props;

  const fill = useWhiteModeValue();

  return (
    <GhostButton data-testid="BurgerOpen" onClick={onClick}>
      <BurgerIcon fill={fill} />
    </GhostButton>
  );
}
