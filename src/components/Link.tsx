import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

type Props = {
  src: string;
  text: string;
};

export const Link = ({ src, text }: Props) => (
  <ChakraLink as={NextLink} href={src}>
    {text}
  </ChakraLink>
);
