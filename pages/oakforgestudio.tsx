import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { sanity } from '../src/sanity/lib/client'
import { urlFor } from '../src/sanity/lib/sanityImage'

// Define types for Oakforge work items
type OakforgeWorkItem = {
    _id: string
    title: string
    description: string
    completionDate: string
    projectType: string
    technologies: string[]
    mainImage?: any
    gallery?: any[]
    links?: {
        label: string
        url: string
    }[]
    testimonial?: string
    featured: boolean
    order: number
}

export default function OakforgeStudio() {
    const [workItems, setWorkItems] = useState<OakforgeWorkItem[]>([])

    // Fetch work items from Sanity
    useEffect(() => {
        sanity.fetch(
            `*[_type == "oakforgeWork"] | order(order asc){
        _id,
        title,
        description,
        completionDate,
        projectType,
        technologies,
        mainImage,
        gallery,
        links,
        testimonial,
        featured,
        order
      }`
        ).then(setWorkItems)
    }, [])

    // Animation variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen relative">
                {/* Background Image with Overlay */}
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <div className="relative h-full w-full">
                        <Image
                            src="/oakforge/oakforgestudioback.png"
                            alt="Oakforge Studios Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 px-4 pt-32 pb-16 max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <section className="mb-20 text-center">
                        <div className="flex justify-center mb-8">
                            <div className="flex justify-center mb-8">
                                <Image
                                    src="/oakforge/oakforgestudioicon.png"
                                    alt="Oakforge Studios Icon"
                                    width={120}
                                    height={120}
                                    className="rounded-full border-2 border-amber-600 shadow-lg shadow-amber-600/20"
                                />
                            </div>
                        </div>

                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-4 text-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Oakforge Studios Ltd.</span>
                        </motion.h1>

                        <motion.div
                            className="max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                A forward-thinking British company dedicated to shaping the future of education and entertainment through innovative software development.
                            </p>
                        </motion.div>
                    </section>

                    {/* Mission Section */}
                    <section className="mb-20">
                        <motion.div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-800/30 shadow-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-amber-500">Our Mission</h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Our mission is to craft engaging, user-centered platforms that empower learners, creators, and communities alike.
                                From cutting-edge educational tools like Advanced Tutoring to immersive digital experiences in gaming and beyond,
                                Oakforge combines years of expertise in technology with a commitment to quality craftsmanship.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                With a strong focus on functionality, efficiency, and lasting impact, Oakforge Studios Ltd. seeks to foster growth,
                                enhance learning opportunities, and inspire creativity through intuitive, scalable software solutions.
                            </p>
                        </motion.div>
                    </section>

                    {/* What We Do Section */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-white text-center">
                            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">What We Do</span>
                        </h2>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30 shadow-lg hover:shadow-amber-600/20 transition-all hover:-translate-y-1"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-800/20 text-amber-500 mb-4">
                                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">Educational Software</h3>
                                <p className="text-gray-300">
                                    Developing innovative platforms that enhance learning experiences through interactive and engaging digital tools designed for modern education.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30 shadow-lg hover:shadow-amber-600/20 transition-all hover:-translate-y-1"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-800/20 text-amber-500 mb-4">
                                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">Game Development</h3>
                                <p className="text-gray-300">
                                    Creating immersive gaming experiences that combine entertainment with educational value, fostering both enjoyment and growth.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-amber-800/30 shadow-lg hover:shadow-amber-600/20 transition-all hover:-translate-y-1"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-800/20 text-amber-500 mb-4">
                                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">Custom Software Solutions</h3>
                                <p className="text-gray-300">
                                    Building tailored applications that address specific needs and challenges faced by organizations and individuals in the digital age.
                                </p>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Our Work Section */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-8 text-white text-center">
                            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Our Work</span>
                        </h2>

                        {workItems.length > 0 ? (
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {workItems.map(item => (
                                    <motion.div
                                        key={item._id}
                                        className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-800/30 shadow-lg hover:shadow-amber-600/20 transition-all"
                                        variants={itemVariants}
                                    >
                                        {item.mainImage && (
                                            <div className="relative h-60 w-full overflow-hidden">
                                                <Image
                                                    src={urlFor(item.mainImage).width(800).height(480).url()}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                                                />
                                                {item.featured && (
                                                    <div className="absolute top-4 right-4 bg-amber-500 text-xs font-bold px-2 py-1 rounded-full text-gray-900">
                                                        Featured
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                                <span className="text-xs font-semibold bg-gray-800 text-amber-400 px-2 py-1 rounded">
                                                    {item.projectType}
                                                </span>
                                            </div>

                                            <p className="text-gray-300 mb-4 line-clamp-3">{item.description}</p>

                                            {item.technologies && item.technologies.length > 0 && (
                                                <div className="mb-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.technologies.map(tech => (
                                                            <span
                                                                key={tech}
                                                                className="text-xs bg-amber-900/30 text-amber-300 px-2 py-1 rounded-full"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {item.testimonial && (
                                                <div className="mb-4 bg-gray-800/50 p-3 rounded-lg border-l-2 border-amber-500">
                                                    <p className="text-sm italic text-gray-300">{item.testimonial}</p>
                                                </div>
                                            )}

                                            {item.links && item.links.length > 0 && (
                                                <div className="flex gap-3">
                                                    {item.links.map(link => (
                                                        <a
                                                            key={link.url}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                                                        >
                                                            {link.label} →
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="text-center py-16 bg-gray-900/50 rounded-xl backdrop-blur-sm">
                                <p className="text-gray-300">No work items found. Please add some projects in the Sanity Studio.</p>
                            </div>
                        )}
                    </section>

                    {/* Contact Section */}
                    <section className="mb-10">
                        <motion.div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-800/30 shadow-xl text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-amber-500">Get In Touch</h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                Explore our diverse offerings and join us in forging a future where learning and digital entertainment meet seamlessly.
                            </p>
                            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-medium rounded-lg shadow-lg hover:shadow-amber-600/30 transition-all transform hover:-translate-y-1">
                                Contact Oakforge Studios
                            </button>
                        </motion.div>
                    </section>

                    {/* Footer */}
                    <footer className="text-center text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} Oakforge Studios Ltd. All rights reserved.</p>
                    </footer>
                </div>
            </main>
        </>
    )
}
