import Protected from "@/components/Protected";
import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

import { MdHome } from "react-icons/md";

export default function Dashboard() {

  return (
    <>

      <Protected>
        <div className="h-screen p-16">
          <div className="flex items-center">
            <h1 className="mr-auto text-4xl font-kyiv">Dashboard</h1>
            <MdHome size={30} />
            <FaSignOutAlt size={30} className="ml-3 text-red-500 hover:cursor-pointer" onClick={() => {
              signOut();
            }} />
            
          </div>
        </div>

      </Protected >
    </>
  );
}