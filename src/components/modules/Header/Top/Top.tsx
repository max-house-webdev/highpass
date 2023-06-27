import { Container } from "@src/components/shared/Container";
import { Logo } from "@src/components/shared/ui/links/Logo";
import { Search as SearchButton } from "@components/shared/ui/buttons/Search";

export function Top() {
  return (
    <Container
      as={"header"}
      minHeight={{ base: "70px", md: "80px" }}
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
