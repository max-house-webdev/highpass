import {
  BreadcrumbItemProps,
  Link,
  ListItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export interface IMenuItemProps extends BreadcrumbItemProps {
  href: string;
  title: string;
}

export function MenuItem(props: IMenuItemProps) {
  const { href, title, ...rest } = props;

  const color = useColorModeValue("brand.white", "brand.lightGray");

  return (
    <ListItem {...rest} py={{ base: "1rem" }}>
      <Link href={`#${href}`} color={color}>
        {title}
      </Link>
    </ListItem>
  );
}
