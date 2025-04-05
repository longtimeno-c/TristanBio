import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl mb-6 text-gray-700 dark:text-gray-300">
          Uh oh... this page doesn’t exist.
        </p>
        <Link href="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          Back to Home
        </Link>
      </main>
    </>
  )
}
