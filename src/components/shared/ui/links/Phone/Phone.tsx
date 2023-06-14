import { Link, LinkProps } from "@chakra-ui/react";
import { contacts } from "@core/constant/content";
import { formatPhoneNumber } from "./formatPhoneNumber";
import { Phone as PhoneIcon } from "@components/shared/icons/Phone";
import { useBrandColor } from "@src/features/colorMode/useBrandColor";

export function Phone(props: LinkProps) {
  const color = useBrandColor({ color: "accent" });
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
