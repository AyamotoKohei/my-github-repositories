import Head from "next/head";
import Link from "next/link";

export const Home = ({ repos }) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <Link href={`${repo.html_url}`}>{repo.name}</Link>
            </li>
          );
        })}
      </ul>
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
