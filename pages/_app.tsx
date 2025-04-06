import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href="../components/favi2.png" type="image/png" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
      {mounted && <Component {...pageProps} />}
    </>
  )
}
