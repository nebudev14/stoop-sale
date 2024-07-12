import Navbar from "@/components/Navbar";
import Protected from "@/components/Protected";
import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import AddItem from "@/components/modals/AddItemModal";
import { PrismaClient } from "@prisma/client";
import { GetObjectCommand, S3 } from "@aws-sdk/client-s3";
import Image from "next/image";

export default function Dashboard(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { inventory } = props;

  console.log(inventory)

  return (
    <div
      className="flex-col justify-between min-h-screen"
    >
      <AddItem isOpen={isOpen} setIsOpen={setIsOpen} />

      <Protected>
        <div className="">
          <div className="flex items-center bg-[#f8f4f3] p-16">
            <h1 className="mr-auto text-4xl font-kyiv ">Dashboard</h1>
            <MdHome size={30} className="hover:cursor-pointer" onClick={() => router.push("/")} />
            <FaSignOutAlt size={30} className="ml-3 text-red-500 hover:cursor-pointer" onClick={() => {
              signOut();
            }} />
          </div>
          <div className="flex items-start">
            <div className="h-screen font-old text-2xl p-10 bg-[#f8f4f3] drop-shadow-xl">
              Inventory
            </div>
            <div className="w-full">
              <div className="flex items-center w-full p-12 font-kyiv">
                <h1 className="mr-auto text-xl">Items ({inventory.items ? inventory.items.length : 0})</h1>
                <button className="px-2 py-1 ml-auto text-white rounded-lg outline-none bg-stoop-green" onClick={() => setIsOpen(true)}>Add</button>
              </div>
              <div className="grid grid-cols-3 gap-8 px-12">
                {inventory.items.map((item, i) => (
                  <div key={i}>
                    <Image
                      src={`https://stoop.nyc3.digitaloceanspaces.com/${item.name}/${0}`}
                      width={150}
                      height={150}
                      className="rounded-t-xl"
                    />
                    <div>
                      <h1 className=" font-kyiv">{item.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Protected >
    </div>
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