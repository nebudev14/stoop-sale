import { MdHome } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className="h-screen p-16">
      <div className="flex items-center">
        <h1 className="mr-auto text-4xl font-kyiv">Dashboard</h1>
        <MdHome size={40} />
      </div>
    </div>
  );
}