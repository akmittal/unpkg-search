import {
  Box, Flex, Heading, HStack, Link, VStack,
} from '@chakra-ui/layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Select } from '@chakra-ui/select';
import { Button } from '@chakra-ui/button';
import { MdContentCopy } from 'react-icons/md';
import { Tooltip } from '@chakra-ui/tooltip';
import { useQuery } from 'react-query';
import {
  MetaFunction, LoaderFunction, json, useLoaderData,
} from 'remix';

import fetch from 'node-fetch';
import { copyToClipboard } from '../../../util';
import Keyword from '../../components/Keyword';
import Search from '../../components/Search';

export const meta: MetaFunction = ({ data, params }) => {
  const { name } = params;
  return {
    title: `${name} - Best place to find CDN for developers`,
    description: data.description,
    'og:image': '/logo.png',
    'theme-color': '#d9643a',
  };
};

export default function Query() {
  const initialData = useLoaderData();
  const navigate = useNavigate();
  const { name = '' } = useParams();

  const { data } = useQuery(['posts', name], getPackageInfo.bind(null, name), {
    initialData,
  });
  const [search, setSearch] = useState<string>('');
  const [version, setVersion] = useState(data['dist-tags'].latest);

  return (
    <div>
      <Box m="4" w="lg" width="calc(100% - 30px)">
        <Search
          value={search}
          onChange={(value) => setSearch(value)}
          onSubmit={() => navigate(`/search/${search}`)}
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
          rel="noreferrer"
        >
          <Button colorScheme="purple">Browse Package on UNPKG</Button>
        </a>
      </VStack>
    </div>
  );
}

interface AssetProps {
  type: string;
  data: any;
  version: string;
}

var AssetMeta = function ({ type, data, version }: AssetProps) {
  const [tooptipOpen, setTooltipOpen] = useState(false);
  return (
    <HStack>
      <Flex gridGap="2" alignItems="center" flexWrap="wrap">
        <strong>
          {type}
          :
        </strong>
        {' '}
        <Flex overflow="scroll" width="full">
          <Link
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
};

function getVersionURL(data: any, version: string, type?: string) {
  if (!type) {
    type = 'main';
  }
  return `https://unpkg.com/${data._id}@${version}/${data.versions[version][type]}`;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { name } = params;
  if (!name) {
    throw new Response('', { status: 404 });
  }
  try {
    const data = await getPackageInfo(name);
    return json(data);
  } catch (e) {
    throw new Response('', { status: 404 });
  }
};

async function getPackageInfo(packagename: string) {
  const url = `https://registry.npmjs.com/${packagename}`;
  const res = await fetch(`${url}`, {
    method: 'GET',
    headers: {
      'accept-encoding': 'gzip',
    },
  });
  const data = await res.json();
  if (data.status === 404) {
    throw new Error('package not found');
  }

  for (const key in data.versions) {
    const versionInfo = data.versions[key];
    data.versions[key] = {
      name: versionInfo.name || '',
      description: versionInfo.description || '',
      version: versionInfo.version || '',
      main: versionInfo.main || '',
      module: versionInfo.module || '',
      style: versionInfo.style || '',
    };
  }
  delete data.maintainers;
  delete data.time;
  delete data.repository;
  delete data.users;
  delete data.bugs;

  return data;
}
