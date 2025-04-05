import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-xl font-bold text-white">
        <Link href="/">Tristan Hill</Link>
      </h1>
      <div className="flex gap-4 items-center">
        <Link href="/" className="text-white hover:underline">Home</Link>
        <Link href="/about" className="text-white hover:underline">About</Link>
        <Link href="/projects" className="text-white hover:underline">Projects</Link>
        <DarkModeToggle />
      </div>
    </nav>
  )
}
