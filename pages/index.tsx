'use client'

import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

const EMOJIS = ['👋', '🤖', '💻', '🧠', '⚡', '🔥', '🎧', '🚀', '🛠️', '🧰', '👨‍💻', '📡', '🕹️', '🤘', '🧪', '📟', '💡', '🔧', '🎮', '🧱']

const TOOLBOX = ['Node.js', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Framer Motion', 'GraphQL', 'Docker', 'PostgreSQL', 'Python', 'AI/ML', 'NDI', 'WebSockets']

export default function Home() {
  const [emoji, setEmoji] = useState('👋')

  useEffect(() => {
    console.log('%cHey dev, nice inspect element 👀', 'color: #6366f1; font-size: 16px;')
  }, [])

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
      <main className="min-h-screen flex flex-col items-center justify-center gap-12 px-6 pt-32 pb-20 text-center bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative">
        {/* Ambient glow effects for both light and dark mode */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500/5 dark:bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-purple-500/5 dark:bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        {/* Hero */}
        <div className="space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent inline-flex items-center gap-2 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="whitespace-nowrap">Hi, I'm Tristan</span>{' '}
            <motion.span
              className="inline-block origin-[70%_70%] cursor-pointer"
              onMouseEnter={handleHover}
            >
              {emoji}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I build cool stuff with Node.js, AI, TypeScript, and coffee.
          </motion.p>
        </div>

        {/* Featured Projects Teaser */}
        <motion.div
          className="w-full max-w-2xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">⚡ Featured Projects</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {/* Dummy projects - link to actual project page */}
            <ProjectCard title="Missile Wars" desc="Fast-paced multiplayer game with WebSockets & strategy." />
            <ProjectCard title="Advanced Tutoring" desc="All in one tutoring platform. For easy and simple services between student and teacher." />
          </div>
        </motion.div>

         {/* Socials */}
         <motion.div
          className="flex gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <SocialLink href="https://github.com/longtimeno-c" icon={<FaGithub />} label="GitHub" />
          <SocialLink href="https://x.com/ReTristanHill" icon={<FaXTwitter />} label="X" />
        </motion.div>
      </main>
    </>
  )
}

// Social Icon
function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
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

// Project Card
function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Link href="/projects" passHref>
      <motion.div
        className="cursor-pointer p-4 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
        whileHover={{ y: -4 }}
      >
        <h3 className="text-lg font-bold mb-1 text-indigo-600 dark:text-indigo-400">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
      </motion.div>
    </Link>
  )
}

