import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Handle transitions when switching pages
    document.documentElement.classList.add('transitioning');
    setTimeout(() => {
      document.documentElement.classList.remove('transitioning');
    }, 50);
  }, [])

  return (
    <>
      <Head>
        <title>Tristan's Portfolio</title>
        <meta name="description" content="Software dev, and all-around legend. Explore my work, code, and chaos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Optional: Apple and other formats */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Dark mode initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Default to dark mode unless explicitly set to light
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                }
              })()
            `,
          }}
        />
      </Head>
      {mounted && <Component {...pageProps} />}
    </>
  )
}
