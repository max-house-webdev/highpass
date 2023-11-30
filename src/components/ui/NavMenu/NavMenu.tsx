import { Flex, FlexProps } from "@chakra-ui/react";
import { content } from "@core/content";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export interface INavMenuProps extends FlexProps {}

export function NavMenu(props: INavMenuProps) {
  const {} = props;

  const { sectionNavigation } = content;

  return (
    <Flex as={"nav"} justifyContent={"space-between"}>
      {sectionNavigation.map((section) => (
        <ReactRouterNavLink to={section.id} key={uuidv4()}>
          {section.heading}
        </ReactRouterNavLink>
      ))}
    </Flex>
  );
}
