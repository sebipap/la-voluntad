import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Contact from "../components/Contact";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Locations from "../components/Location";
import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Logo />
      <Gallery />
      <Locations />
      <Contact />
    </>
  );
};

export default Home;
