export default function detailNotes({ data }) {
  const { title, description } = data.data;

  return (
    <div>
      <p>title : {title}</p>
      <p>desc : {description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://service.pace-unv.cloud/api/notes");
  const data = await res.json();

  const paths = data.data.map(({ id }) => ({
    params: {
      id: id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { id } = ctx.params;

  const res = await fetch(`https://service.pace-unv.cloud/api/notes/${id}`);
  const data = await res.json();

  return { props: { data }, revalidate: 5 };
}
