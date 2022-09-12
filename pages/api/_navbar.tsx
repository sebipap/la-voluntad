import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const PAGES = [
  { name: "Home", linkTo: "/" },
  { name: "Menu", linkTo: "/menu" },
  // { name: "Anuncios", linkTo: "/news" },
];

export const NavBar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <Box
      bg={bg}
      w="full"
      px={{
        sm: "20px",
        md: "100px",
        lg: "300px",
      }}
      py={4}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <HStack display="flex" alignItems="center" spacing={5}>
            {/* <Box title="Choc Home Page" display="flex" alignItems="center">
              <Image
                src="https://d1fdloi71mui9q.cloudfront.net/qLTyeZmNR5aJEIHTobYC_3kgPcf4d0JXilk3A"
                alt="la voluntad logo"
                width={60}
                height={60}
              />{" "}
              <VisuallyHidden>Choc</VisuallyHidden>
            </Box> */}

            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              {PAGES.map(({ name, linkTo }) => (
                <Button variant="ghost" key={name}>
                  <Link href={linkTo}>{name}</Link>
                </Button>
              ))}
            </HStack>

            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                icon={<HamburgerIcon />}
                variant="ghost"
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                {PAGES.map(({ name, linkTo }) => (
                  <Button
                    w="full"
                    variant="ghost"
                    key={name}
                    fontFamily={"Gotham"}
                    fontWeight={"black"}
                  >
                    <Link href={linkTo}>{name}</Link>
                  </Button>
                ))}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
