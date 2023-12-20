interface BotaoProps{
    tamanho: string
    margem?: string
    texto: string
    sai?: boolean
}

export default function (props: BotaoProps) {
    return(
        <button className={`rounded-xl ${props.tamanho} ${props.margem} text-white ${props.sai ? 'bg-[#C60000] hover:bg-[#ab2e2e]' : 'bg-[#E85900] hover:bg-[#e84900]' } text-xl font-medium`}>
            {props.texto}
        </button>
    )
}