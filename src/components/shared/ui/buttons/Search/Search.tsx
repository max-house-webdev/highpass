import { Search as SearchIcon } from "@components/shared/icons/Search";
import { useWhiteModeValue } from "@features/colorMode";
import { Ghost as GhostButton } from "../Ghost";

export function Search() {
  const fill = useWhiteModeValue();

  const onClick = () => {
    console.log("SearchButton click");
  };

  return (
    <GhostButton data-testid="Search" onClick={onClick}>
      <SearchIcon fill={fill} />
    </GhostButton>
  );
}
