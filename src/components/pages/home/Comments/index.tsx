import { NextPage } from 'next'
import Slider from 'react-slick'

import * as Icon from 'phosphor-react'

export const Comments: NextPage = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className="mb-[100px]">
      <div className="container mx-auto">
        <h1 className="font-bold text-4xl text-white">
          Comments of our clients
        </h1>
        <div className="mt-10">
          <Slider {...settings}>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
            <div className="p-5">
              <div className="bg-gray-800 p-10">
                <h1 className="flex text-yellow-400">
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                  <Icon.Star size={36} weight="fill" />
                </h1>
                <p className="text-gray-100 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum laudantium corrupti velit cupiditate fugiat illo minus
                  impedit porro quisquam? Dicta molestias tempore maxime
                  perspiciatis reiciendis repellendus vero deleniti ad!
                </p>
                <h1 className="font-bold text-2xl">Name</h1>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}
