import { TimeIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

const LOCATIONS = [
  {
    name: "Del Bajo",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.604232731149!2d-58.51078848433841!3d-34.46219298049632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb17c14de77e1%3A0x2685861c972fa39a!2sLa%20Voluntad*2ACaf%C3%A9*2ABakery*2ABistr%C3%B3!5e0!3m2!1ses-419!2sar!4v1661207016839!5m2!1ses-419!2sar",
    schedule: "Martes a Domingos de 8:00 a 20:00",
    address: "Primera Junta 1002, San Isidro, Buenos Aires",
    image: "/locations-delbajo.jpeg",
  },
  {
    name: "Del Alto",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.33774214823!2d-58.51563916880362!3d-34.46895541810666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb089b20e21d%3A0xe2332821825bbd2d!2sLA%20VOLUNTAD%20S.I%20alto!5e0!3m2!1ses-419!2sar!4v1661206946225!5m2!1ses-419!2sar",
    schedule: "Martes a Domingos de 8:00 a 20:00",
    address: "9 de Julio 932, San Isidro, Buenos Aires",
    image: "/locations-delalto.jpeg",
  },
  {
    name: "Predio La Rural",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.8469299136461!2d-58.421120398861184!3d-34.57987579324726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59cd6452553%3A0x6b521307d135059a!2sLa%20Rural!5e0!3m2!1ses-419!2sar!4v1661207180470!5m2!1ses-419!2sar",
    schedule: "Abierto durante exposiciones feriales",
    address: "Predio La Rural, Av. Sarmiento 2704, Capital Federal",
    image: "/locations-larural.jpeg",
  },
];
const LocationOld = () => {
  return (
    <Box p={"16px"} width={"100%"}>
      <Heading size={"lg"} mb={"20px"}>
        Ubicación
      </Heading>

      <Tabs isFitted>
        <TabList>
          {LOCATIONS.map(({ name }) => (
            <Tab key={name}>{name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {LOCATIONS.map(({ name, googleMapsUrl, address, schedule }) => (
            <TabPanel key={name}>
              <HStack
                p={"10px"}
                borderWidth="1px"
                my={"10px"}
                borderRadius={"5px"}
              >
                <TimeIcon />
                <Text>{schedule}</Text>
              </HStack>
              <Box
                borderWidth="1px"
                my={"10px"}
                borderRadius={"5px"}
                bg={"#f1f3f4"}
              >
                <Text m={"20px"} fontWeight={500}>
                  {address}
                </Text>
                <iframe
                  src={googleMapsUrl}
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width={"100%"}
                  height={"500px"}
                ></iframe>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const Location = () => {
  return (
    <Box p={"16px"} width={"100%"}>
      <Heading size={"lg"} mb={"60px"} textAlign={"center"}>
        Locales
      </Heading>

      <SimpleGrid
        columns={{
          md: 2,
          sm: 1,
        }}
        spacing={"50px"}
      >
        {LOCATIONS.map(({ name, address, googleMapsUrl, schedule, image }) => (
          <VStack key={name}>
            <Image
              borderRadius="md"
              src={image}
              w={"100%"}
              h={"300px"}
              fit="cover"
            />

            <VStack spacing={"16px"}>
              <Text
                mt={2}
                fontSize="xl"
                fontWeight="semibold"
                lineHeight="short"
              >
                LV {name}
              </Text>
              <Text ml={1} fontSize="sm">
                <b>{address}</b>
              </Text>
              <HStack>
                <TimeIcon />
                <Text>{schedule}</Text>
              </HStack>
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Location;
