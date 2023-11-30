import { Container } from "@components/global/Container";
import { NavMenu } from "@components/ui/NavMenu";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Container as={"header"}>
        <NavMenu />
      </Container>
      <Container as={"main"}>
        <Outlet />
      </Container>
    </>
  );
}
