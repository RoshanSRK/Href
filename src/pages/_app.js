import { MantineProvider, ColorSchemeProvider, Container } from "@mantine/core";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // states for theme
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          {" "} 
          <Head>
            <meta charSet="utf-8" />
            <link
              rel="icon"
              href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😀</text></svg>"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="description" content="description of website here" />
            <title>href</title>
          </Head>
          <Container>
            <Component {...pageProps} />
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
