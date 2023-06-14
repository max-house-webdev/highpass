import { Icon, IconProps } from "@chakra-ui/react";

export interface IBurgerProps extends IconProps {
  fill: string;
}

export function Burger(props: IBurgerProps) {
  const { fill, ...rest } = props;

  return (
    <Icon
      width="20px"
      height="18px"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width="20" height="2" fill={fill} />
      <rect y="8" width="20" height="2" fill={fill} />
      <rect y="16" width="10" height="2" fill={fill} />
    </Icon>
  );
}
