import {
  BreadcrumbItemProps,
  Link,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import { useBrandColor } from "@src/features/colorMode/useBrandColor";

export interface IMenuItemProps extends BreadcrumbItemProps {
  href: string;
  title: string;
}

export function MenuItem(props: IMenuItemProps) {
  const { href, title, ...rest } = props;

  const { colorMode } = useColorMode();
  const textColorLight = useBrandColor({ color: "white" });
  const textColorDark = useBrandColor({ color: "lightGray" });

  return (
    <ListItem {...rest} py={{ base: "1rem" }}>
      <Link
        href={`#${href}`}
        color={colorMode === "light" ? textColorLight : textColorDark}
      >
        {title}
      </Link>
    </ListItem>
  );
}
