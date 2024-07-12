import Navbar from "@/components/Navbar";
import Protected from "@/components/Protected";
import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import AddItem from "@/components/modals/AddItemModal";

export default function Dashboard() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex-col justify-between min-h-screen"
    >
      <AddItem isOpen={isOpen} setIsOpen={setIsOpen} />

      <Protected>
        <div className="p-16">
          <div className="flex items-center">
            <h1 className="mr-auto text-4xl font-kyiv">Dashboard</h1>
            <MdHome size={30} className="hover:cursor-pointer" onClick={() => router.push("/")} />
            <FaSignOutAlt size={30} className="ml-3 text-red-500 hover:cursor-pointer" onClick={() => {
              signOut();
            }} />
          </div>
          <div className="flex items-start">
            <div className="h-screen font-old text-2xl p-10 bg-[#f8f4f3] drop-shadow-xl">
              Inventory
            </div>
            <div className="flex items-center w-full p-12 font-kyiv">
              <h1 className="mr-auto text-xl">Items (0)</h1>
              <button className="px-2 py-1 ml-auto text-white rounded-lg bg-stoop-green" onClick={() => setIsOpen(true)}>Add</button>
            </div>
          </div>
        </div>

      </Protected >
    </div>
  );
}