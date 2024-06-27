import { Link } from "@/components/Link";
import { LOGO } from "@/constants/images";
import { Flex, IconButton, Image } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  //
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      paddingY={5}
      paddingX={7}
    >
      <Flex gap={5} alignItems="center">
        <Image src={LOGO} alt="Netplips" width="100px" objectFit="contain" />
        <Link src="/" text="Accueil" />
        <Link src="" text="Series" />
        <Link src="/films" text="Films" />
      </Flex>
      <IconButton aria-label="Search" icon={<FiSearch />} variant="none" />
    </Flex>
  );
};
