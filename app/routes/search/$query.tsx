import { Box } from "@chakra-ui/layout";

import { LoaderFunction, useLoaderData } from "remix";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchResult from "../../components/SearchResult";
import Search from "./../../components/Search";
import { host } from "../../../util";
import { MetaFunction, json } from "remix";

import fetch from "node-fetch";

interface Props {
  data: any;
}

export let meta: MetaFunction = () => {
  return {
    title: "UNPKG Search",
    description: "Search for packages on UNPKG",
    keywords: "unpkg search, unpkg, search, CDN, npm, github, package search,",
  };
};

export default function Query() {
  const data = useLoaderData();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const [search, setSearch] = useState<string>(query);
  useEffect(() => {
    let query = searchParams.get("query") || "";

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
        "accept-encoding": "gzip",
      },
    }
  );
  console.log({res})
  const data = await res.json();
  const pathPromises = [];
  for (const result of data.objects) {
    pathPromises.push(getPackagePath(result.package.name));
  }
  const results = await Promise.all(pathPromises);

  for (let i = 0; i < data.objects.length; i++) {
    data.objects[i].package.cdnLink = results[i];
  }
 
  return  json(data)

};

async function getPackagePath(packagename: string) {
  const res = await fetch(`https://unpkg.com/${packagename}`, {
    redirect: "follow",
    method: "HEAD",
    headers: {
      "accept-encoding": "gzip",
    },
  });

  return res.url;
}
