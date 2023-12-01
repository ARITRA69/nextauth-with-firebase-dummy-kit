"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

type Props = {};

function Login({}: Props) {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center">
      <button
        onClick={() => signIn("google")}
        className="flex gap-2 items-center bg-black p-3 text-white rounded-xl hover:scale-105 transition-all duration-300"
      >
        <FcGoogle size={30} />
        Google
      </button>
    </div>
  );
}

export default Login;
