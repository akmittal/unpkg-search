import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchResult from "../../components/SearchResult";
import Search from "./../../components/Search";

interface Props {
  data: any;
}

export default function Query({ data }: Props) {
  const router = useRouter();
  let { query } = router.query;
  query = Array.isArray(query) ? query[0] : query;
  const [search, setSearch] = useState<string>(query);
  useEffect(() => {
    let { query } = router.query;
    query = Array.isArray(query) ? query[0] : query;
    setSearch(query);
  }, [router.query]);

  return (
    <div>
      <Head>
        <title>UNPKG Search: {query} </title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="UNPKG package Search" />
      </Head>
      <Box m="4" w="calc(100% - 30px)" >
        <Search
          value={search}
          onChange={(value) => setSearch(value)}
          onSubmit={() =>
            router.push(`/search/${search}`, undefined, { shallow: true,  })
          }
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context.params;

  const res = await fetch(`https://registry.npmjs.com/-/v1/search?text=${query}&size=5`);
  const json = await res.json();
  const pathPromises = [];
  for (const result of json.objects) {
    pathPromises.push(getPackagePath(result.package.name));
  }
  const results = await Promise.all(pathPromises);

  for (let i = 0; i < json.objects.length; i++) {
    json.objects[i].package.cdnLink = results[i];
  }
  return {
    props: { data: json },
  };
};

async function getPackagePath(packagename: string) {
 
  const res = await fetch(`https://unpkg.com/${packagename}`, {
    redirect: "follow",
    method: "HEAD",
  });
 
  return res.url;
}
