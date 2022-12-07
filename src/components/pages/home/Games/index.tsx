import { NextPage } from 'next'
import Slider from 'react-slick'

import PricingJson from '../../../../json/pricing.json'

import { GameCard } from './GameCard'

export const Games: NextPage = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <section className="mb-[100px]" id="prices">
      <div className="container mx-auto">
        <h1 className="font-bold text-4xl text-white" data-aos="fade-right">
          Games that we have cheats
        </h1>
        <div className="mt-10" data-aos="fade-right" data-aos-delay="200">
          <Slider {...settings}>
            {PricingJson.map(item => {
              return (
                <GameCard
                  image={item.image}
                  link={item.link}
                  options={item.options}
                  title={item.title}
                  key={item.title}
                  special={item.special}
                />
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
