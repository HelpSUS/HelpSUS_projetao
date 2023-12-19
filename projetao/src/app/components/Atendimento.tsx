interface AtendimentoProps{
    descricao: string
    destaques: string
}


export default function(props:any) {
    return(
        <div className="flex flex-col gap-2 place-content-center bg-[#ACD4F1] w-[40rem] h-[11rem] rounded-lg ">
            <p className="mx-4 text-xs ">1 Vitima de  X anos bateu a moto em um carro em movimento, vitima se encontra desacordada .  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            <p className="mx-4 font-black text-xs">Faixa etária: x anos<br/>Sexo: Feminino<br/>Número de vítmas: 1</p>
        </div>
    )
}