import { Text, Link, Image, VStack, Tooltip } from "@chakra-ui/react";

type Props = {
  url: string;
};

const PedidosYaButton = ({ url }: Props) => {
  return (
    <Link href={url}>
      <Tooltip label={"Pedí por PedidosYa a nuestro local!"}>
        <Image src="/ico-pedidosya.png" w={"50px "} />
      </Tooltip>
    </Link>
  );
};

export default PedidosYaButton;
