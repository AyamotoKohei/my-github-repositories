import Head from "next/head";

export const Home = ({ repos }) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <ul>
        {repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.github.com/users/AyamotoKohei/repos`
  );
  const repos = await response.json();
  return { props: { repos } };
}

export default Home;
