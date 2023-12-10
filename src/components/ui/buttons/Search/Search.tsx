import { Button, ButtonProps } from "@chakra-ui/react";

import { useEvent } from "@mh-utils/hooks/useEvent";

import { Search as SearchIcon } from "@components/icons/Search";

export interface ISearchProps extends ButtonProps {}

export function Search(props: ISearchProps) {
  const { ...rest } = props;

  const onClick = useEvent(() => console.log("SearchButton click"));

  return (
    <Button
      variant={"brandGhost"}
      data-testid="Search"
      {...rest}
      onClick={onClick}
    >
      <SearchIcon />
    </Button>
  );
}
