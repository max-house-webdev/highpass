import { contacts } from "@core/constant/content";
import { formatPhoneNumber } from "./formatPhoneNumber";

import { SimplePhone } from "./SimplePhone";

export function Phone() {
  const { phoneNumber } = contacts;

  return (
    <SimplePhone
      phoneNumber={phoneNumber}
      formattedPhoneNumber={formatPhoneNumber(phoneNumber)}
    />
  );
}
