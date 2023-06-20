import { IconButton, useColorMode } from "@chakra-ui/react";
import { Moon } from "@components/shared/icons/Moon";
import { Sun } from "@components/shared/icons/Sun";
import { useBrandColor } from "@features/colorMode/useBrandColor";
import { useDarkThemeColor } from "@features/colorMode/useDarkThemeColor";

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();

  const fillLight = useBrandColor("accent");
  const fillDark = useDarkThemeColor("accent");

  return (
    <IconButton
      variant={"brandGhost"}
      onClick={toggleColorMode}
      aria-label={"toggle-theme"}
      icon={
        colorMode === "light" ? (
          <Moon fill={fillDark} />
        ) : (
          <Sun fill={fillLight} />
        )
      }
    />
  );
}
