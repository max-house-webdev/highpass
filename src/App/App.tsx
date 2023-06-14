import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@core/theme";
import { Router } from "@src/Router";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}
