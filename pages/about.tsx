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
      <main className="min-h-screen px-4 pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative">
        {/* Ambient glow effects for both light and dark mode */}
        <div className="absolute top-1/3 left-1/3 w-1/2 h-1/2 bg-blue-500/5 dark:bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-violet-500/5 dark:bg-violet-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Content container - now using flex layout for better structure */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Bio sections container - narrower for better readability */}
          <div className="max-w-3xl mx-auto mb-20">
            {/* Original Bio Section */}
            <section className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block pb-2 border-b-2 border-purple-300/30 dark:border-purple-500/30">
                About Me
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                I'm Tristan — a developer, tutor, and tinkerer obsessed with building clever things from scratch. I run multiple projects, from geospatial games to AI-driven platforms, and still somehow survive A-levels (barely). Whether it's deploying a multi-VC streaming platform or debugging WebRTC in a mobile app, I'm here for the chaos — and the tea.
              </p>
            </section>

            <section className="w-full mb-14">
              <h2 className="text-2xl font-semibold mb-5 text-indigo-600 dark:text-indigo-400">
                🧠 What I'm Into
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-3">
                <li>Real-time systems with TypeScript, Node.js, WebSockets, and React Native</li>
                <li>AI for weather forecasting using Graph Neural Networks (GNNs) — because storms should come with warnings, not surprises</li>
                <li>Streaming automation with OBS, NDI, and custom plugins for replays and camera control</li>
                <li>Ed-tech and tutoring platforms with scheduling, payment systems, and video calling</li>
                <li>Running a Delaware LLC for my game company (One Studio One Game, LLC)</li>
              </ul>
            </section>

            <section className="w-full mb-14">
              <h2 className="text-2xl font-semibold mb-5 text-indigo-600 dark:text-indigo-400">
                🧪 Recent Projects
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                I built a geospatial mobile game called <strong>Missile Wars</strong> (now paused) that let players launch digital missiles at real-world locations.
                I also ran <strong>Stream150</strong>, a 150-hour livestream with 10+ people, five PCs, and interactive chaos powered by donations.
                Lately, I’ve been building a full-stack tutoring platform with payment integration, scheduling, and Daily.co-based video calls.
              </p>
            </section>

            <section className="w-full">
              <h2 className="text-2xl font-semibold mb-5 text-indigo-600 dark:text-indigo-400">
                🌍 Outside the Code
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coaching swimmers, deploying WebRTC calls, or arguing with TypeScript, I’m probably rewatching <em>Andor</em>, grinding Helldivers, or plotting my escape to Western Australia.
                Also: never underestimate the power of a stupid idea executed well.
              </p>
            </section>
          </div>

          {/* "Currently Working On" Section - wider layout, separate from bio sections */}
          {currentWorkItems.length > 0 && (
            <section className="w-full max-w-6xl mx-auto">
              <div className="py-8 border-t border-gray-200 dark:border-gray-700 mb-10"></div>

              <h2 className="text-5xl font-bold mb-14 pb-4 text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                🔧 Currently Working On
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {currentWorkItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {item.mainImage && (
                      <img
                        src={urlFor(item.mainImage).width(800).height(400).url()}
                        alt={item.title}
                        className="w-full h-60 object-cover"
                      />
                    )}

                    <div className="p-6 flex flex-col gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
                      </div>

                      {item.links && item.links.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-3">
                          {item.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition hover:shadow-lg"
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
        </div>
      </main>
    </>
  )
}
