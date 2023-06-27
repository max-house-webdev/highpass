import { Container } from "@src/components/shared/Container";
import { Phone as PhoneLink } from "@components/shared/ui/links/Phone";
import { MobileDrawer } from "../MobileDrawer";
import { useAppMediaQuery } from "@features/hooks/useAppMediaQuery";
import { HStack } from "@chakra-ui/react";

export function Bottom() {
  const device = useAppMediaQuery();

  return (
    <Container as={"header"} minH={"45px"} mb={5} bgColor={"brand.gray"}>
      {device === "isMobile" && (
        <HStack justifyContent={"space-between"}>
          <MobileDrawer />
          <PhoneLink />
        </HStack>
      )}
    </Container>
  );
}
