import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Contact from "../components/contact";
import Gallery from "../components/Gallery";
import Location from "../components/Location";

const Home: NextPage = () => {
  return (
    <>
      <Gallery />
      <Location />
      <Contact />
    </>
  );
};

export default Home;
