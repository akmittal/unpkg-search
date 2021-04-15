import { Flex } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(): ReactElement {
  return (
    <Flex>
      <Link href="/" >
        <Flex p="2" justifyContent="center" width="full" cursor="pointer">
          <Image
            src="/logo.png"
            width="400px"
            height="auto"
            alt="unpkg search Logo"
          />
        </Flex>
      </Link>
    </Flex>
  );
}
