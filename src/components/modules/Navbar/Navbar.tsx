import { v4 as uuidv4 } from "uuid";
import { MenuItem } from "./MenuItem";

import { sections } from "@core/constant/content";
import { Box, UnorderedList } from "@chakra-ui/react";
import { Phone as PhoneLink } from "@src/components/shared/ui/links/Phone";

export function Navbar() {
  return (
    <Box
      as={"nav"}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      minH={"100%"}
      paddingBlockEnd={"35px"}
    >
      <UnorderedList
        marginInlineStart={0}
        marginBlockEnd={"auto"}
        listStyleType={"none"}
      >
        {sections.map((item) => {
          const { id, title } = item;

          return <MenuItem key={uuidv4()} href={id} title={title} />;
        })}
      </UnorderedList>
      <PhoneLink justifySelf={"flex-end"} />
    </Box>
  );
}
