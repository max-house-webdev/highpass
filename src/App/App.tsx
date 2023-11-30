import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@core/theme";
import { Router } from "@components/global/Router";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}
