import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import * as Icon from 'phosphor-react'

export const Navbar: NextPage = () => {
  const router = useRouter()

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true)
  }

  return (
    <>
      <nav className="py-10 hidden lg:block" id="home">
        <div className="container mx-auto flex justify-between">
          <div className="flex gap-16 items-center">
            <button onClick={() => router.push('/')}>
              <img src="/brand/logo.png" alt="Logo" loading="lazy" />
            </button>
            <ul className="flex gap-8 items-center">
              <li>
                <button
                  className="text-lg font-bold text-purple-500 flex gap-2 items-center"
                  onClick={() => router.push('/#home')}
                >
                  <span>
                    <Icon.House size={24} color="#AD00FF" />
                  </span>
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-lg flex gap-2 items-center"
                  onClick={() => router.push('/#features')}
                >
                  <span>
                    <Icon.List size={24} color="#fff" />
                  </span>
                  Features
                </button>
              </li>
              <li>
                <button
                  className="text-lg flex gap-2 items-center"
                  onClick={() => router.push('/#features')}
                >
                  <span>
                    <Icon.ChatsCircle size={24} color="#fff" />
                  </span>
                  Comments
                </button>
              </li>
              <li>
                <button
                  className="text-lg flex gap-2 items-center"
                  onClick={() => router.push('/#features')}
                >
                  <span>
                    <Icon.ChatText size={24} color="#fff" />
                  </span>
                  Terms
                </button>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <button className="text-lg flex items-center gap-4 py-3 px-5 bg-purple-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80">
              <span>Contact Us</span>
            </button>
            <button className="text-lg flex items-center gap-4 py-3 px-5 bg-gray-800 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80">
              <span>Forum</span>
            </button>
          </div>
        </div>
      </nav>
      <nav className="py-10 block lg:hidden" id="home">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => router.push('/')}>
            <img
              className="w-full"
              src="/brand/logo.png"
              alt="Logo"
              loading="lazy"
            />
          </button>
          <button onClick={toggleNav}>
            <Icon.List size={50} />
          </button>
        </div>
        <div
          className={
            isNavOpen
              ? 'block fixed z-40 bg-gray-900 w-screen h-screen top-0 py-10'
              : 'hidden'
          }
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <button onClick={() => router.push('/')}>
                <img
                  className="w-full"
                  src="/brand/logo.png"
                  alt="Logo"
                  loading="lazy"
                />
              </button>
              <button onClick={toggleNav}>
                <Icon.X size={50} />
              </button>
            </div>
            <ul className="flex flex-col gap-8 items-center mt-10">
              <li>
                <button
                  className="text-lg font-bold text-purple-500 flex gap-2 items-center"
                  onClick={() => router.push('/#home')}
                >
                  <span>
                    <Icon.House size={24} color="#AD00FF" />
                  </span>
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-lg flex gap-2 items-center"
                  onClick={() => router.push('/#features')}
                >
                  <span>
                    <Icon.List size={24} color="#fff" />
                  </span>
                  Features
                </button>
              </li>
              <li>
                <button
                  className="text-lg flex gap-2 items-center"
                  onClick={() => router.push('/#features')}
                >
                  <span>
                    <Icon.ChatsCircle size={24} color="#fff" />
                  </span>
                  Comments
                </button>
              </li>
              <li>
                <button
                  className="text-lg flex gap-2 items-center"
                  onClick={() => router.push('/#features')}
                >
                  <span>
                    <Icon.ChatText size={24} color="#fff" />
                  </span>
                  Terms
                </button>
              </li>
            </ul>
            <div className="flex flex-col mt-10 items-center gap-8">
              <button className="text-lg flex items-center gap-4 py-3 px-5 bg-purple-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80">
                <span>Contact Us</span>
              </button>
              <button className="text-lg flex items-center gap-4 py-3 px-5 bg-gray-800 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80">
                <span>Forum</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
