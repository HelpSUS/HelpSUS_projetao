import Botao from "../../components/Botao";
import Entrada from "../../components/Entrada";
import MedCard from "../../components/MedCard";

export default function Formulario() {
  return (
    <div>
      <h1 className="text-5xl font-bold flex justify-center items-center my-10">
        Formulário
      </h1>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col mr-4">
          <div className="flex flex-row gap-14">
            <div className="flex flex-col ">
              <p className="text-xl mb-2">Quem fala:</p>
              <Entrada texto=" " tamanho="w-80 h-12"></Entrada>

              <p className="text-xl mb-2 mt-8">Quantas vitimas são:</p>
              <Entrada texto=" " tamanho="w-80 h-12"></Entrada>

              <p className="text-xl mb-2 mt-8  ">Quem é a vitima:</p>
              <Entrada texto=" " tamanho="w-80 h-12"></Entrada>
            </div>

            <div className="flex flex-col">
              <p className="text-xl mb-2 ">Situação:</p>
              <Entrada texto=" " tamanho="w-[30rem] h-72"></Entrada>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl mb-2 mt-8  ">Enderço:</p>
            <Entrada texto=" " tamanho="w-[50rem] h-12"></Entrada>

            <div className="flex flex-row gap-14">
              <div className="flex flex-col">
                <p className="text-xl mb-2 mt-8  ">Faixa etaria:</p>
                <Entrada texto=" " tamanho="w-80 h-12"></Entrada>
              </div>

              <div className="flex flex-col">
                <p className="text-xl mb-2 mt-8  ">Sexo:</p>
                <Entrada texto=" " tamanho="w-80 h-12"></Entrada>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-xl mb-2">Médicos - Atendimentos pendentes</p>
          <MedCard texto="Médico 1" numero="1"></MedCard>
          <MedCard texto="Médico 2" numero="1"></MedCard>
          <MedCard texto="Médico 3" numero="2"></MedCard>
          <MedCard texto="Médico 4" numero="4"></MedCard>
          <MedCard texto="Médico 5" numero="6"></MedCard>
        </div>
      </div>
      <div className="flex justify-between mx-40 my-36">
        <Botao texto="<- Sair da sessão" tamanho="w-48 h-12" sai></Botao>
        <Botao texto="Encaminhar atendimento" tamanho="w-72 h-12"></Botao>
      </div>
    </div>
  );
}
