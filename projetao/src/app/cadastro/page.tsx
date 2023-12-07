export default function Cadastro(){
    return (
        <div>
            <h1>Cadastro</h1>

            <input type='text' name='E-mail' className=' w-80 h-14  mb-8 placeholder-shown: border-gray-600 rounded-lg focus: ring-1 ring-[#668EF4] outline-[#3D63C4]' placeholder='    Insira seu email ou CPF'></input>

            <button className='rounded-xl w-32 h-14 text-white bg-[#E85900] text-xl font-medium'>Entrar</button>
        </div>
    )
}