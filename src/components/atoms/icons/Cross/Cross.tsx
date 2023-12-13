import { Icon, IconProps } from "@chakra-ui/react";

export interface ICrossProps extends IconProps {
  fill: string;
}

export function Cross(props: ICrossProps) {
  const { fill, ...rest } = props;

  return (
    <Icon
      width="10px"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="1.58643"
        y="0.950195"
        width="10.8"
        height="0.9"
        transform="rotate(45 1.58643 0.950195)"
        fill={fill}
      />
      <rect
        x="1.03223"
        y="8.58691"
        width="10.8"
        height="0.9"
        transform="rotate(-45 1.03223 8.58691)"
        fill={fill}
      />
    </Icon>
  );
}
