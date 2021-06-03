import { Badge } from "@chakra-ui/layout";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  item: string;
}

export default function Keyword({ item }: Props): ReactElement {
  return (
    <Link href={`/search/keywords:${item}`}>
      <a>
        <Badge
          colorScheme="purple"
          p="1"
          m="1"
          borderRadius="10"
          cursor="pointer"
        >
          {item}
        </Badge>
      </a>
    </Link>
  );
}
