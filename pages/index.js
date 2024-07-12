import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Catalog from "@/components/Catalog";
// import { motion, Varients } from "framer-motion"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col justify-between p-16 ${inter.className}`}
    >
      <video className="w-screen h-screen" muted>
        <source src="http://localhost:3000/stoop-sale-landing.mp4" type="video/mp4" />
      </video>

      <button className="px-12 py-2 text-6xl text-white rounded-md bg-stoop-green font-old hover:bg-[#9BAC97] hover:ring-green-900 ml-auto">RSVP</button>

      <Navbar className="flex items-center"/>
      <Catalog />
    </main>
  );
}
