import { ListProps, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ISimpleNavMenuListProps extends ListProps {
  children: ReactNode;
}

export function SimpleNavMenuList(props: ISimpleNavMenuListProps) {
  const { children, ...rest } = props;

  return (
    <UnorderedList
      marginInlineStart={0}
      marginBlockEnd={"auto"}
      listStyleType={"none"}
      {...rest}
    >
      {children}
    </UnorderedList>
  );
}
