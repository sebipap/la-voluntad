import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { compliment, getPalette } from "../../lib/color";

type Props = {
  title: string;
  body: string;
  imageUrl: string;
  imageSide: "left" | "right";
};

export const Announcement = ({ title, body, imageUrl, imageSide }: Props) => (
  <></>
);

// export const Announcement = ({ title, body, imageUrl, imageSide }: Props) => {
//   const [pallette, setPellette] = useState<string[]>([]);

//   useEffect(() => {
//     async function getPaletteAsync() {
//       const pallette: number[][] = (await getPalette(
//         imageUrl,
//         2
//       )) as number[][];

//       setPellette(pallette.map(([r, g, b]) => `rgb(${r}, ${g}, ${b})`));
//     }
//     getPaletteAsync();
//   }, [imageUrl]);

//   const [_, secondaryColor] = pallette;

//   const mainColor = compliment(secondaryColor);

//   const id = title
//     .split("")
//     .map((letter) => {
//       if (
//         letter == "a" ||
//         letter == "e" ||
//         letter == "i" ||
//         letter == "o" ||
//         letter == "u"
//       ) {
//         return letter;
//       }
//     })
//     .join("");

//   const buttonStyle = `.${id}-btn button {
//     background: ${secondaryColor} !important;
//     color: ${mainColor} !important;
//     }`;

//   return (
//     <SimpleGrid
//       columns={{
//         base: 1,
//         md: 2,
//       }}
//       spacing={0}
//       flexDirection={imageSide === "right" ? "row-reverse" : "row"}
//     >
//       <style>{buttonStyle}</style>
//       <VStack
//         bg={secondaryColor}
//         p={"35px"}
//         alignItems={"center"}
//         spacing={"20px"}
//         style={{
//           height: "500px",
//         }}
//         justify={"center"}
//       >
//         <Heading size={"lg"} textAlign={"center"} color={mainColor}>
//           {title}
//         </Heading>
//         <Text fontSize={"md"} textAlign={"center"} color={mainColor}>
//           {body}
//         </Text>
//         <Button bg={mainColor} color={secondaryColor} className={`${id}-btn`}>
//           Learn More
//         </Button>
//       </VStack>
//       <Box
//         style={{
//           height: "500px",
//         }}
//       >
//         <img
//           style={{ height: "100%", width: "100%", objectFit: "cover" }}
//           src={imageUrl}
//           alt="alfajor"
//         />
//       </Box>
//     </SimpleGr
