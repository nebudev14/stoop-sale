import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Catalog from "@/components/Catalog";
import EnvScroll from "@/components/EnvScroll";
import { motion, Varients, useScroll, useTransform } from "framer-motion";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GoogleMapComponent from '@/components/GoogleMap';


const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { inventory } = props;
  const [isOpen, setIsOpen] = useState(false); // Tracks state of map modal

  return (
    <>
      {/* Maps Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                    <GoogleMapComponent />
                    <div className="p-4">
                      <h1 className="mb-2 text-xl font-bold underline font-kyiv">Chelsea & Lil's Stoop Sale</h1>
                      <p className="mb-2 text-gray-600">
                        <span className="inline-block mr-1">📍</span>
                        Court Street & 2nd Pl, Brooklyn</p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


      <div className="relative w-screen h-screen md:h-screen center-text">
        <div className="absolute -z-150">
          <video className="object-fill w-screen h-screen md:object-cover" autoPlay muted loop>
            <source src="https://stoop-sale-plum.vercel.app/stoop-sale-landing.mp4" className="w-screen" type="video/mp4" />
          </video>
        </div>
        <div className="absolute -z-100">
          <EnvScroll number={"1"} />
        </div>
        <div className="relative p-16 -z-120 md:p-12">

          <motion.span className="relative inline-block mt-16 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-stoop-green"
            animate={{ y: -10, x: 0 }}
            initial={{ scale: 1, y: -400, x: -20 }}
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
          <motion.h4 className="mt-28 asbolute ml-72 font-miama text-9xl md:text-6xl md:ml-24 md:mt-52 -rotate-6 "
            animate={{ y: 0, x: 0, scale: 1, rotate: -8 }}
            initial={{ scale: 4, y: -400, x: 400, rotate: -2 }}
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
          <motion.div className="grid justify-center my-10 mt-24 mr-72 -rotate-12" animate={{ y: 0, x: 0, scale: 1, rotate: -8 }}
            initial={{ scale: 4, y: -400, x: 400, rotate: -2 }}
            whileInView={{
              transition: {
                type: "stiffness",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.2
              },
            }}>
            <button className="px-12 py-2 text-6xl text-white rounded-md bg-stoop-green font-old hover:bg-[#9BAC97] hover:ring-green-900 mb-2">RSVP</button>
            <div className="p-2 bg-white rounded-xl font-old">
              <span onClick={() => setIsOpen(true)} className="underline duration-200 hover:cursor-pointer hover:text-stoop-green">&#128205; Carroll Gardens (Court Street & 2nd Pl, Brooklyn)</span>
              <br />
              <span>&#128198; July 29, 2024 @ 12 P.M.</span>
            </div>
          </motion.div>

        </div>
      </div>
      <main
        className={` min-h-screen flex-col justify-between p-16 ${inter.className}`}
      >

        <Navbar className="flex items-center" />
        <Catalog items={inventory.items} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();

  const inventory = await prisma.invetory.findFirst({
    include: {
      items: true
    }
  });

  await prisma.$disconnect();


  return {
    props: {
      inventory: inventory
    }
  }

}