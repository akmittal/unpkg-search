import { Box, Flex, Heading, HStack, Link, VStack } from "@chakra-ui/layout";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Search from "./../../components/Search";
import { Select } from "@chakra-ui/select";
import Keyword from "../../components/Keyword";
import { Button } from "@chakra-ui/button";
import { MdContentCopy, MdCall } from "react-icons/md";
import { copyToClipboard, host } from "../../util";
import { Tooltip } from "@chakra-ui/tooltip";
import { useQuery } from "react-query";

interface Props {
  data: any;
}

export default function Query({ data:initialData }: Props) {
 
  const router = useRouter();
  let { name } = router.query;
  
  name = Array.isArray(name) ? name[0] : name;
  const { data } = useQuery(['posts',name], getPackageInfo.bind(this,name ), { initialData })
  const [search, setSearch] = useState<string>();
  const [version, setVersion] = useState(data["dist-tags"].latest);

  return (
    <div>
      <Head>
        <title>{name} - Best place to find CDN for developers</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={data.description} />
        <meta name="theme-color" content="#d9643a"></meta>
        <meta property="og:image" content="/logo.png"></meta>
      </Head>
      <Box m="4" w="lg" width="calc(100% - 30px)">
        <Search
          value={search}
          onChange={(value) => setSearch(value)}
          onSubmit={() =>
            router.push(`/search/${search}`, undefined, { shallow: true })
          }
        />
      </Box>

      <VStack alignItems="flex-start" p="5">
        <Heading>{name}</Heading>
        <Flex>{data.description}</Flex>
        <Flex>
          <Select
            placeholder="Select version"
            onChange={(evt) => setVersion(evt.currentTarget.value)}
          >
            {Object.keys(data.versions)
              .reverse()
              .map((value) => (
                <option selected={value === version} value={value}>
                  {value}
                </option>
              ))}
          </Select>
        </Flex>
        <VStack alignItems="flex-start">
          {data.versions[version].main && (
            <AssetMeta data={data} type="main" version={version} />
          )}
          {data.versions[version].style && (
            <AssetMeta data={data} type="style" version={version} />
          )}
          {data.versions[version].module && (
            <AssetMeta data={data} type="module" version={version} />
          )}
        </VStack>
        <Flex flexWrap="wrap">
          {data.versions[version].keywords?.map((item) => (
            <Keyword item={item} />
          ))}
        </Flex>
        <a
          href={`https://unpkg.com/browse/${name}@${version}/`}
          target="_blank"
        >
          <Button colorScheme="purple">Browse Package on UNPKG</Button>
        </a>
      </VStack>
    </div>
  );
}

function AssetMeta({ type, data, version }) {
  const [tooptipOpen, setTooltipOpen] = useState(false);
  return (
    <HStack>
      <Flex gridGap="2" alignItems="center" flexWrap="wrap">
        <strong>{type}:</strong>{" "}
        <Flex overflow="scroll" width="full"><Link
          href={getVersionURL(data, version, type)}
          target="_blank"
          backgroundColor="rgba(0,0,0,0.2)"
          px="2"
          borderRadius="5"
          py="1"
        >
          {getVersionURL(data, version, type)}
        </Link>
        </Flex>
      <Tooltip label="copied" isOpen={tooptipOpen}>
        <Button
          leftIcon={<MdContentCopy />}
          variant="outline"
          size="xs"
          onClick={() => {
            copyToClipboard(getVersionURL(data, version, type));
            setTooltipOpen(true);
            setTimeout(() => {
              setTooltipOpen(false);
            }, 600);
          }}
        >
          Copy URL
        </Button>
        
      </Tooltip>
      </Flex>
    </HStack>
  );
}

function getVersionURL(data: any, version: string, type?: string) {
  if (!type) {
    type = "main";
  }
  return `https://unpkg.com/${data._id}@${version}/${data.versions[version][type]}`;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { name } = context.params;
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=5000, stale-while-revalidate=5900'
  )
  if (Array.isArray(name)) {
    name = name[0];
  }
  const data = await getPackageInfo(name);
  return {
    props: { data },
  };
};

async function getPackageInfo(packagename: string) {
  const url = encodeURIComponent(`https://registry.npmjs.com/${packagename}`);
  const res = await fetch(`${host}api/package?url=${url}`, {
    method: "GET",
    headers:{
      "accept-encoding":"gzip"
    }

  });
  const data =  await res.json();
  for(const key in data.versions){
    const versionInfo =   data.versions[key];
    data.versions[key] = {
      name: versionInfo.name||"",
      description: versionInfo.description||"",
      version: versionInfo.version||"",
      main: versionInfo.main||"",
      module: versionInfo.module||"",
      style: versionInfo.style||""
    }
  }
  delete data.maintainers
  delete data.time
  delete data.repository
  delete data.users
  delete data.bugs
 
  return data;
}
