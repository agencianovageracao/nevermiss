'use client'

import * as Icon from 'phosphor-react'
import { Title } from '@/components/globals/Title'
import { Button } from '@/components/globals/Button'

export const Loader = () => {
  return (
    <section className="py-[100px] bg-gray-800">
      <div className="container flex justify-between items-center">
        <img
          className="relative -left-16"
          src="/menu-img.png"
          alt="Loader Menu Image"
        />
        <div>
          <Title size="3xl">
            With <span className="text-purple-500">our</span> loader you can do
            the <span className="text-purple-500">impossible</span>!
          </Title>
          <p className="text-lg mt-2">
            
          </p>
          <ul className="grid grid-cols-2 gap-3 mt-4">
            <li className="text-lg text-white flex items-center gap-2">
              <span className="text-purple-500">
                <Icon.Check size={24} />
              </span>
              Fast and secure loading
            </li>
            <li className="text-lg text-white flex items-center gap-2">
              <span className="text-purple-500">
                <Icon.Check size={24} />
              </span>
              Priority support
            </li>
            <li className="text-lg text-white flex items-center gap-2">
              <span className="text-purple-500">
                <Icon.Check size={24} />
              </span>
              100% undetectable
            </li>
          </ul>
          <div className="flex gap-4 items-center mt-8">
            <Button className="bg-purple-500 hover:brightness-90">
              Our Cheats
            </Button>
            <Button className="bg-gray-900 hover:brightness-110">
              Our Forum
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
