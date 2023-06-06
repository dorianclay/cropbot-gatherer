import { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Cropbot Harvester",
  description: "Cropbot is an automatic image cropping tool.",
};

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
      {/* <div className="text-3xl font-bold">
        <h1>Cropbot Harvester 🚜</h1>
        <Link href="/gather">
          <button>Gather Data</button>
        </Link>
      </div> */}
    </>
  );
}
