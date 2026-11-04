import Atendimento from "@/components/Atendimento";
import Botao from "@/components/Botao";
import Cardinfo from "@/components/Cardinfo";
import { ModalBt } from "@/components/ModalBt";


export default function DoctorHome() {
  return (
    <div>
      <h1 className="text-5xl font-bold flex justify-center items-center my-10">
        Solicitações
      </h1>
      <div className="flex flex-row justify-evenly">
        <div className=" flex flex-col gap-4 overflow-y-scroll h-[25rem] w-[42rem]">
          <h2 className=" text-2xl ">Atendimentos Pessoais</h2>

          <Atendimento
            idade="19"
            sexo="M"
            n_vitimas="1"
            descricao="bateu a moto em um carro em movimento, vitima se encontra desacordada .  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis"
          ></Atendimento>
          <Atendimento
            idade="24"
            sexo="M"
            n_vitimas="1"
            descricao="bateu a moto em um carro em movimento, vitima se encontra desacordada .  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis"
          ></Atendimento>
          <Atendimento
            idade="24"
            sexo="M"
            n_vitimas="1"
            descricao="bateu a moto em um carro em movimento, vitima se encontra desacordada .  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis"
          ></Atendimento>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className=" text-2xl ">Ambulâncias</h2>
          <Cardinfo
            nome="1"
            cidade="Recife, PE"
            bairro="Dois Irmãos"
            disponível
          ></Cardinfo>
          <Cardinfo nome="2" cidade="Recife, PE" bairro="Boa Viagem"></Cardinfo>

          <h2 className=" text-2xl ">Hospitais</h2>
          <Cardinfo nome="3" cidade="Recife, PE" bairro="Varzea"></Cardinfo>
          <Cardinfo
            nome="4"
            cidade="Recife, PE"
            bairro="Ipsep"
            disponível
          ></Cardinfo>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-40 my-28 ">
        <a href="/"><Botao texto="<- Sair da sessão" tamanho="w-48 h-12" sai></Botao></a>
        <div className="flex flex-col items-center gap-4 ">
          <ModalBt texto ='Enviar atendimento' confirmatxt="Atendimento enviado com sucesso!" tamanho='w-52 h-12'></ModalBt>
          <ModalBt texto ='Não enviar atendimento' confirmatxt="Atendimento negado com sucesso" tamanho='w-64 h-12'></ModalBt>
        </div>
      </div>
    </div>
  );
}

