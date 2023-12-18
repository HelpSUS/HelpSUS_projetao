"use client";
import Botao from "@/components/Botao";
import Entrada from "@/components/Entrada";
import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const { login, token, userProfile } = useAuthContext();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<String | null>(null);
  const router = useRouter();

  async function handleOnClick() {
    console.log("inside", cpf, password);

    await login(cpf, password);
    if (!token) setError("Usuário não encontrado");
    else {
      console.log("userProfile", userProfile);
      switch (userProfile) {
        case "callReceiver":
          console.log("ain papain");
          router.replace("/callReceiverHome");
          break;
        case "doctor":
          router.replace("/doctorHome");
          break;
        default:
          setError("Perfil de usuário não encontrado");
          break;
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold m-24 ">HelpSus</h1>
      <div className="flex flex-col space-y-5 mb-8">
        <Entrada
          texto="Insira seu CPF"
          tamanho=" w-80 h-14"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <Entrada
          type="password"
          texto="Insira sua Senha"
          tamanho=" w-80 h-14"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && (
        <div>
          <p>
            <b>{error}</b>
          </p>
        </div>
      )}

      <Botao
        texto="Entrar"
        tamanho="w-32 h-14"
        onClick={() => handleOnClick()}
      />

      <p className="m-4 mb-0">Não tem cadastro ainda? </p>
      <Link href={"./cadastro"} className="text-[#3D63C4]">
        Cadastrar-se
      </Link>
    </div>
  );
}
