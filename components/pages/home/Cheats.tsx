import { CheatCard } from '@/components/globals/CheatCard'

export const Cheats = () => {
  return (
    <section className="flex mb-[100px]">
      <CheatCard
        backgroundUrl="https://i.imgur.com/uwK7z6E.png"
        title="Valorant"
        link="https://a.com"
      />
      <CheatCard
        backgroundUrl="https://i.imgur.com/qlGKZPx.png"
        title="Fortnite"
        link="https://a.com"
      />
      <CheatCard
        backgroundUrl="https://i.imgur.com/wM3gd5V.png"
        title="Cod Warzone"
        link="https://a.com"
      />
      <CheatCard
        backgroundUrl="https://i.imgur.com/feoo1DB.png"
        title="Deadside"
        link="https://a.com"
      />
      <CheatCard
        backgroundUrl="https://i.imgur.com/SCxKafU.png"
        title="PUBG"
        link="https://a.com"
      />
    </section>
  )
}
