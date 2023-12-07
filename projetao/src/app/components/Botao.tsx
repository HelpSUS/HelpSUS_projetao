interface BotaoProps{
    tamanho: string
    margem?: string
    texto: string
}

export default function (props: BotaoProps) {
    return(
        <button className={`rounded-xl ${props.tamanho} ${props.margem} text-white bg-[#E85900] text-xl font-medium`}>
            {props.texto}
        </button>
    )
}