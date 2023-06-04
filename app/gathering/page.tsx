import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import NavBar from "../../components/navBar/navBar";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <NavBar />
      <Layout>
        <h1>First Post</h1>
        <Image
          src="/images/jusfilm-f6HiXy8Gu-I-unsplash.jpg"
          height={2400 / 3}
          width={1920 / 3}
          alt="Image of a hand squeezing a lime over a cocktail"
        />
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
