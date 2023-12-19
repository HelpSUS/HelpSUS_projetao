import Atendimento from "../components/Atendimento";
import Botao from "../components/Botao";
import Cardinfo from "../components/Cardinfo";

export default function() {
    return(
        <div>
            <h1 className="text-5xl font-bold flex justify-center items-center my-10">Solicitações</h1>
            <div className="flex flex-row justify-evenly">
                <div className=" flex flex-col gap-4 ">
                    <h2 className=" text-2xl ">Atendimentos Pessoais</h2>

                    <Atendimento></Atendimento>
                    <Atendimento></Atendimento>
                    <Atendimento></Atendimento>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className=" text-2xl ">Ambulâncias</h2>
                    <Cardinfo></Cardinfo>
                    <Cardinfo></Cardinfo>

                    <h2 className=" text-2xl ">Hospitais</h2>
                    <Cardinfo></Cardinfo>
                    <Cardinfo></Cardinfo>
                </div>
            </div>  
            <div className="flex flex-row justify-between mx-40 my-28 ">
                <Botao texto="<- Sair da sessão" tamanho="w-48 h-12" sai></Botao>
                <div className="flex flex-col items-center gap-4 ">
                    <Botao texto="Enviar atendimento" tamanho="w-52 h-12"></Botao>
                    <Botao texto=" Não enviar atendimento" tamanho="w-64 h-12"></Botao> 
                </div>
            </div>                     
        </div>
    )
}