import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Catalog from "@/components/Catalog";
import EnvScroll from "@/components/EnvScroll";
import { motion, Varients } from "framer-motion"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col justify-between p-16 ${inter.className}`}
    >
      <div>
        <video className="w-screen h-screen" autoPlay muted loop>
          <source src="http://localhost:3000/stoop-sale-landing.mp4" type="video/mp4" />
        </video>

        <EnvScroll />
      </div>
     

      <div className="justify-center grid my-10">
        <button className="px-12 py-2 text-6xl text-white rounded-md bg-stoop-green font-old hover:bg-[#9BAC97] hover:ring-green-900 mb-2">RSVP</button>
        <span>&#128205; Carroll Gardens (Court Street & 2nd Pl, Brooklyn)</span>
      </div>
      

      <Navbar className="flex items-center"/>
      <Catalog />
    </main>
  );
}
