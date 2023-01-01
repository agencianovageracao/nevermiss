import { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '../components/globals/Footer'
import { Features } from '../components/pages/home/Features'
import { Games } from '../components/pages/home/Games'
import { Header } from '../components/pages/home/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | NeverMiss</title>

<!-- Google tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZKKS9VN02L">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZKKS9VN02L');
</script>
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
