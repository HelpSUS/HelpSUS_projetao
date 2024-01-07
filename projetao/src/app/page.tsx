"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import Login from "./login/page";
import DoctorHome from "./doctorHome/page";
import CallReceiverHome from "./callReceiverHome/page";

export default function App() {
  const { token, userProfile } = useAuthContext();

  if (!token) return <Login />;

  if (userProfile === "callReceiver") return <CallReceiverHome />;
  else return <DoctorHome />;
}
