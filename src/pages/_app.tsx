import AOS from 'aos'

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
        id="Adsense-id"
        data-ad-client="ca-pub-5415968318381293"
        async={true}
        onError={() => console.log('Adsense error')}
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </>
  )
}

export default MyApp
