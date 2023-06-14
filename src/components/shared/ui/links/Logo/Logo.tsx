import { Link } from "@chakra-ui/react";
import { Logo as LogoIcon } from "@components/shared/icons/Logo";

import { useBrandColor } from "@features/colorMode/useBrandColor";

export function Logo() {
  const fillWhite = useBrandColor({ color: "white" });
  const fillAccent = useBrandColor({ color: "accent" });

  return (
    <Link href={"/"}>
      <LogoIcon fillWhite={fillWhite} fillAccent={fillAccent} />
    </Link>
  );
}
