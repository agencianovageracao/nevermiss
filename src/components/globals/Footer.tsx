import { NextPage } from 'next'

export const Footer: NextPage = () => {
  return (
    <footer className="bg-gray-800 pt-2 pb-10">
      <div className="container mx-auto">
        <p className="text-2xl font-bold mt-10">
          All rights reserveds ₢ NeverMiss 2022
        </p>
        <a href="https://agencianovageracao.com.br/" target="_blank">
          Developed with ❤️ by Nova Geração
        </a>
      </div>
    </footer>
  )
}
