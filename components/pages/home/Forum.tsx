import { Button } from '@/components/globals/Button'
import { Title } from '@/components/globals/Title'

export const Forum = () => {
  return (
    <section className="mb-[100px]">
      <div className="container flex justify-between items-center">
        <div>
          <Title size="4xl">
            How about meet ou <span className="text-purple-500">forum</span>?
          </Title>
          <p className="mt-8">
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
            estas indústrias desde o ano de 1500, quando uma misturou os
            caracteres de um texto para criar um espécime de livro. Este texto
            não só sobreviveu 5 séculos,
          </p>
          <div className="flex gap-4 items-center mt-8">
            <Button className="bg-purple-500 hover:brightness-90">
              Our Forum
            </Button>
          </div>
        </div>
        <img
          className="max-w-[650px] w-full"
          src="/forum-img.png"
          alt="Imagem do forum"
        />
      </div>
    </section>
  )
}
