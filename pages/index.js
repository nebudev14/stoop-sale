import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Catalog from "@/components/Catalog";
import EnvScroll from "@/components/EnvScroll";
import { motion, Varients, useScroll, useTransform } from "framer-motion";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen md:h-screen center-text">
        <div className="absolute -z-150">
            <video className="object-fill w-screen h-screen md:object-cover md:-x-24" autoPlay muted loop>
              <source src="http://localhost:3000/stoop-sale-landing.mp4" className="w-screen" type="video/mp4" />
            </video>
        </div>
        <div className="absolute -z-100">
          <EnvScroll number={"1"}/>
        </div>
        <div className="relative p-16 -z-120 md:p-12">

          <motion.span className="relative inline-block mt-16 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-stoop-green"
                        animate={{y: -10, x: 0}}
                        initial={{scale: 1, y:-400, x:-20}}
                        whileInView={{
                            y: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8,
                            },
                        }
            }>
            <motion.span className="relative text-white font-miama text-8xl md:text-6xl ">Chelsea & Lil</motion.span>
          </motion.span>
          <motion.h4 className="ml-auto mr-0 text-3xl text-white -rotate-2">invite you to their</motion.h4>
          <motion.h4 className="asbolute mt-44 ml-72 font-miama text-9xl md:text-6xl md:ml-24 md:mt-52 -rotate-6 "
                    animate={{y: 0, x: 0, scale: 1, rotate:-8}}
                    initial={{scale: 4, y:-400, x:400, rotate:-2}}
                    whileInView={{
                        transition: {
                            type: "stiffness",
                            bounce: 0.4,
                            duration: 0.8,
                            delay: 0.2
                        },
                    }
                  }
          >Stoop Sale</motion.h4>
        </div>

      </div>
   

    <main
      className={` min-h-screen flex-col justify-between p-16 ${inter.className}`}
    >
        <div className="grid justify-center my-10">
          <button className="px-12 py-2 text-6xl text-white rounded-3xl bg-stoop-green font-old hover:bg-[#9BAC97] hover:ring-green-900 mb-2">RSVP</button>
          <span>&#128205; Carroll Gardens (Court Street & 2nd Pl, Brooklyn)</span>
          <span>&#128198; July 29, 2024 @ 12 P.M.</span>
        </div>


        <Navbar className="flex items-center" />
        <Catalog />
      </main>
    </>
  );
}
