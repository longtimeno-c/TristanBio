'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { sanity } from '../src/sanity/lib/client'
import { urlFor } from '../src/sanity/lib/sanityImage'

type CurrentWork = {
  _id: string
  title: string
  description: string
  mainImage?: any
  links?: {
    label: string
    url: string
  }[]
}

export default function About() {
  const [currentWorkItems, setCurrentWorkItems] = useState<CurrentWork[]>([])

  useEffect(() => {
    sanity.fetch(
      `*[_type == "currentWork"] | order(_createdAt desc){
        _id,
        title,
        description,
        links,
        mainImage
      }`
    ).then(setCurrentWorkItems)
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-12 flex flex-col items-center gap-12">

        {/* Original Bio Section */}
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm Tristan — a developer, streamer, and aspiring world-changer. I build things with code, caffeine, and stubborn optimism.
            Right now, I’m balancing the chaos of streaming platforms, geospatial apps, and surviving A-levels.
          </p>
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
            🧠 What I’m Into
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Building real-time apps with Node.js, TypeScript, and WebSockets</li>
            <li>AI and machine learning, especially for weather prediction (because chaos needs order)</li>
            <li>Streaming: OBS wizardry, automation, multi-cam setups, and interactive challenges</li>
            <li>Learning how to turn ideas into products — one GitHub commit at a time</li>
            <li>Making the internet more fun and slightly more chaotic</li>
          </ul>
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
            🧪 Recent Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I recently completed a 150-hour livestream challenge called <strong>Stream150</strong> — a tech marathon involving five PCs, OBS plugins, donation-triggered chaos, and 10Gb networking.
            I also led development for a geospatial app under my company <em>One Studio One Game, LLC</em>, and continue to maintain several open source tools.
          </p>
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
            🌍 Outside the Code
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            When I’m not debugging or deploying something ridiculous, I’m probably exploring weird tech, playing Helldivers,
            or binging a sci-fi show. (Andor is elite, and you know it.)
          </p>
        </section>
        {/* Currently Working On Section */}
        {currentWorkItems.length > 0 && (
          <section className="w-full max-w-6xl">
            <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600 dark:text-indigo-400">
              🔧 Currently Working On
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentWorkItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  {item.mainImage && (
                    <img
                      src={urlFor(item.mainImage).width(800).height(400).url()}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                  )}

                  <div className="p-6 flex flex-col gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                    </div>

                    {item.links && item.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {item.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
