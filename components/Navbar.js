import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter();
  const { status } = useSession();
  return (
    <div className="flex item-center">
      <button className="mr-auto text-6xl md:text-2xl font-miama" onClick={() => router.push("/")}>STOOP SALE</button>
      <button className="mr-10 md:text-xs text-[#969696] hover:underline hover:text-[#4E4E4E] focus:text-[#4E4E4E] focus:underline" onClick={() => router.push("/dashboard")}>{status === "unauthenticated" ? "Sign In" : "Dashboard"}</button>
      {/* <button className="px-4 py-2 text-white rounded-md bg-stoop-green font-old hover:bg-[#9BAC97] hover:ring-green-900">RSVP</button> */}
    </div>
  );
}
export default Navbar;