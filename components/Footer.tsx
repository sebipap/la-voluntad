import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  LA_VOLUNTAD_DEL_ALTO_PEDIDOSYA_URL,
  LA_VOLUNTAD_DEL_BAJO_PEDIDOSYA_URL,
} from "./Location";
import { LA_VOLUNTAD_WHATSAPP_URL } from "./Contact";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const LA_VOLUNTAD_INSTAGRAM_URL =
  "https://www.instagram.com/lavoluntadok/";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          spacing={8}
          columns={{
            md: 4,
            sm: 2,
          }}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Paginas</ListHeader>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/news"}>Anuncios</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Pedir</ListHeader>
            <Link href={LA_VOLUNTAD_DEL_BAJO_PEDIDOSYA_URL}>
              PedidosYa LV del Bajo
            </Link>
            <Link href={LA_VOLUNTAD_DEL_ALTO_PEDIDOSYA_URL}>
              PedidosYa LV del Alto
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contacto</ListHeader>
            <Link href={LA_VOLUNTAD_WHATSAPP_URL}>Whatsapp</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Seguinos</ListHeader>
            <Link href={LA_VOLUNTAD_INSTAGRAM_URL}>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
