import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Catalog from "@/components/Catalog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` min-h-screen flex-col justify-between p-16 ${inter.className}`}
    >
      <Navbar className="flex items-center"/>
      <Catalog />
      <Catalog />
    </main>
  );
}
