import { IconButton, useColorMode } from "@chakra-ui/react";
import { Moon } from "@components/shared/icons/Moon";
import { Sun } from "@components/shared/icons/Sun";
import { useBrandColor } from "@features/colorMode/useBrandColor";

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  const fill = useBrandColor({ color: "accent" });

  return (
    <IconButton
      variant={"brandGhost"}
      bgColor={"transparent"}
      onClick={toggleColorMode}
      aria-label={"toggle-theme"}
      icon={colorMode === "light" ? <Moon fill={fill} /> : <Sun fill={fill} />}
    />
  );
}
