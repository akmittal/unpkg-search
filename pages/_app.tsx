import "../styles/globals.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import { useRef } from "react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import Navbar from "../components/Navbar";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    
        <ChakraProvider theme={theme}>
          <Navbar />
          <Flex justifyContent="flex-end"><ColorModeSwitcher /></Flex>
          <Component {...pageProps} />
        </ChakraProvider>
  );
}

export default MyApp;
