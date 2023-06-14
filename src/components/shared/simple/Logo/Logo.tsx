import { Logo as LogoIcon } from "@components/shared/icons/Logo";
import { useAccentModeValue, useWhiteModeValue } from "@features/colorMode";

export function Logo() {
  const fillWhite = useWhiteModeValue();
  const fillAccent = useAccentModeValue();

  return <LogoIcon fillWhite={fillWhite} fillAccent={fillAccent} />;
}
