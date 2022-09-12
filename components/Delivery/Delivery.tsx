import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Locations, { Location, LOCATIONS } from "../Location";
import PedidosYaButton from "../PedidosYaButton";

export const Delivery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        backgroundColor={"#ff6a434f"}
        width={"100%"}
        p={"100px"}
        borderRadius={"2xl"}
      >
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading> Hacé tu pedido</Heading>
            <Text>
              Si no podes venir, tranqui. Te lo llevamos con PedidosYa{" "}
            </Text>
          </Box>

          <Button colorScheme={"red"} size={"lg"} onClick={onOpen}>
            Quiero Comer!
          </Button>
        </SimpleGrid>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Pedí por delivery a cualquiera de nuestros locales!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={10}>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20}>
              {LOCATIONS.filter((location) => location.pedidosYaUrl).map(
                (location) => (
                  <Link href={location.pedidosYaUrl} key={location.name}>
                    <Button h={"550px"} variant="outline">
                      <VStack>
                        <Location
                          {...location}
                          key={location.name}
                          withPedidosYaButton={false}
                        />
                        <Button colorScheme={"red"}>
                          Pedí en La Voluntad {location.name}
                        </Button>
                      </VStack>
                    </Button>
                  </Link>
                )
              )}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
