import { Heading } from "@chakra-ui/react";
import Head from "next/head";

const Menu = () => {
  return (
    <>
      <Head>
        <title>La Voluntad - menu</title>
        <meta
          name="description"
          content="Encontrá todos los platos que tenemos para ofrecerte. La Voluntad bakery bistro café San Isidro"
        />
        <meta
          property="og:title"
          content="La Voluntad bakery bistro café San Isidro"
        />
      </Head>
      <Heading size={"lg"}>MENU</Heading>
      <iframe
        src="https://www.monline.com.ar/LaVoluntad"
        width={"100%"}
        height="9340.65 px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          border: 0,
          height: "9340.65 px",
        }}
      ></iframe>
      https://www.monline.com.ar/LaVoluntad
    </>
  );
};

export default Menu;
