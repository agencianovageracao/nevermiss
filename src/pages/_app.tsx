import AOS from 'aos'

import config from '../../config.json'

import '../styles/globals.css'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <Component {...pageProps} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.idGoogle}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', ${config.idGoogle}, {page_path: window.location.pathname,});`
        }}
      />
    </>
  )
}

export default MyApp
