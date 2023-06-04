import { Button } from '@/components/globals/Button'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'NeverMiss | The future of cheating',
  description:
    'Reach the heights of cheating in games with the quality of NeverMiss.pw! Look professional and always stay reliable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br ">
      <body className={montserrat.className}>
        {children}
        <footer className="py-20 bg-gray-800">
          <div className="container flex flex-wrap flex-col md:flex-row items-center justify-between">
            <img
              src="/logo-comprida.png"
              alt="Logo"
              className="max-w-[450px] w-full"
            />
            <Button className="bg-purple-500 hover:brightness-90">
              Discord
            </Button>
          </div>
        </footer>
      </body>
    </html>
  )
}
