import Layout from "@/layout";
import { useRouter } from "next/router";

export default function detailDesc() {
  const router = useRouter();

  const { id } = router.query;
  return (
    <Layout>
      <h1>Detail Inside {id} </h1>
    </Layout>
  );
}
