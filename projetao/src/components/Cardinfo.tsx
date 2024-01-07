interface CardProps {
  nome: string;
  bairro: string;
  cidade: string;
  disponível?: boolean;
}

export default function (props: CardProps) {
  return (
    <div className=" flex flex-row justify-between items-center w-96 h-11 bg-[#ACD4F1] rounded-lg ">
      <p className="mx-4 font-black text-xs">Ambulância {props.nome}</p>
      <p className="mx-4 text-xs">
        Bairro: {props.bairro}
        <br />
        Cidade: {props.cidade}
      </p>
      <div
        className={` ${
          props.disponível ? "bg-[#3D63C4]" : "bg-[#C60000]"
        } h-8 w-8 rounded-full mr-4 `}
      ></div>
    </div>
  );
}
