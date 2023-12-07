interface BotaoProps{
    tamanho: string
    texto: string
}

export default function (props: BotaoProps) {
    return(
        <button className={`rounded-xl ${props.tamanho} text-white bg-[#E85900] text-xl font-medium`}>
            {props.texto}
        </button>
    )
}