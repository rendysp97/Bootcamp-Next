import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const NewLayout = dynamic(() => import("@/layout"));

export default function Home() {
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => console.log("ini", res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NewLayout metaTitle="Homescreen" metaDescription="Ini adalah homescreen">
        <h1>Home</h1>
      </NewLayout>
      {/* <Image src="/next.png" width={300} height={300} alt="images" />
      <img  src="/next.png" width={300} height={300} alt="Images"/> */}
    </>
  );
}
