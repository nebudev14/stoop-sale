import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const Protected = ({ children }) => {
  const { data: session, status } = useSession();
  if (status === "loading") return <div className="flex items-center justify-center h-screen">Loading</div>
  if (status === "unauthenticated") return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="mb-4 text-4xl font-kyiv">Owner? <span className=" text-stoop-green hover:cursor-pointer" onClick={() => signIn()}>Sign In</span></h1>
      <h1 className="2xl">not the owner? <span className=" text-stoop-brown">return home</span></h1>
    </div>
  )

  return (
    <>
      {session.user.admin ? children : <div className="flex items-center justify-center h-screen"><h1 className="text-2xl font-kyiv">You aren't an admin. Sorry!</h1></div>}
    </>
  );

}
export default Protected;