"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-y-10">
        <div className="text-2xl">
          <h1>Wellcome back,</h1>
          <div className="flex items-center gap-3">
            <Image
              src={session?.data?.user?.image || "/default_image.png"}
              width={200}
              height={200}
              className="h-12 w-12 rounded-full"
              alt=""
            />
            <p className="text-4xl font-bold">{session?.data?.user?.name}</p>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-black p-3 text-white rounded-xl hover:bg-opacity-70 transition-opacity duration-300"
        >
          Log out
        </button>
      </div>
    </>
  );
}
