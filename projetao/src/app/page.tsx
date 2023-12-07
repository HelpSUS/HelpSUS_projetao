import Image from 'next/image'
import Link from 'next/link'
import Botao from './components/Botao'
import Entrada from './components/Entrada'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-5xl font-bold m-24 '>HelpSus</h1>
      <div className='flex flex-col space-y-5 mb-8'>
        <Entrada texto='   Insira seu E-mail ou CPF' tamanho=' w-80 h-14'></Entrada>

        <Entrada texto='   Insira sua Senha' tamanho=' w-80 h-14'></Entrada>
      </div>
      
      <Botao texto='Entrar' tamanho='w-32 h-14'></Botao>
      
      <p className='m-4 mb-0'>Não tem cadastro ainda? </p>
      <Link href={'./cadastro'} className='text-[#3D63C4]'>Cadastrar-se</Link>
      
    </div>
  )
}
