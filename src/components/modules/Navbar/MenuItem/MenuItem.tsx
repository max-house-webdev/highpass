import { BreadcrumbItemProps, Link, ListItem } from "@chakra-ui/react";
import { useWhiteModeValue } from "@src/features/colorMode";

export interface IMenuItemProps extends BreadcrumbItemProps {
  href: string;
  title: string;
}

export function MenuItem(props: IMenuItemProps) {
  const { href, title, ...rest } = props;

  const textColor = useWhiteModeValue();

  return (
    <ListItem {...rest} py={{ base: "1rem" }}>
      <Link href={`#${href}`} color={textColor}>
        {title}
      </Link>
    </ListItem>
  );
}
