import { Link, LinkProps } from "@chakra-ui/react";

import { Phone as PhoneIcon } from "@components/atoms/icons/Phone";

import { content } from "@core/content";

export interface IPhoneProps extends LinkProps {}

export function Phone(props: IPhoneProps) {
  const { ...rest } = props;

  const { studioContacts } = content;
  const { phoneNumber } = studioContacts;

  const countryCode = 7;

  const tel = `tel: +${countryCode}${phoneNumber}`;

  return (
    <Link variant={"phonenumber"} data-testid="Phone" href={tel} {...rest}>
      <PhoneIcon marginInlineEnd={1} />
      {`+${countryCode} ${formatPhoneNumber(phoneNumber)}`}
    </Link>
  );
}

export const formatPhoneNumber = (phoneNumber: number) => {
  const lastThreeDigits = phoneNumber
    .toString()
    .substring(
      phoneNumber.toString().length,
      phoneNumber.toString().length - 3
    );

  const middleThreeDigits = phoneNumber
    .toString()
    .substring(
      phoneNumber.toString().length - 3,
      phoneNumber.toString().length - 6
    );

  const firstTwoDigits = phoneNumber
    .toString()
    .substring(
      phoneNumber.toString().length - 6,
      phoneNumber.toString().length - 8
    );

  const cityCode = phoneNumber
    .toString()
    .substring(phoneNumber.toString().length - 8, 0);

  return `(${cityCode}) ${firstTwoDigits}-${middleThreeDigits}-${lastThreeDigits}`;
};
