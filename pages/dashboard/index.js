import Protected from "@/components/Protected";
import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
      <Protected>
        <div className="h-screen">
          <div className="flex items-center px-6 py-5 bg-[#f8f4f3] shadow-md">
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
              <button className="px-2 py-1 ml-auto text-white rounded-lg bg-stoop-green">Add</button>
            </div>
          </div>
        </div>

      </Protected >
    </>
  );
}