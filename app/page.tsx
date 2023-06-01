import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <head>
        <title>CropBot Harvester</title>
      </head>
      <body>
        <h1>My app</h1>
        <Link href="/posts">First post</Link>
      </body>
    </>
  );
}
