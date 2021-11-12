import { Box, Flex } from "@chakra-ui/layout";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Navbar(): ReactElement {
  return (
    <Flex justifyContent="center">
      <Link to="/">
        <Flex p="2"  width="full" cursor="pointer">
          <Box>
          <img
            src="/logo.png"
            width="500px"
            height="200px"
            alt="unpkg search Logo"
          />
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
}
