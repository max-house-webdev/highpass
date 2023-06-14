import { Link } from "@chakra-ui/react";
import { Logo as LogoIcon } from "@components/shared/icons/Logo";
import { useAccentModeValue, useWhiteModeValue } from "@features/colorMode";

export function Logo() {
  const fillWhite = useWhiteModeValue();
  const fillAccent = useAccentModeValue();

  return (
    <Link href={"/"}>
      <LogoIcon fillWhite={fillWhite} fillAccent={fillAccent} />
    </Link>
  );
}
