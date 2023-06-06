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
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col justify-center text-3xl font-bold h-[85vh] px-4">
        <div className="flex justify-center text-center py-5">
          Cropbot is an automatic image cropping tool.
        </div>
        <div className="flex justify-center text-center py-5">
          Help gather data today!
        </div>
        <Link href="/gather" className="py-5 flex justify-center">
          <button className="rounded-full bg-purple-400 w-52 h-12 text-2xl font-semibold hover:drop-shadow-2xl hover:scale-110 ease-in-out duration-150">
            Gather Data
          </button>
        </Link>
      </div>
    </div>
  );
}
