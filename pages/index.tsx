import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center flex-col gap-6 px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-fadeIn">
          Hi, I'm Tristan 👋
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-xl animate-fadeIn">
          I build cool stuff with Node.js, AI, TypeScript, 10Gb networks, and coffee.
        </p>
      </main>
    </>
  )
}
