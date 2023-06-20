import { Button } from "@chakra-ui/react";
import { Cross as CrossIcon } from "@components/shared/icons/Cross";
import { useEvent } from "@mh-utils/hooks/useEvent";
import { useToggleWhite } from "@features/colorMode/useToggleWhite";

export interface IBurgerCloseProps {
  onClick: () => void;
}

export function BurgerClose(props: IBurgerCloseProps) {
  const { onClick } = props;

  const fill = useToggleWhite();

  const size = 7;

  const onClickCb = useEvent(onClick);

  return (
    <Button
      variant={"brandGhost}"}
      data-testid="BurgerClose"
      onClick={onClickCb}
      h={size}
      w={size}
      minH={size}
      minW={size}
      p={1}
      bgColor={"brand.lightGray"}
      _dark={{
        bgColor: "brand.gray",
      }}
      borderRadius={"50%"}
    >
      <CrossIcon fill={fill} />
    </Button>
  );
}
