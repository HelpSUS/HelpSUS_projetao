interface MedProps{
    texto: string
    numero: string
}

export default function MedCard(props: MedProps) {
    return(
        <div className="flex justify-between items-center w-64 h-11 bg-[#ACD4F1] rounded-lg ">
            <p className="text-base font-medium ml-9 ">{props.texto}</p>
            <div className=" flex justify-center items-center w-16 h-6 mr-3 bg-[#E85900] rounded-lg">
                <p className="text-base font-medium text-white ">{props.numero}</p>
            </div>
        </div>
    )
}