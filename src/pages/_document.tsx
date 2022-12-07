import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="AtomCodes (atomcodes#7973)" />
          <meta name="copyright" content="NeverMiss" />
          <meta name="designer" content="AtomCodes (atomcodes#7973)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta property="og:title" content="NeverMiss" />
          <meta
            property="og:description"
            content="Reach the heights of cheating in games with the quality of Cheat.win! Look professional and always stay reliable."
          />
          <meta property="og:url" content="https://nevermiss.pw/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/brand/logo.png" />
          <meta property="twitter:image" content="/brand/logo.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content="Reach the heights of cheating in games with the quality of Cheat.win! Look professional and always stay reliable."
          />
          <meta
            name="description"
            content="Reach the heights of cheating in games with the quality of Cheat.win! Look professional and always stay reliable."
          />
          <link rel="shortcut icon" href="/brand/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
