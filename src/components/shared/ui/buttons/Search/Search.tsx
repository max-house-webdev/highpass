import { Button } from "@chakra-ui/react";

import { Search as SearchIcon } from "@components/shared/icons/Search";
import { useEvent } from "@mh-utils/hooks/useEvent";
import { useToggleWhite } from "@features/colorMode/useToggleWhite";

export function Search() {
  const fill = useToggleWhite();

  const onClick = useEvent(() => console.log("SearchButton click"));

  return (
    <Button
      variant={"brandGhost"}
      data-testid="Search"
      onClick={onClick}
      aria-label={"button-search"}
    >
      <SearchIcon
        fill={fill}
        _hover={{
          path: { fill: "brand.accentHover" },
        }}
      />
    </Button>
  );
}
