import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Search from "./../components/Search";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>UNPKG Search</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Search for cdn URL from unpkg CDN" />
        <meta name="keywords" content="unpkg, search, cdn, npm, github, package search,unpkh search" />
      </Head>
      

      <main className={styles.main}>
        <Search
        onSubmit={() =>   router.push(`/search/${search}`)}
          value={search}
          onChange={(value) => {
            setSearch(value);
          }}
        />
      </main>

    </div>
  );
}
