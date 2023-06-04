'use client'

import { Button } from '@/components/globals/Button'

import * as Icon from 'phosphor-react'

export const Headline = () => {
  return (
    <section className="mb-[100px]">
      <div className="container flex items-center justify-center">
        <div className="max-w-[1096px] w-full bg-gray-800 p-10 rounded flex gap-2 items-center justify-between">
          <div className="w-8/12">
            <h1 className="text-[20px] font-bold text-purple-500">
              Be a member of our community!
            </h1>
            <p className="text-lg">
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro. Este texto
              não só sobreviveu 5 séculos,
            </p>
          </div>
          <div>
            <Button
              className="bg-purple-500 hover:brightness-90"
              withIcon={true}
            >
              <i>
                <Icon.DiscordLogo weight="fill" />
              </i>
              Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
