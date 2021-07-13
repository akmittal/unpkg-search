import { Flex } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(): ReactElement {
  return (
    <Flex>
      <Link href="/" passHref={true} >
        <Flex p="2" justifyContent="center" width="full" cursor="pointer">
          <Image
            src="/logo.png"
            width="500px"
            height="200px"
            objectFit="contain"
            alt="unpkg search Logo"
          />
        </Flex>
      </Link>
    </Flex>
  );
}
