import Layout from "@/layout";
import Link from "next/link";


export default function notes({ data }) {
  console.log(data);
  return (
    <Layout>
      {data.data.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/notes/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </Layout>
  );
}



export async function getStaticProps() {
  const res = await fetch("https://service.pace-unv.cloud/api/notes");
  const data = await res.json();

  return { props: { data }, revalidate: 5 };
}

