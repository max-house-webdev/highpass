import { Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import { Header } from "@components/layouts/Header";

export function Layout() {
  return (
    <>
      <Header />
      <Box as={"main"}>
        <Outlet />
      </Box>
    </>
  );
}
