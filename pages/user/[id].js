import Layout from "@/layout";
import { useRouter } from "next/router";

export default function getNameId() {

    const router = useRouter();

    const id = router?.query.id

    return <Layout>
        <h1>New Data with {id}</h1>
    </Layout>
 }