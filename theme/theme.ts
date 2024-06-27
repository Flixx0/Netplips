import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: { 0: "#000000", brand: "#221F1F" },
  white: "#FFFFFF",
};

export const theme = extendTheme({
  colors,
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black.brand",
        color: "white",
      },
    },
  },
});
