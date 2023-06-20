import { Link } from "@chakra-ui/react";
import { Logo as LogoIcon } from "@components/shared/icons/Logo";
import { useBrandColor } from "@features/colorMode/useBrandColor";
import { useToggleWhite } from "@features/colorMode/useToggleWhite";

export function Logo() {
  const fillWhite = useToggleWhite();
  const fillAccent = useBrandColor("accent");

  return (
    <Link href={"/"}>
      <LogoIcon fillWhite={fillWhite} fillAccent={fillAccent} />
    </Link>
  );
}
