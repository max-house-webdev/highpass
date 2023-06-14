import { Link, LinkProps } from "@chakra-ui/react";
import { useAccentModeValue } from "@features/colorMode";
import { contacts } from "@core/constant/content";
import { formatPhoneNumber } from "./formatPhoneNumber";
import { Phone as PhoneIcon } from "@components/shared/icons/Phone";

export function Phone(props: LinkProps) {
  const color = useAccentModeValue();
  const { phoneNumber } = contacts;

  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <Link
      href={`tel:+7${phoneNumber}`}
      color={color}
      data-testid="PhoneLink"
      display={"flex"}
      justifyContent={"center"}
      {...props}
    >
      <PhoneIcon fill={color} marginInlineEnd={"1"} />
      +7 {formattedPhoneNumber}
    </Link>
  );
}
