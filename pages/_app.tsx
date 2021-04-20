import "../styles/globals.css";
import { ChakraProvider, ColorMode, Flex } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

import Head from "next/head";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import Navbar from "../components/Navbar";

const defaultMode: ColorMode = "dark";

const config = {
  initialColorMode: defaultMode,
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors, config });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4VP66JXRFK"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4VP66JXRFK');
        `,
          }}
        />
      </Head>
      <Navbar />
      <Flex justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
