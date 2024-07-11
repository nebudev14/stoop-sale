import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter();
  return (
    <div className="flex item-center">
      <text className="mr-auto text-6xl font-miama">STOOP SALE</text>
      <button className="mr-10 text-[#969696] hover:underline hover:text-[#4E4E4E] focus:text-[#4E4E4E] focus:underline">Browse</button>
      <button className="mr-10 text-[#969696] hover:underline hover:text-[#4E4E4E] focus:text-[#4E4E4E] focus:underline" onClick={() => router.push("/dashboard")}>Sign in</button>
      <button className="px-4 py-2 text-white rounded-md bg-stoop-green font-old hover:bg-[#9BAC97] hover:ring-green-900">RSVP</button>
    </div>
  );
}
export default Navbar;