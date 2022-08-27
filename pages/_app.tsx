import { ChakraProvider, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NavBar } from "./api/_navbar";

import "../styles/globals.css";
import { chakraTheme } from "../styles/chakraTheme";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  return (
    <ChakraProvider theme={chakraTheme}>
      <NavBar />
      <VStack
        px={{
          sm: "20px",
          md: "100px",
          lg: "300px",
        }}
        py={"30px"}
        spacing={"25px"}
      >
        <Component {...pageProps} />
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
