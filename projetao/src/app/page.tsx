import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-5xl font-bold m-24 '>HelpSus</h1>
      
      <input type='text' name='E-mail' className=' w-80 h-14  mb-8 placeholder-shown: border-gray-600 rounded-lg focus: ring-1 ring-[#668EF4] outline-[#3D63C4]' placeholder='    Insira seu email ou CPF'></input>
      
      <input type='text' name='Senha' className=' w-80 h-14  mb-8 placeholder-shown: border-gray-600 rounded-lg focus: ring-1 ring-[#668EF4] outline-[#3D63C4]' placeholder='    Insira sua senha'></input>
      
      <button className='rounded-xl w-32 h-14 text-white bg-[#E85900] text-xl font-medium'>Entrar</button>
      
      <p className='m-4 mb-0'>Não tem cadastro ainda? </p>
      <Link href={'./cadastro'} className='text-[#3D63C4]'>Cadastrar-se</Link>
      
    </div>
  )
}
