/* Sign In page for the Stoop Sale hosts (Chelsea and Lil!). Uses NextAuth JS and Google OAuth to securely log users in through gmail 
  and validate if they are admins.
*/

import { signIn } from "next-auth/react";

export default function Owner() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="mb-4 text-4xl font-kyiv">Owner? <span className=" text-stoop-green hover:cursor-pointer" onClick={() => signIn()}>Sign In</span></h1>
      <h1 className="2xl">not the owner? <span className=" text-stoop-brown">return home</span></h1>
    </div>
  );
}