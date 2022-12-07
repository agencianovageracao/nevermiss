import AOS from 'aos'

import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
