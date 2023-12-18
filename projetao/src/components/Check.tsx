interface EntradaProps{
    texto: string
    margem?: string
}

export default function (props: EntradaProps) {
    return(
        <div>
            <input type="checkbox" id="seleção" value={`${props.texto}`} className={`${props.margem}`}/>{props.texto} 
        </div>
    )
}