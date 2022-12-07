import { NextPage } from 'next'

import * as Icon from 'phosphor-react'

export const Features: NextPage = () => {
  return (
    <div id="features">
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 py-10 pb-50 relative block lg:hidden mb-[100px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-bold text-4xl text-white">Our features</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[871px] relative">
              <div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800">
                    <Icon.AirplaneLanding size={50} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Type something</h1>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis dignissimos atque, vel at.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8 mt-5">
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800">
                    <Icon.AirplaneLanding size={50} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Type something</h1>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis dignissimos atque, vel at.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative mt-5">
                <div className="flex items-center gap-8">
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800">
                    <Icon.AirplaneLanding size={50} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Type something</h1>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis dignissimos atque, vel at
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8 mt-5">
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800">
                    <Icon.AirplaneLanding size={50} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Type something</h1>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis dignissimos atque, vel at.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0 60%)' }}
        className="bg-gradient-to-r from-purple-500 to-purple-600 py-40 pb-80 relative hidden lg:block"
      >
        <div className="container mx-auto">
          <div className="flex gap-8">
            <div>
              <h1
                className="font-bold text-4xl text-white"
                data-aos="fade-right"
              >
                Our features
              </h1>
              <img
                src="/illustrations/person.png"
                alt="Character"
                className="relative -bottom-20"
                style={{ transform: 'rotate(11deg)' }}
                data-aos="fade-right"
              />
            </div>
            <div className="grid grid-cols-2 max-w-[871px] relative -bottom-28">
              <div>
                <div className="flex items-center gap-8" data-aos="fade-right">
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800 ">
                    <div className="animate-pulse">
                      <Icon.AirplaneLanding size={50} />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Undetectable cheats</h1>
                    <p className="text-gray-300">
                      Due to sophisticated technology, all cheats that we
                      provide are actually undetected and safe!
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-8"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800 ">
                    <div className="animate-pulse">
                      <Icon.AirplaneLanding size={50} />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Quality products</h1>
                    <p className="text-gray-300">
                      All our products go over an extensive review and tested
                      before it's available on the market.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative -bottom-20"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-8">
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800 ">
                    <div className="animate-pulse">
                      <Icon.AirplaneLanding size={50} />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Leading provider</h1>
                    <p className="text-gray-300">
                      Established in 2017, we soon became the leading cheat
                      provider for BattlEye and EAC games.
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-8"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <div className="flex items-center justify-center p-4 rounded-md bg-gray-800 ">
                    <div className="animate-pulse">
                      <Icon.AirplaneLanding size={50} />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Private community</h1>
                    <p className="text-gray-300">
                      Only subscribers and trusted users can access our
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
