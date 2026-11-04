interface EntradaProps{
    texto: string
    margem?: string
}

export default function Check(props: EntradaProps) {
    return(
        <div>
            <input type="checkbox" id="seleção" value={`${props.texto}`} className={`${props.margem}
            text-start`}/>{props.texto} 
        </div>
    )
}