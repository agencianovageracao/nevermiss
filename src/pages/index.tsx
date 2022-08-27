import { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/globals/Footer'
import { Comments } from '../components/pages/home/Comments'
import { Features } from '../components/pages/home/Features'
import { Header } from '../components/pages/home/Header'

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Home | NeverMiss</title>
      </Head>
      <Header />
      <body>
        <Features />
        <Comments />
      </body>
      <Footer />
    </>
  )
}

export default Home
