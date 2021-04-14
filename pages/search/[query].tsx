import { Spinner } from "@chakra-ui/spinner";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
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
  // const {data, isLoading, error} = useQuery("search", () => {
  //   return fetch(`https://api.npms.io/v2/search?q=${query}`).then(res => res.json());
  // })
  // if(isLoading)
  //   return <Spinner />
  // if(error)
  //   return <div>Error</div>
  return (
    <div>
      <Search
        value={search}
        onChange={(value) => setSearch(value)}
        onSubmit={() => router.push(`/search/${search}`)}
      />
      {/* {JSON.stringify(data.results)} */}
      {Array.from(data.results).map((datum: any) => {
        const { name, description, version, keywords, author, publisher, maintainers } = datum.package;
        return (
          <SearchResult
            name={name}
            description={description}
            version={version}
            keywords={keywords}
            author={author}
             publisher={publisher} maintainers={maintainers}
          />
        );
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context.params;
  console.log(query);
  const res = await fetch(`https://api.npms.io/v2/search?q=${query}`);
  const json = await res.json();
  return {
    props: { data: json },
  };
};
