import { Link, LinkProps } from "@chakra-ui/react";
import { useBrandColor } from "@features/colorMode/useBrandColor";
import { Phone as PhoneIcon } from "@components/shared/icons/Phone";

export interface ISimplePhoneProps extends LinkProps {
  phoneNumber: string | number;
  formattedPhoneNumber: string;
}

export function SimplePhone(props: ISimplePhoneProps) {
  const { phoneNumber, formattedPhoneNumber, ...rest } = props;

  const color = useBrandColor({ color: "accent" });

  return (
    <Link
      href={`tel:+7${phoneNumber}`}
      color={color}
      data-testid="PhoneLink"
      display={"flex"}
      justifyContent={"center"}
      justifySelf={{ base: "flex-end", md: "normal" }}
      {...rest}
    >
      <PhoneIcon fill={color} marginInlineEnd={"1"} />
      +7 {formattedPhoneNumber}
    </Link>
  );
}
