import { Badge, Box, Flex, Heading } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import Link from "next/link";
import { Button, IconButton } from "@chakra-ui/button";
import { CopyIcon } from "@chakra-ui/icons";
import {Link as ChakraLink} from "@chakra-ui/react"

interface Props {
  name: string;
  version: string;
  description: string;
  keywords?: string[];
  author?: Author;
  publisher?: Person;
  maintainers?: Person[];
  cdnLink: string;
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
  cdnLink,
}: Props): ReactElement {
  return (
    <Box p="5" borderBottom="1px" borderColor="whiteAlpha.400" m="2">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Heading size="lg">{name}</Heading>
          <Heading size="xs">{description}</Heading>
         
          <Box>
          <strong>v{version} URL: </strong>
            <ChakraLink href={cdnLink} target="_blank" px="1">
              { cdnLink}
            </ChakraLink>
            <IconButton
              mx="2"
              aria-label="Copy CDN path"
              title="Copy CDN Path"
              icon={<CopyIcon />}
              onClick={() => copyToClipboard(cdnLink)}
            />
          </Box>
          <Box my="2">
          <a href={`https://unpkg.com/${name}/`} target="_blank" >
            <Button colorScheme="purple">Browse Files</Button>
          </a>
        </Box>

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
        
      </Flex>
    </Box>
  );
}

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
