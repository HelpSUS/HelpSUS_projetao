import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <h1 className='text-9xl mb-24 flex justify-center items-center'>HelpSus</h1>
      <input type='Email' name='Inserir email' className=' disabled:border-black rounded-lg enabled:rounded-lg placeholder-shown:border-gray-500'></input>
    </div>
  )
}
