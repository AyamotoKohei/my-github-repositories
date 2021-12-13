import useSWR from "swr";
import Head from "next/head";
import { Octokit } from "@octokit/rest";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
    </div>
  );
};

export default Home;
