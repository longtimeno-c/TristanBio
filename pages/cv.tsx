'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useState, useEffect, useRef } from 'react'

// Types for our data structures
export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    tech: string[];
}

export interface Education {
    degree: string;
    school: string;
    period: string;
    subjects: string[];
    achievements?: string[];
}

export interface Skill {
    name: string;
    level: number;
}

export interface Skills {
    technical: Skill[];
    tools: Skill[];
}

// Updated experience data
export const experiences: Experience[] = [
    {
        id: 1,
        role: 'Developer',
        company: 'Advanced Tutoring',
        period: '2025 - Present',
        description: 'Leading development of geospatial applications while managing a global development team.',
        highlights: [
            'Creating an online platform for tutoring and educational resources',
            'Video calling and screensharing across multiple platforms',
            'Expo web app used to allow page switching while on a call',
            'Payment integration with Stripe for billing and payment processing',
        ],
        tech: ['TypeScript', 'React Native', 'Node.js', 'Expo', 'DailyCo', 'Stripe']
    },
    {
        id: 2,
        role: 'Full‑Stack Developer (Contract)',
        company: 'Progress UK',
        period: '2024 - 2025',
        description: 'Built and operated a full‑stack web platform covering onboarding, subscriptions, events, newsroom, and admin tools.',
        highlights: [
            'Implemented Stripe subscriptions: Checkout, Billing Portal, webhooks, and subscription lifecycle',
            'Designed Express API with Prisma/PostgreSQL and JWT auth',
            'Expo Router (React Native Web) frontend with auth, newsroom, events, and policy editing',
            'Integrated Resend email, Discord bot linking, and GitHub App for policy repos',
            'Automated web deploys via GitHub Actions to VPS; optional Vercel configs'
        ],
        tech: ['TypeScript', 'Expo Router', 'React Native Web', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Resend', 'GitHub', 'Discord', 'Cloudflare Turnstile']
    },
    {
        id: 3,
        role: 'CEO & Lead Developer',
        company: 'One Studio One Game, LLC',
        period: '2023 - 2024',
        description: 'Leading development of geospatial applications while managing a global development team.',
        highlights: [
            'Managing a global development team across multiple time zones',
            'Architecting and implementing geospatial applications',
            'Working with TypeScript, React Native, and AI technologies',
            'Optimizing team collaboration and project workflows'
        ],
        tech: ['TypeScript', 'React Native', 'AI', 'Node.js', 'Expo', 'PostgreSQL', 'Express', 'Prisma'] 
    },
    {
        id: 4,
        role: 'IT Systems Developer',
        company: 'Southampton University - Muvis Department',
        period: '2023',
        description: 'Developed IT monitoring systems working alongside Professor Richard Boardman.',
        highlights: [
            'Implemented infrastructure monitoring solutions',
            'Worked with Icinga2 and Cacti for system optimization',
            'Gained practical experience in enterprise-level IT systems',
        ],
        tech: ['Icinga2', 'Cacti', 'Infrastructure Monitoring']
    },
    {
        id: 5,
        role: 'Development Team Member',
        company: 'Minecraft Middle Earth',
        period: '2022 - 2023',
        description: 'Assisted in managing multi-server system for a 20,000+ user community.',
        highlights: [
            'Helped manage complex multi-server infrastructure',
            'Worked with custom resource packs and models',
            'Supported a large-scale gaming community',
        ],
        tech: ['Server Management', 'Resource Pack Development', 'Community Management']
    },
    {
        id: 6,
        role: 'Website Manager',
        company: 'Taunton Deane Swimming Club',
        period: '2022 - 2024',
        description: 'Volunteer website manager while also serving as a swimming coach.',
        highlights: [
            'Maintaining and updating club website',
            'Level 2 swimming teacher certification',
            'Managing digital presence and communications',
        ],
        tech: ['Web Development', 'Content Management', 'Digital Communication']
    }
]

// Updated education data
export const education: Education[] = [
    {
        degree: 'A-Levels',
        school: 'Taunton School',
        period: '2019 - 2025',
        subjects: [
            'Computer Science (Predicted A*)',
            'Mathematics (Predicted B)',
            'Geography (Predicted B)',
            'EPQ'
        ],
        achievements: [
            'Computer Science Scholarship Recipient',
            'Alan Turing Prize for Computer Science',
            'Gold Duke of Edinburgh Award'
        ]
    },
    {
        degree: 'GCSEs',
        school: 'Taunton School',
        period: '2019 - 2024',
        subjects: [
            'Mathematics (7)',
            'Geography (8)',
            'Computer Science (6)',
            'English Literature (6)',
            'English Language (4)',
            'Physics (6)',
            'Chemistry (6)',
            'Biology (6)'
        ]
    }
]

// Updated skills data
export const skills: Skills = {
    technical: [
        { name: 'Python', level: 90 },
        { name: 'TypeScript/JavaScript', level: 85 },
        { name: 'React Native', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Stripe (Payments/Billing)', level: 92 },
        { name: 'Infrastructure Management', level: 75 },
        { name: 'AI/ML', level: 70 }
    ],
    tools: [
        { name: 'Git & Version Control', level: 85 },
        { name: 'Stripe Webhooks/Checkout', level: 90 },
        { name: 'Icinga2/Cacti', level: 80 },
        { name: 'Server Administration', level: 85 },
        { name: 'Resource Pack Development', level: 75 }
    ]
}

// Updated achievements data
export const achievements: string[] = [
    'Computer Science Scholarship at Taunton School',
    'Alan Turing Prize for Computer Science',
    'Gold Duke of Edinburgh Award',
    'Level 2 Swimming Teacher Certification',
    'Cambridge University Computer Science Course Completion',
    'Managing 20,000+ User Gaming Community',
    'Regional-level Swimming Competitor'
]

export default function CV() {
    const [activeExp, setActiveExp] = useState(experiences[0])
    const [isScrolling, setIsScrolling] = useState(false)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Enhanced scroll to center function with special handling for first item
    const scrollToCenter = (element: HTMLElement) => {
        if (!scrollContainerRef.current) return
        
        setIsScrolling(true)
        const container = scrollContainerRef.current
        const containerHeight = container.clientHeight
        const elementTop = element.offsetTop
        const elementHeight = element.clientHeight
        
        // Calculate scroll position based on whether it's the first item
        const scrollPosition = activeExp.id === 1 
            ? 0  // First item goes to top
            : elementTop - (containerHeight / 2) + (elementHeight / 2)  // Others are centered
        
        container.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })

        // Reset scrolling state after animation
        setTimeout(() => setIsScrolling(false), 500)
    }

    // Update scroll position when active experience changes
    useEffect(() => {
        const activeElement = document.getElementById(`exp-${activeExp.id}`)
        if (activeElement) {
            scrollToCenter(activeElement)
        }
    }, [activeExp])

    return (
        <>
            <Navbar />
            <main className="min-h-screen px-4 pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative">
                {/* Ambient glow effects */}
                <div className="absolute top-1/3 left-1/3 w-1/2 h-1/2 bg-emerald-500/5 dark:bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-blue-500/5 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <motion.h1
                            className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block pb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Curriculum Vitae
                        </motion.h1>
                    </div>

                    {/* Experience Section with centered scrollview */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                            Experience
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Timeline Navigation - Now with centered scrolling */}
                            <div className="relative">
                                <div 
                                    ref={scrollContainerRef}
                                    className="relative h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 dark:scrollbar-thumb-indigo-400 dark:scrollbar-track-gray-700 pr-4 scroll-smooth"
                                >
                                    {/* Padding container with conditional padding */}
                                    <div className={`${activeExp.id === 1 ? 'pt-4 pb-[450px]' : 'py-[225px]'}`}>
                                        <div className="space-y-4">
                                            {experiences.map((exp) => (
                                                <motion.button
                                                    id={`exp-${exp.id}`}
                                                    key={exp.id}
                                                    onClick={() => setActiveExp(exp)}
                                                    className={`w-full text-left p-4 rounded-xl transition-all ${
                                                        activeExp.id === exp.id
                                                            ? 'bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20'
                                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                                    }`}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <h3 className="font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">{exp.period}</p>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Fade gradients to indicate scroll */}
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Experience Details */}
                            <div className="md:col-span-2">
                                <motion.div
                                    key={activeExp.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 dark:scrollbar-thumb-indigo-400 dark:scrollbar-track-gray-700"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {activeExp.role}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {activeExp.description}
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                        {activeExp.highlights.map((highlight, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <span className="text-emerald-500 mr-2">•</span>
                                                {highlight}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {activeExp.tech.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Skills
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Technical Skills */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                    Technical
                                </h3>
                                <div className="space-y-4">
                                    {skills.technical.map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                            </div>
                                            <motion.div
                                                className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                />
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Technologies */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                    Tools & Technologies
                                </h3>
                                <div className="space-y-4">
                                    {skills.tools.map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                            </div>
                                            <motion.div
                                                className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                />
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Education
                        </h2>
                        <div className="grid gap-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.degree}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.school}</p>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">{edu.period}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.subjects.map((subject, i) => (
                                            <span
                                                key={subject}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                                            >
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Additional Achievements Section */}
                    <section>
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                            Additional Achievements
                        </h2>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <ul className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <motion.li
                                        key={achievement}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-emerald-500 mr-2">•</span>
                                        {achievement}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Download CV Button - Now at the bottom */}
                    <motion.div
                        className="flex justify-center mt-16 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.a
                            href="/api/generate-cv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-shadow text-lg font-semibold"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download PDF Version
                        </motion.a>
                    </motion.div>
                </div>
            </main>
        </>
    )
}
