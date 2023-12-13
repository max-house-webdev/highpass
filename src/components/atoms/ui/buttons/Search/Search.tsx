import { Button, ButtonProps } from "@chakra-ui/react";

import { Search as SearchIcon } from "@components/atoms/icons/Search";

export interface ISearchProps extends ButtonProps {}

export function Search(props: ISearchProps) {
  const { ...rest } = props;

  const onClick = () => console.log("SearchButton click");

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
