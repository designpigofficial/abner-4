import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import styles from '../../styles/Header.module.css'

import ThemeToggle from "./ThemeToggle";

const Header = () => (
  <Flex as="header" width="full" align="center">
    <Heading as="h1" size="md">
      <Link href="/">Abner Development</Link>
    </Heading>

    <Box marginLeft="auto" className={"styles.header-box"}>
      <Link href="/about" mx={7}>About</Link>
      <Link href="/services" mx={7}>Services</Link>
      <Link href="/projects" mx={7}>Projects</Link>
      <Link href="/contact"mx={7}>Contact</Link>
      <ThemeToggle />
    </Box>
  </Flex>
);

export default Header;
