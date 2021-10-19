import { Flex, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import KeywordCard from "../components/KeywordCard";
import styles from "../styles/Home.module.css";
import Search from "./../components/Search";
import { FaCode, FaTerminal, FaCheck, FaMobile, FaRobot, FaSquare, FaCss3, FaServer, FaFile, FaNetworkWired, FaShieldAlt, FaCrop ,FaSquareRootAlt} from "react-icons/fa";

const discover = [
  { icon: FaCode, label: "Front End", keyword: "front-end" },
  { icon: FaServer, label: "Back End", keyword: "backend" },
  { icon: FaTerminal, label: "CLI", keyword: "cli" },
  { icon: FaFile, label: "Documentation", keyword: "documentation" },
  { icon: FaCss3, label: "CSS", keyword: "css" },
  { icon: FaCheck, label: "Testing", keyword: "testing" },
  { icon: FaNetworkWired, label: "IoT", keyword: "iot" },
  { icon: FaShieldAlt, label: "Coverage", keyword: "coverage" },
  { icon: FaMobile, label: "Mobile", keyword: "mobile" },
  { icon: FaCrop, label: "Frameworks", keyword: "framework" },
  { icon: FaRobot, label: "Robotics", keyword: "robotics" },
  { icon: FaSquareRootAlt, label: "Math", keyword: "math" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>UNPKG Search</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Search for packages on UNPKG " />
        <meta
          name="keywords"
          content="unpkg search, unpkg, search, CDN, npm, github, package search,"
        />
      </Head>

      <main className={styles.main}>
        <Search
          onSubmit={() =>
            router.push(`/search/${search}`, undefined, { shallow: false })
          }
          value={search}
          onChange={(value) => {
            setSearch(value);
          }}
        />
       
       
      </main>
      <Heading size="lg" mb="4">Discover Packages</Heading>
      <Flex gridGap="2" direction="row" mb="4" flexWrap="wrap" justifyContent="center" width="50%" maxW="400px">
        
        {discover.map((item) => (
          
          <KeywordCard
            icon={item.icon}
            keyword={item.keyword}
            label={item.label}
          />
        ))}
      </Flex>
    </div>
  );
}
