import { NextPage } from 'next'
import { useRouter } from 'next/router'

type GameCardProps = {
  title: string
  image: string
  options: string[]
  link: string
  special?: Boolean
}

export const GameCard: NextPage<GameCardProps> = props => {
  const router = useRouter()

  return (
    <div className={props.special ? 'p-6' : 'p-10'}>
      <div className="bg-gray-900 overflow-hidden rounded-xl border border-purple-600 transition-all hover:bg-gray-800 hover:border-purple-500 hover:scale-105">
        <div className="overflow-hidden">
          <img src={props.image} alt={props.title} className="aspect-video " />
        </div>
        <div className="text-center py-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-purple-500">{props.title}</h1>
          <ul className="my-10">
            {props.options.map(option => {
              return (
                <li className="text-lg" key={option}>
                  {option}
                </li>
              )
            })}
          </ul>
          <button
            className="text-lg w-fit flex items-center gap-4 py-3 px-5 bg-purple-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80"
            onClick={() => router.push(props.link)}
          >
            <span>Buy</span>
          </button>
        </div>
      </div>
    </div>
  )
}
