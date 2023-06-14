import { Search as SearchIcon } from "@components/shared/icons/Search";

import { Ghost as GhostButton } from "../Ghost";
import { useBrandColor } from "@features/colorMode/useBrandColor";
import { useColorMode } from "@chakra-ui/react";

export function Search() {
  const { colorMode } = useColorMode();
  const fillLight = useBrandColor({ color: "white" });
  const fillDark = useBrandColor({ color: "lightGray" });

  const onClick = () => {
    console.log("SearchButton click");
  };

  return (
    <GhostButton data-testid="Search" onClick={onClick}>
      <SearchIcon fill={colorMode === "light" ? fillLight : fillDark} />
    </GhostButton>
  );
}
