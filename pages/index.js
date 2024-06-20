import Layout from "@/layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => console.log("ini", res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Layout metaTitle="Homescreen" metaDescription="Ini adalah homescreen">
        <h1>Home</h1>
      </Layout>
    </>
  );
}
