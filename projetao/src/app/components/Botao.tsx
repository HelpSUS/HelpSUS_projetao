interface BotaoProps{
    tamanho: string
    texto: string
}

export default function (props: any) {
    return(
        <button className='rounded-xl w-32 h-14 text-white bg-[#E85900] text-xl font-medium'>
            {props.children}
        </button>
    )
}