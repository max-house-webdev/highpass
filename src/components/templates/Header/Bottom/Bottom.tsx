import { Container } from "@components/atoms/Container";
import { Phone as PhoneLink } from "@components/atoms/ui/links/Phone";

export function Bottom() {
  return (
    <Container as={"header"} id={"header-bottom"} variant={"headerBottom"}>
      <PhoneLink />
    </Container>
  );
}
