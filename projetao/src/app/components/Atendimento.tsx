interface AtendimentoProps{
    descricao: string
    idade: string
    sexo: string
    n_vitimas: string
}


export default function(props: AtendimentoProps) {
    return(
        <button className="flex flex-col gap-2 justify-center items-baseline bg-[#ACD4F1] w-[40rem] h-[11rem] rounded-lg focus:outline-none focus:ring focus:ring-[#3D63C4]">
            <p className="mx-4 text-xs text-left ">{props.n_vitimas} vitima de {props.idade} anos {props.descricao}.</p>
            <p className="mx-4 font-black text-xs text-left">Faixa etária: {props.idade} anos<br/>Sexo: {props.sexo}<br/>Número de vítmas: {props.n_vitimas}</p>
        </button>
    )
}