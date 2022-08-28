import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Logo />
      <Gallery />
      <Location />
      <Contact />
    </>
  );
};

export default Home;
