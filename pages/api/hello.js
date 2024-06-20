// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

export default async function getApi(req, res) {
  let response = await (
    await fetch("https://jsonplaceholder.typicode.com/todos")
  ).json();

  let title = response.map((item) => item.title);

  res.status(200).json({ title });
}
