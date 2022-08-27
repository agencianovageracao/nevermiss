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
          <meta name="copyright" content="AtomCodes" />
          <meta name="designer" content="AtomCodes (atomcodes#7973)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="keywords"
            content="Atom Codes Web designer web developer front-end reactjs react angular javascript typescript nodejs apolloclient graphql graphcms"
          />
          <meta property="og:title" content="Atom Codes" />
          <meta
            property="og:description"
            content="Nós somos a AtomCodes, um time de desenvolvimento focado em sites e sempre trazendo o que há de mais novo em tecnologias para os nossos clientes."
          />
          <meta property="og:url" content="https://atomcodes.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/brand/logo.png" />
          <meta property="twitter:image" content="/brand/logo.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content="Nós somos a AtomCodes, um time de desenvolvimento focado em sites e sempre trazendo o que há de mais novo em tecnologias para os nossos clientes."
          />
          <meta
            name="description"
            content="Nós somos a AtomCodes, um time de desenvolvimento focado em sites e sempre trazendo o que há de mais novo em tecnologias para os nossos clientes."
          />
          <link rel="shortcut icon" href="/brand/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
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
