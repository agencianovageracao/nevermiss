import { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/globals/Footer'
import { Features } from '../components/pages/home/Features'
import { Games } from '../components/pages/home/Games'
import { Header } from '../components/pages/home/Header'

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Home | NeverMiss</title>
      </Head>
      <Header />
      <main>
        <Features />
        <Games />
      </main>
      <Footer />
    </>
  )
}

export default Home
