import type { LinksFunction } from "remix";
import { Meta, Links, Scripts, LiveReload, useCatch } from "remix";
import { Outlet, useLocation } from "react-router-dom";

import stylesUrl from "./styles/globals.css";
import {
  ChakraProvider,
  ColorMode,
  Flex,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { useEffect } from "react";

import Nprogress from "nprogress";

import stylesUrl2 from "nprogress/nprogress.css";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: stylesUrl2 },
  ];
};

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
const queryClient = new QueryClient();

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
    useEffect(() => {
    Nprogress.done();

    return () => {
      Nprogress.start();
    };
  }, [location.pathname]);

  return (
    <Document>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Flex justifyContent="flex-end">
            <ColorModeSwitcher />
          </Flex>
          <Outlet />
        </ChakraProvider>
      </QueryClientProvider>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Flex justifyContent="flex-end">
            <ColorModeSwitcher />
          </Flex>
          <Stack alignItems="center">
            <Heading>App Error</Heading>
            <Text>Page you are looking for could not be found</Text>
          </Stack>
        </ChakraProvider>
      </QueryClientProvider>
    </Document>
  );
}
