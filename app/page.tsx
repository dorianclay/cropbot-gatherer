import Head from "next/head";
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
      <Head>
        <title>CropBot Harvester</title>
      </Head>
      <body>
        <div className={styles.container}>
          <h1>Cropbot Harvester 🚜</h1>
          <Link href="/gathering">
            <button>Gather Data</button>
          </Link>
        </div>
      </body>
    </>
  );
}
