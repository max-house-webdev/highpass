import { NavLink } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import { Container } from "@components/global/Container";

import { Search as BtnSearch } from "@components/ui/buttons/Search";

import { Logo as LogoIcon } from "@components/icons/Logo";
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
