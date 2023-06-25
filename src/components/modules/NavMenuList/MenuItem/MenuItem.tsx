import {
  BreadcrumbItemProps,
  Link,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

export interface IMenuItemProps extends BreadcrumbItemProps {
  href: string;
  heading: string;
}

export function MenuItem(props: IMenuItemProps) {
  const { href, heading, ...rest } = props;

  const color = useColorModeValue("brand.white", "brand.lightGray");

  return (
    <ListItem {...rest} py={{ base: "1rem" }}>
      <Link href={`#${href}`} color={color}>
        {heading}
      </Link>
    </ListItem>
  );
}
