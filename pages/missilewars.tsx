'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { SetStateAction, useState } from 'react'
import Image from 'next/image'

const timelineData = [
    { id: 1, image: '/MissileWars/1.png', description: 'Initial app with map load and pin on user position' },
    { id: 2, image: '/MissileWars/2.png', description: 'Early UI prototypes of missile, player and loot drop circles' },
    { id: 3, image: '/MissileWars/3.png', description: 'Inital player loading onto map' },
    { id: 4, image: '/MissileWars/4.png', description: 'Player movement UI updates' },
    { id: 5, image: '/MissileWars/5.jpeg', description: 'Missile library development and testing' },
    { id: 6, image: '/MissileWars/6.png', description: 'Multiplayer architecture setup with backend alpha implementation' },
    { id: 7, image: '/MissileWars/7.png', description: 'Improved dynamic missile library' },
    { id: 8, image: '/MissileWars/8.png', description: 'User interface improvements and airdrops randomly spawning' },
    { id: 9, image: '/MissileWars/9.png', description: 'Missile movement from point A to B with trajectory line' },
    { id: 10, image: '/MissileWars/10.png', description: 'Quick add nearby friends', meta: 'UI/UX was later improved this was a logic test' },
    { id: 11, image: '/MissileWars/11.png', description: 'Inital profile page', meta: 'UI/UX was later improved this was a logic test' },
    { id: 12, image: '/MissileWars/12.png', description: 'Login Page' },
    { id: 13, image: '/MissileWars/13.png', description: 'Registration page' },
    { id: 14, image: '/MissileWars/14.png', description: 'Realtime updating healthbar', meta: 'Also note the improved navbar' },
    { id: 15, image: '/MissileWars/15.png', description: 'Missile Firing!!' },
    { id: 16, image: '/MissileWars/16.png', description: 'Store page introduced based off concept art', meta: 'Note: The premium store changed it to be real money purchases.' },
    { id: 17, image: '/MissileWars/17.png', description: 'Added a run countdown when a missile was nearby to get out radius' },
    { id: 18, image: '/MissileWars/18.png', description: 'Updated profile with user inventory tab' },
    { id: 19, image: '/MissileWars/19.png', description: 'Added the ability to load other users health' },
    { id: 20, image: '/MissileWars/20.png', description: 'Added dark mode support for every page' },
    { id: 21, image: '/MissileWars/21.png', description: 'Added leagues and rankings to improve player progression' },
    { id: 22, image: '/MissileWars/22.png', description: 'Added shields to protect players if needed' },
    { id: 23, image: '/MissileWars/23.png', description: 'Accessible missle details', meta: 'Made all missile clickable with live details' },
    { id: 24, image: '/MissileWars/24.png', description: 'Players from all over the world playing' },
    { id: 25, image: '/MissileWars/25.jpeg', description: 'Realtime messaging using firebase', meta: 'Players could also send inventory items!' },
    { id: 26, image: '/MissileWars/26.png', description: 'Demonstration of UI improvments', meta: 'This was a policy acceptance page at first app load.' },
    { id: 27, image: '/MissileWars/27.jpeg', description: 'Added a system that tracked user speed and estimated what vehicle they were on.', meta: 'One of my favorite features' },
    { id: 28, image: '/MissileWars/28.png', description: 'Silly update involving changing the skin of missile to whatever you like!' },
    { id: 29, image: '/MissileWars/29.png', description: 'Example of the map with the silly update', meta: 'Note how some of the map components UI has been updated over time.' },
    { id: 30, image: '/MissileWars/30.png', description: 'Last feature added was a guide tutorial instructing you how to use the app!' },
]

const conceptArtData = [
    { id: 1, image: '/MissileWars/ConceptArt/Free_Shop_Draft.png', title: 'Shop Concept' },
    { id: 2, image: '/MissileWars/ConceptArt/Friends.png', title: 'Friends Interface' },
    { id: 3, image: '/MissileWars/ConceptArt/Login.png', title: 'Login Screen' },
    { id: 4, image: '/MissileWars/ConceptArt/Map.jpeg', title: 'Game Map' },
    { id: 5, image: '/MissileWars/ConceptArt/Profile.png', title: 'Profile Page' },
]

type GalleryImageMode = 'contain' | 'cover'

export default function MissileWars() {
    const [selectedImage, setSelectedImage] = useState(timelineData[0])
    const [selectedConcept, setSelectedConcept] = useState<null | typeof conceptArtData[0]>(null)
    const [galleryMode, setGalleryMode] = useState<GalleryImageMode>('contain')
    const [descriptionAnimation, setDescriptionAnimation] = useState(false)

    const toggleGalleryMode = () => {
        setGalleryMode(prev => (prev === 'contain' ? 'cover' : 'contain'))
    }

    const handleImageChange = (item: SetStateAction<{ id: number; image: string; description: string; meta?: undefined } | { id: number; image: string; description: string; meta: string }>) => {
        setDescriptionAnimation(true)
        setSelectedImage(item)
        setTimeout(() => setDescriptionAnimation(false), 500) // Reset animation after 500ms

        // Scroll the timeline to the top of the screen with a 5-pixel offset
        const timelineElement = document.querySelector('.timeline-section');
        if (timelineElement) {
            const offset = -40; // Adjust the scroll position by 5 pixels
            const topPosition = timelineElement.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">

                {/* Hero */}
                <motion.section
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                        Missile Wars Revival
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        A fast-paced multiplayer game powered by WebSockets and strategy.
                    </p>
                </motion.section>

                {/* About the Project */}
                <motion.section
                    className="max-w-4xl mx-auto mb-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400">
                        Missile Wars Revival is a real-time, cross-platform multiplayer game blending fast-paced action and tactical decision-making. Built from scratch using modern web technologies, it supports synchronized gameplay via WebSockets, a fully custom backend, and rich player progression systems.
                    </p>
                </motion.section>

                {/* Timeline Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 timeline-section">
                    <motion.div
                        className="relative h-[50vh] lg:h-[65vh] rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                        layoutId="main-image"
                        onClick={toggleGalleryMode}
                    >
                        <Image
                            src={selectedImage.image}
                            alt={`Development stage ${selectedImage.id}`}
                            fill
                            className={`object-${galleryMode} bg-gray-900 transition-all duration-300`}
                            priority
                        />
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            Click to {galleryMode === 'contain' ? 'fill' : 'fit'}
                        </div>
                    </motion.div>

                    <div className="flex flex-col h-[50vh] lg:h-[65vh]">
                        <h2 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                            Development Timeline
                        </h2>
                        <div className="flex-grow overflow-y-auto p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                                {timelineData.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer ${selectedImage.id === item.id ? 'ring-2 ring-indigo-500' : ''
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleImageChange(item)}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={`Timeline stage ${item.id}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                            <span className="text-white font-semibold text-sm">Stage {item.id}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stage Details */}
                <motion.section
                    className="max-w-7xl mx-auto mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                                Stage {selectedImage.id} Details
                            </h2>
                            <div 
                                className={`transition-transform duration-500 ${descriptionAnimation ? 'scale-105' : ''}`}
                            >
                                <p 
                                    className={`text-base text-gray-700 dark:text-gray-300 mb-2 transition-all duration-500 ${descriptionAnimation ? 'bg-yellow-200 dark:bg-yellow-800' : ''}`}
                                >
                                    {selectedImage.description}
                                </p>
                                {selectedImage.meta && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">{selectedImage.meta}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                                Technical Phase
                            </h3>
                            <div className="space-y-2">
                                {selectedImage.id <= 5 && (
                                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg">
                                        <h4 className="font-medium text-sm">Design Phase</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-300">UI/UX planning and initial prototypes</p>
                                    </div>
                                )}
                                {selectedImage.id > 5 && selectedImage.id <= 15 && (
                                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg">
                                        <h4 className="font-medium text-sm">Core Development</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-300">Implementation of game mechanics and systems</p>
                                    </div>
                                )}
                                {selectedImage.id > 15 && (
                                    <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg">
                                        <h4 className="font-medium text-sm">Polish & Launch</h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-300">Final refinements and deployment</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    className="max-w-7xl mx-auto mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                        Technology Stack
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                        {['WebSocket', 'Node.js', 'React', 'TypeScript', 'Websockets', 'Express', 'Prisma', 'Expo'].map((tech) => (
                            <motion.div
                                key={tech}
                                className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg text-center text-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Developer Notes */}
                <motion.details className="max-w-4xl mx-auto mt-4 bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl text-sm">
                    <summary className="cursor-pointer font-semibold text-indigo-700 dark:text-indigo-300">
                        Developer Notes (Click to expand)
                    </summary>
                    <p className="mt-2 text-gray-700 dark:text-gray-200">
                        I led development for <strong>Missile Wars Revival</strong>, building a full real-time infrastructure using Node.js and WebSockets. I originally joined the project as a junior frontend developer, but my passion and initiative saw me promoted—first to lead frontend, then to project lead.
                        <br /><br />
                        Over the course of development, I rewrote the entire frontend codebase, refactored major portions of the backend, and introduced features like an AI opponent for off-peak matchmaking. This project was a deep dive into multiplayer architecture, system design, and gameplay balance—while also teaching me how to keep things fun.
                    </p>
                </motion.details>

                {/* Concept Art Section */}
                <motion.section
                    className="max-w-7xl mx-auto mt-16 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Concept Art & Design
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conceptArtData.map((concept) => (
                            <motion.div
                                key={concept.id}
                                className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedConcept(concept)}
                            >
                                <Image
                                    src={concept.image}
                                    alt={concept.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-white text-lg font-semibold">{concept.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {selectedConcept && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedConcept(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={selectedConcept.image}
                                        alt={selectedConcept.title}
                                        fill
                                        className="object-contain"
                                        quality={100}
                                    />
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedConcept(null)
                                    }}
                                    className="absolute top-4 right-4 text-white text-xl bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                                >
                                    ✕
                                </button>
                                <div className="absolute bottom-4 left-4 right-4 text-center">
                                    <h3 className="text-white text-xl font-semibold bg-black/50 inline-block px-4 py-2 rounded-lg">
                                        {selectedConcept.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.section>

                {/* Credits */}
                <motion.section className="text-center text-sm text-gray-500 mt-8 mb-4">
                    <p>Concept art by community contributors. Multiplayer testing by the early player community.</p>
                </motion.section>
            </main>
        </>
    )
}