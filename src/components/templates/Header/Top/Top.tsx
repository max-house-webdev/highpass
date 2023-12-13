import { NavLink } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import { Container } from "@components/atoms/Container";
import { Logo as LogoIcon } from "@components/atoms/icons/Logo";
import { Search as BtnSearch } from "@components/atoms/ui/buttons/Search";
// import { NavMenu } from "@components/ui/NavMenu";

export function Top() {
  return (
    <Container as={"header"} id={"header-top"} variant={"headerTop"}>
      <Flex
        as={"nav"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <NavLink to="/">
          <LogoIcon />
        </NavLink>

        <BtnSearch />
      </Flex>
    </Container>
  );
}
