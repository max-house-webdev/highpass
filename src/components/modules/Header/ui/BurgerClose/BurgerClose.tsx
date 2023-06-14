import { Ghost as GhostButton } from "@components/shared/ui/buttons/Ghost";
import { Cross as CrossIcon } from "@src/components/shared/icons/Cross";
import { useWhiteModeValue } from "@src/features/colorMode";

export interface IBurgerCloseProps {
  onClick: () => void;
}

export function BurgerClose(props: IBurgerCloseProps) {
  const { onClick } = props;

  const fill = useWhiteModeValue();

  return (
    <GhostButton
      data-testid="BurgerClose"
      onClick={onClick}
      h={7}
      w={7}
      minH={7}
      minW={7}
      padding={1}
      bgColor={"brand.lightGray"}
      borderRadius={"50%"}
    >
      <CrossIcon fill={fill} />
    </GhostButton>
  );
}
