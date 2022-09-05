import { Box, Heading, Text, Link, Divider } from "@chakra-ui/react";

export const LA_VOLUNTAD_WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=%2B5491130834799&text&type=phone_number&app_absent=0";

const Contact = () => {
  return (
    <Box p={"16px"} width={"100%"}>
      <Heading size={"lg"} mb={"60px"} textAlign={"center"}>
        CONTACTO
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
          <Link
            color="teal.500"
            href={LA_VOLUNTAD_WHATSAPP_URL}
            target="_blank"
          >
            acá.
          </Link>
        </Text>
      </Box>
      <Divider />
    </Box>
  );
};

export default Contact;
