/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Navbar } from '@/components/globals/Navbar'
import { Title } from '@/components/globals/Title'
import { Button } from '@/components/globals/Button'

export const Header = () => {
  return (
    <header
      style={{
        background: 'url(/header-bg.png) no-repeat',
        backgroundSize: 'cover',
      }}
      className="pb-5"
    >
      <Navbar />
      <div className="container flex justify-between mt-5 items-center">
        <div className="max-w-[670px]">
          <Title size="3xl">
            The best 100% <span className="text-purple-500">undetectable</span>{' '}
            cheats in the market. Only with us in{' '}
            <span className="text-purple-500">NeverMiss</span>!
          </Title>
          <p className="mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex gap-4 mt-5">
            <Button className="bg-purple-500 hover:brightness-95">
              Nossos Cheats
            </Button>
            <Button className="bg-gray-800 hover:brightness-125">Forum</Button>
          </div>
        </div>
        <div className="relative">
          <img
            className="relative w-[740px] top-0 left-0"
            src="/hero-img.png"
            alt="Cheat menu image"
          />
        </div>
      </div>
    </header>
  )
}
