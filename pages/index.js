import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Catalog from "@/components/Catalog";
import { motion, Varients } from "framer-motion"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col justify-between p-16 ${inter.className}`}
    >
      <video className="w-screen h-screen" controls muted>
        <source src="./public/stoop-sale-landing.mp4" type="video/mp4" />
        <source src="./public/stoop-salelanding.webm" type="video/webm" />
      </video>
      <Navbar className="flex items-center"/>
      <Catalog />
    </main>
  );
}
