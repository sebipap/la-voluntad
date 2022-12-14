import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import { Delivery } from "../components/Delivery/Delivery";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Locations from "../components/Location";
import { Logo } from "../components/Logo/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>La Voluntad</title>
        <meta
          name="description"
          content="La Voluntad bakery bistro café San Isidro"
        />
        <meta
          property="og:title"
          content="La Voluntad bakery bistro café San Isidro"
        />
      </Head>
      <Logo />
      <Gallery />
      <Delivery />
      <Locations />
      <Contact />
    </>
  );
};

export default Home;
