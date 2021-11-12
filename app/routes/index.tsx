import { Flex, Heading } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import KeywordCard from "../components/KeywordCard";
import styles from "../styles/home.css";
import Search from "./../components/Search";
import {
  FaCode,
  FaTerminal,
  FaCheck,
  FaMobile,
  FaRobot,
  FaCss3,
  FaServer,
  FaFile,
  FaNetworkWired,
  FaShieldAlt,
  FaCrop,
  FaSquareRootAlt,
} from "react-icons/fa";
import type { MetaFunction, LinksFunction } from "remix";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export let meta: MetaFunction = () => {
  return {
    title: "UNPKG Search",
    description: "Search for packages on UNPKG",
    keywords: "unpkg search, unpkg, search, CDN, npm, github, package search,",
  };
};

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
  const navigate = useNavigate();

  return (
    <div className="container">
      <main className="main">
        <Search
          onSubmit={() => navigate(`/search/${search}`)}
          value={search}
          onChange={(value) => {
            setSearch(value);
          }}
        />
      </main>
      <Heading size="lg" mb="4">
        Discover Packages
      </Heading>
      <Flex
        gridGap="2"
        direction="row"
        mb="4"
        flexWrap="wrap"
        justifyContent="center"
        width="50%"
        maxW="400px"
      >
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
