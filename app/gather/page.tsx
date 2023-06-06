import Link from "next/link";
import Image from "next/image";
import NavBar from "../../components/navBar/navBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gathering",
  description: "Help Cropbot gather data",
};

export default function FirstPost() {
  return (
    <>
      <NavBar />
      <h1>Gathering</h1>
      <Image
        src="/images/jusfilm-f6HiXy8Gu-I-unsplash.jpg"
        height={2400 / 3}
        width={1920 / 3}
        alt="Image of a hand squeezing a lime over a cocktail"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
