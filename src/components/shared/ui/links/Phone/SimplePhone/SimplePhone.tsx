import { Link, LinkProps } from "@chakra-ui/react";
import { Phone as PhoneIcon } from "@components/shared/icons/Phone";

export interface ISimplePhoneProps extends LinkProps {
  phoneNumber: string | number;
  formattedPhoneNumber: string;
}

export function SimplePhone(props: ISimplePhoneProps) {
  const { phoneNumber, formattedPhoneNumber, ...rest } = props;

  return (
    <Link
      href={`tel:+7${phoneNumber}`}
      color={"brand.accent"}
      data-testid="PhoneLink"
      display={"flex"}
      justifyContent={"center"}
      justifySelf={{ base: "flex-end", md: "normal" }}
      {...rest}
    >
      <PhoneIcon fill={"brand.accent"} marginInlineEnd={"1"} />
      +7 {formattedPhoneNumber}
    </Link>
  );
}
