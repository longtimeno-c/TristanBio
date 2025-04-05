import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg max-w-xl text-center text-gray-700 dark:text-gray-300">
          I'm Tristan — a developer, streamer, and aspiring world-changer. I build things with code, caffeine, and stubborn optimism. Right now, I’m working on streaming platforms, geospatial apps, and surviving A-levels.
        </p>
      </main>
    </>
  )
}
