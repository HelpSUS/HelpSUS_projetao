"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import Login from "./login/page";
import CallReceiverHome from "./callReceiverHome/page";
import DoctorHome  from "./medico/page";

export default function App() {
  const { token, userProfile } = useAuthContext();

  if (!token) return <Login />;

  if (userProfile === "callReceiver") return <CallReceiverHome />;
  else return <DoctorHome />;
}
