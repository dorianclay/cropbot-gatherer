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
