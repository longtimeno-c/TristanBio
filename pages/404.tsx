import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative">
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/3 w-1/2 h-1/2 bg-red-500/10 dark:bg-red-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">404</h1>
          <p className="text-2xl mb-6 text-gray-700 dark:text-gray-300">
            Uh oh... this page doesn't exist.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition">
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
