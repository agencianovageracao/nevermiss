import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Navbar } from '../../../globals/Navbar'

export const Header: NextPage = () => {
  const router = useRouter()

  return (
    <header
      style={{
        background: 'url(/backgrounds/header.png) no-repeat',
        backgroundSize: 'cover'
      }}
      className="h-full"
    >
      <Navbar />
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col text-center">
          <div className="max-w-[540px] my-[200px] text-center flex flex-col items-center justify-center">
            <h1
              className="font-bold text-5xl"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <span className="text-purple-500">100%</span> Undetected best{' '}
              <span className="text-purple-500">cheats</span>!
            </h1>
            <p
              className="text-lg text-gray-300 mt-2"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Alcance as alturas com trapaça em jogos e qualidade
              Tenha uma aparência profissional e seja sempre confiável.
            </p>
            <button
              className="mt-4 text-lg flex items-center gap-4 py-3 px-5 bg-purple-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <span>Compre Agora</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
