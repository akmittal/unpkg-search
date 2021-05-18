import Icon from "@chakra-ui/icon";
import { Flex, Heading } from "@chakra-ui/layout";
import Link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  label: string;
  keyword: string;
}

export default function KeywordCard({
  icon,
  label,
  keyword,
}: Props): ReactElement {
  return (
    <Flex flex="1 0 40%" justifyContent="space-around">
    <Link href={`/search/keywords:${keyword}`}>
      <Flex p="4" border="1px solid #444" borderRadius="2" cursor="pointer" gridGap="2" _hover={{"background":"rgba(144,122,239,0.4)"}}>
        <Icon as={icon}></Icon>
        <Heading size="sm">{label}</Heading>
      </Flex>
    </Link>
    </Flex>
  );
}
