import Layout from "@/layout";

export default function posts({ data }) {
  return (
    <Layout metaTitle="Posts">
      {data.map(({ id, username }) => {
        return (
          <div key={id}>
            <p>{username}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return { props: { data } };
}
