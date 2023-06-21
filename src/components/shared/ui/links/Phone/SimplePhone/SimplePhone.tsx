import { Link, LinkProps } from "@chakra-ui/react";
import { Phone as PhoneIcon } from "@components/shared/icons/Phone";
import { useToggleAccent } from "@features/colorMode/useToggleAccent";

export interface ISimplePhoneProps extends LinkProps {
  phoneNumber: string | number;
  formattedPhoneNumber: string;
}

export function SimplePhone(props: ISimplePhoneProps) {
  const { phoneNumber, formattedPhoneNumber, ...rest } = props;

  const fill = useToggleAccent();

  return (
    <Link
      href={`tel:+7${phoneNumber}`}
      color={fill}
      data-testid="PhoneLink"
      display={"flex"}
      justifyContent={"center"}
      justifySelf={{ base: "flex-end", md: "normal" }}
      {...rest}
    >
      <PhoneIcon fill={fill} marginInlineEnd={"1"} />
      +7 {formattedPhoneNumber}
    </Link>
  );
}
