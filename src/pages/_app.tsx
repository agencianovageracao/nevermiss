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
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZKKS9VN02L"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-ZKKS9VN02L', {page_path: window.location.pathname,});`
        }}
      />
    </>
  )
}

export default MyApp
