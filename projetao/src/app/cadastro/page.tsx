import Botao from "../components/Botao";
import Entrada from "../components/Entrada";

export default function Cadastro(){
    return (
        <div className=" flex justify-center items-center">
            <h1 className="text-6xl font-bold m-12">Cadastro</h1>

            <div>
                <Entrada texto="   Nome" tamanho=" w-80 h-12"></Entrada>

                <Botao texto="Cadastrar" tamanho=" w-80 h-14"></Botao>
            </div>
            
        </div>
    )
}