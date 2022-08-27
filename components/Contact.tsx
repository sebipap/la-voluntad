import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=%2B5491130834799&text&type=phone_number&app_absent=0";

const Contact = () => {
  return (
    <Box p={"16px"} width={"100%"}>
      <Heading size={"lg"} mb={"60px"} textAlign={"center"}>
        Contacto
      </Heading>
      <Box
        borderRadius={"10px"}
        borderWidth={"2px"}
        borderColor={"black"}
        p={"20px"}
        alignItems={"flex-start"}
      >
        <Heading size={"md"} textAlign={"left"}>
          Whatsapp
        </Heading>

        <Text>
          {" "}
          Contactate con nosotros haciendo click{" "}
          <Link color="teal.500" href={whatsappLink} target="_blank">
            acá.
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
