import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

const images = [0, 1, 2, 3, 4, 5].map((number) => ({
  original: `/gallery/${number}.jpg`,
  originalHeight: 200,
}));

const Gallery = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (counter >= images.length - 1) {
        setCounter(1);
      } else {
        setCounter((prevValue) => prevValue + 1);
      }
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return (
    // image gallery
    <Box w={"100%"} h={"600px"}>
      <Image
        src={images[counter]?.original}
        w={"100%"}
        h={"600px"}
        fit="cover"
        placeholder="blur"
        alt=""
      />
      <Heading
        position={"absolute"}
        color={"white"}
        textShadow={"dark-lg"}
        top={"100px"}
        left={"100px"}
      >
        LA VOLUNTAD
      </Heading>
    </Box>
  );
};

export default Gallery;
