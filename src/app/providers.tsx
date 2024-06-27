"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme/theme";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
