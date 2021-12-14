import Link from "next/link";

const Repositries = ({ repos }) => {
  return (
    <>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              <Link href={`${repo.html_url}`}>{repo.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Repositries;
