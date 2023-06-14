export function formatPhoneNumber(phoneNumber: number | string) {
  const digits =
    typeof phoneNumber === "string"
      ? phoneNumber.split("")
      : String(phoneNumber).split("");

  const SEPARATOR = "-";
  const ESTIMATED_PHONE_NUMBER_LENGTH = 11;

  if (digits.length !== ESTIMATED_PHONE_NUMBER_LENGTH) {
    return "unsupported phone number";
  }

  const phoneCode = `${digits[0]}${digits[1]}${digits[2]}`;
  const partOne = `${digits[3]}${digits[4]}${digits[5]}`;
  const partTwo = `${digits[6]}${digits[7]}`;
  const partThree = `${digits[8]}${digits[9]}`;

  return `(${phoneCode}) ${partOne}${SEPARATOR}${partTwo}${SEPARATOR}${partThree}`;
}
