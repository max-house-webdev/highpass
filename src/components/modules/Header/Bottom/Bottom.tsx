import { Container } from "@components/containers/Container";
import { MobileDrawer } from "../MobileDrawer";
import { useAppMediaQuery } from "@src/features/hooks/useAppMediaQuery";

export function Bottom() {
  const device = useAppMediaQuery();

  return (
    <Container minH={"45px"} mb={5} bgColor={"brand.gray"}>
      {device === "isMobile" && <MobileDrawer />}
    </Container>
  );
}
