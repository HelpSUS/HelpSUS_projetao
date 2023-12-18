import { useAuthContext } from "@/contexts/AuthContext";
import React from "react";

export default function CallReceiverHome() {
  const { logout } = useAuthContext();

  async function handleOnClick() {
    await logout();
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold m-24 ">HelpSus</h1>
      <div className="flex flex-col space-y-5 mb-8">
        <h1> Call Receiver Page</h1>
        <button onClick={handleOnClick}>logout</button>
      </div>
    </div>
  );
}
