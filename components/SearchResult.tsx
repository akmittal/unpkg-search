import { Box, Flex, Heading } from "@chakra-ui/layout";
import React, { ReactElement, useState } from "react";
import Link from "next/link";
import { Button, IconButton } from "@chakra-ui/button";
import { CopyIcon } from "@chakra-ui/icons";
import { Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import Keyword from "./Keyword";
import { copyToClipboard } from "../util";

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
  const [tooltipOpen, setTooltipOpen] = useState(false)
  return (
    <Box p="5" borderBottom="1px" borderColor="whiteAlpha.400" m="2">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Link href={`/package/${encodeURIComponent(name)}`} passHref={true}>
            <ChakraLink>
              <Heading size="lg">{name}</Heading>
            </ChakraLink>
          </Link>
          <Heading size="xs">{description}</Heading>

          <Box>
            <strong>v{version} URL: </strong>
            <ChakraLink href={cdnLink} target="_blank" px="1" rel="noopener">
              {cdnLink}
            </ChakraLink>
            <Tooltip label="copied" isOpen={tooltipOpen}>
            <IconButton
              mx="2"
              aria-label="Copy CDN path"
              title="Copy CDN Path"
              icon={<CopyIcon />}
              onClick={() => { copyToClipboard(cdnLink);
              setTooltipOpen(true);
              setTimeout(() => {
                setTooltipOpen(false)
              }, 500)
              }}
            />
           </Tooltip>
          </Box>
          <Flex my="2" gridGap="2">
          <Link passHref={true} href={`/package/${name}`}><ChakraLink><Button colorScheme="purple">Open</Button></ChakraLink></Link>
            <a
              href={`https://unpkg.com/${encodeURIComponent(name)}/`}
              target="_blank"
              rel="noopener"
            >
              
              <Button colorScheme="purple">Browse Files</Button>
            </a>
          </Flex>

          {keywords?.map((item) => (
            <Keyword item={item} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
