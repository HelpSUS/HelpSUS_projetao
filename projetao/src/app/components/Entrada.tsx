interface EntradaProps{
    tamanho: string
    texto: string
}

export default function (props: EntradaProps) {
    return(
        <input type='text' name='Senha' className={` ${props.tamanho} mb-8 placeholder-shown: border-gray-600 rounded-lg focus: ring-1 ring-[#668EF4] outline-[#3D63C4]' `} placeholder={` ${props.texto} `}></input>
    )
}