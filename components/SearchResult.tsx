import { Badge, Box, Heading } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {
  name: string;
  version: string;
  description: string;
  keywords?: string[];
  author?: Author;
  publisher?: Person;
  maintainers?: Person[];
}
interface Author extends WithEmail {
  name: string;
}
interface WithEmail {
  email: string;
}
interface Person extends WithEmail {
  username: string;
}

export default function SearchResult({
  name,
  description,
  version,
  keywords,
}: Props): ReactElement {
  return (
    <Box p="5" borderBottom="1px" m="2">
      <Heading size="lg">{name}</Heading>
      <Heading size="xs">{description}</Heading>
      <Box>{version}</Box>
      {keywords?.map((item) => (
        <Link href={`/search/keywords:${item}`}>
          <Badge
            colorScheme="purple"
            p="1"
            m="1"
            borderRadius="10"
            cursor="pointer"
          >
            {item}
          </Badge>
        </Link>
      ))}
    </Box>
  );
}
