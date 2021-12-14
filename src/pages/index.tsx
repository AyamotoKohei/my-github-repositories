import Head from "next/head";
import Repositries from "../components/organisms/Repositries";

export const Home = ({ repos }) => {
  return (
    <div>
      <Head>
        <title>GitHub Repositories</title>
      </Head>
      <h1>AyamotoKohei GitHub Repositories</h1>
      <Repositries repos={repos} />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.github.com/users/AyamotoKohei/repos`
  );
  const repos = await response.json();

  return { props: { repos } };
};

export default Home;
