import { useContent } from "@core/store/content";
import { formatPhoneNumber } from "./formatPhoneNumber";

import { SimplePhone } from "./SimplePhone";

export function Phone() {
  const phoneNumber = useContent((store) => store.contacts.phoneNumber);

  return (
    <SimplePhone
      phoneNumber={phoneNumber}
      formattedPhoneNumber={formatPhoneNumber(phoneNumber)}
    />
  );
}
