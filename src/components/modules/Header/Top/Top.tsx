import { Container } from "@components/containers/Container";
import { Logo } from "@components/shared/simple/Logo";
import { Search as SearchButton } from "@components/shared/ui/buttons/Search";

export function Top() {
  return (
    <Container
      as={"header"}
      minH={{ base: "70px", md: "80px" }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"brand.black"}
    >
      <Logo />
      <SearchButton />
    </Container>
  );
}
