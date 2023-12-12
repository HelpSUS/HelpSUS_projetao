import Link from "next/link";
import Botao from "../components/Botao";
import Entrada from "../components/Entrada";
import Check from "../components/Check";

export default function Cadastro(){
    return (
        <div className=" flex flex-col justify-center items-center">
            <div className=" flex flex-row justify-center items-baseline mb-9 mr-[10rem]">
                <h2 className="text-4xl font-semibold ">HelpSus</h2>
                <h1 className="text-6xl font-bold m-12">Cadastro</h1>
            </div>

            <div className="flex flex-row justify-evenly">
                <div className=" flex flex-col mr-28">
                    <div className="flex flex-col mr-28 space-y-5 ">
                        <Entrada texto="   Nome" tamanho=" w-80 h-12"></Entrada>
                        <Entrada texto="   E-mail" tamanho=" w-80 h-12"></Entrada>
                        <Entrada texto="   CPF" tamanho=" w-80 h-12"></Entrada>
                        <Entrada texto="   Telefone" tamanho=" w-80 h-12"></Entrada>
                        <Entrada texto="   Senha" tamanho=" w-80 h-12"></Entrada>
                    </div>

                    <Botao texto="Cadastrar" tamanho=" w-80 h-14" margem=" mt-8"></Botao>
                    <div className=" flex flex-row space-x-2 mt-2">
                        <p>Já tem cadastro?</p>
                        <Link href={'../'} className='text-[#3D63C4]'>Entrar</Link>
                    </div>
                    
                </div>

                <div className="flex flex-col">
                    <div className=" flex flex-row space-x-5">
                        <Check texto=" Médico" margem="mb-4"></Check>
                        <Check texto=" Socorrista" margem="mb-4"></Check>
                        <Check texto=" Atendente" margem="mb-4"></Check>
                    </div>
                    
                    <Entrada texto="   CRM" tamanho="w-80 h-12"></Entrada>
                </div>
            </div>
            
            
        </div>
    )
}