import { NextPage } from 'next'

export const Footer: NextPage = () => {
  return (
    <footer className="bg-gray-800 pt-2 pb-10">
      <div className="container mx-auto">
        <p className="text-2xl font-bold mt-10">
          All rights reserveds ₢ NeverMiss 2022
        </p>
        <a href="#">Developed with ❤️ by AtomCodes</a>
      </div>
    </footer>
  )
}