interface CardProps{
    nome: string
    bairro: string
    cidade: string
}


export default function(props:any) {
    return (
        <div className=" flex flex-row justify-between items-center w-96 h-11 bg-[#ACD4F1] rounded-lg ">
            <p className="mx-4 font-black text-xs">Ambulância XYZ</p>
            <p className="mx-4 text-xs">Bairro: X<br/>Cidade: X, Y</p>
            <div className="bg-orange-400 h-8 w-8 rounded-full mr-4"></div>
        </div>
    )
}