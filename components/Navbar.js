import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter();
  return (
    <div className="flex item-center">
      <text className="mr-auto text-6xl font-miama">STOOP SALE</text>
      <button className="mr-10">Browse</button>
      <button className="mr-10" onClick={() => router.push("/dashboard")}>Sign in</button>
      <button className="px-4 py-2 text-white rounded-md bg-stoop-green">RSVP</button>
    </div>
  );
}
export default Navbar;