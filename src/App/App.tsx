import { ChakraProvider } from "@chakra-ui/react";

import { Fonts } from "@components/global/Fonts";
import { Router } from "@components/global/Router";
import { theme } from "@core/theme";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router />
    </ChakraProvider>
  );
}
