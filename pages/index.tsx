'use client'

import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6'

const EMOJIS = ['👋', '🤖', '💻', '🧠', '⚡', '🔥', '🎧', '🚀', '🛠️', '🧰', '👨‍💻', '📡', '🕹️', '🤘', '🧪', '📟', '💡', '🔧', '🎮', '🧱']

export default function Home() {
  const [emoji, setEmoji] = useState('👋')

  const handleHover = () => {
    let count = 0
    const interval = setInterval(() => {
      setEmoji(EMOJIS[Math.floor(Math.random() * EMOJIS.length)])
      count++
      if (count > 20) {
        clearInterval(interval)
        setEmoji('👋')
      }
    }, 50)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center flex-col gap-6 px-4 text-center">
        <motion.h1
          className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Tristan{' '}
          <motion.span
            className="inline-block origin-[70%_70%] cursor-pointer"
            onMouseEnter={handleHover}
          >
            {emoji}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I build cool stuff with Node.js, AI, TypeScript, and coffee.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <SocialLink href="https://github.com/longtimeno-c" icon={<FaGithub />} label="GitHub" />
          {/* <SocialLink href="https://instagram.com/YOUR_USERNAME" icon={<FaInstagram />} label="Instagram" /> */}
          <SocialLink href="https://x.com/ReTristanHill" icon={<FaXTwitter />} label="X" />
          {/* <SocialLink href="https://linkedin.com/in/YOUR_USERNAME" icon={<FaLinkedin />} label="LinkedIn" /> */}
        </motion.div>
      </main>
    </>
  )
}

// Social Link Component
function SocialLink({
    href,
    icon,
    label,
  }: {
    href: string
    icon: React.ReactNode
    label: string
  }) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-3xl text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition"
        whileHover={{
          scale: 1.2,
          textShadow: '0px 0px 8px rgba(99, 102, 241, 0.8)',
        }}
      >
        {icon}
      </motion.a>
    )
  }
  