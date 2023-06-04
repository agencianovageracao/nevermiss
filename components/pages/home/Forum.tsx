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
            Join our forum to stay tuned for news we release on it and product updates.
          </p>
          <div className="flex gap-4 items-center mt-8">
          </url>
          <Link href="https://forum.nevermiss.pw/index.php?/forums/">
            <Button className="bg-purple-500 hover:brightness-90">
              Our Forum
            </Button>
          </Link>
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
