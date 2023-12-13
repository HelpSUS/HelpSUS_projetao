interface BotaoProps{
    tamanho: string
    margem?: string
    texto: string
    sai?: boolean
}

export default function (props: BotaoProps) {
    return(
        <button className={`rounded-xl ${props.tamanho} ${props.margem} text-white ${props.sai ? 'bg-[#C60000]' : 'bg-[#E85900]' }  text-xl font-medium`}>
            {props.texto}
        </button>
    )
}