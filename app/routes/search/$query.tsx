import { Box } from '@chakra-ui/layout';

import {
  LoaderFunction, useLoaderData, MetaFunction, json, useNavigate, useSearchParams
} from 'remix';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import SearchResult from '../../components/SearchResult';
import Search from '../../components/Search';

export const meta: MetaFunction = () => ({
  title: 'UNPKG Search',
  description: 'Search for packages on UNPKG',
  keywords: 'unpkg search, unpkg, search, CDN, npm, github, package search,',
});

export function headers() {
  return {
    'cache-control': 'max-age=604800, stale-while-revalidate=86400',
  };
}

export default function Query() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const [search, setSearch] = useState<string>(query);
  useEffect(() => {
    const query = searchParams.get('query') || '';

    setSearch(query);
  }, [searchParams]);

  return (
    <div>
      <Box m="4" w="calc(100% - 30px)">
        <Search
          value={search}
          onChange={(value) => setSearch(value)}
          onSubmit={() => navigate(`/search/${search}`)}
        />
      </Box>

      {Array.from(data.objects).map((datum: any) => {
        const {
          name,
          description,
          version,
          keywords,
          author,
          publisher,
          maintainers,
          cdnLink,
        } = datum.package;
        return (
          <SearchResult
            key={name}
            cdnLink={cdnLink}
            name={name}
            description={description}
            version={version}
            keywords={keywords}
            author={author}
            publisher={publisher}
            maintainers={maintainers}
          />
        );
      })}
    </div>
  );
}

export const loader: LoaderFunction = async ({ params }) => {
  const { query } = params;

  const res = await fetch(
    `https://registry.npmjs.com/-/v1/search?text=${query}&size=5`,
    {
      headers: {
        'accept-encoding': 'gzip',
      },
    },
  );
  const data = await res.json();
  const pathPromises = [];
  for (const result of data.objects) {
    pathPromises.push(getPackagePath(result.package.name));
  }
  const results = await Promise.all(pathPromises);

  for (let i = 0; i < data.objects.length; i++) {
    data.objects[i].package.cdnLink = results[i];
  }

  return json(data);
};

async function getPackagePath(packagename: string) {
  const res = await fetch(`https://unpkg.com/${packagename}`, {
    redirect: 'follow',
    method: 'HEAD',
    headers: {
      'accept-encoding': 'gzip',
    },
  });

  return res.url;
}
