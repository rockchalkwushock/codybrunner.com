import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            crossOrigin="anonymous"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          {/* RSS */}
          <link
            rel="alternate"
            type="application/rss+xml"
            title="codybrunner.com RSS2 Feed"
            href="https://codybrunner.com/feed.xml"
          />
          <link
            rel="alternate"
            type="application/atom+xml"
            title="codybrunner.com Atom Feed"
            href="https://codybrunner.com/atom.xml"
          />
          <link
            rel="alternate"
            type="application/json"
            title="codybrunner.com JSON Feed"
            href="https://codybrunner.com/feed.json"
          />
        </Head>
        <body className="antialiased bg-stone-50 text-stone-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
