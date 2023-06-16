import { Box } from "@chakra-ui/react";
import { Phone as PhoneLink } from "@src/components/shared/ui/links/Phone";
import { NavMenuList } from "../NavMenuList";

export function Navbar() {
  return (
    <Box
      as={"nav"}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      minH={"100%"}
      paddingBlockEnd={"35px"}
    >
      <NavMenuList />
      <PhoneLink />
    </Box>
  );
}
