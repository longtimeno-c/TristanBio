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
        role: 'Lead Developer',
        company: 'Advanced Tutoring Platform - Oakforge Studios Ltd.',
        period: '2025 - Present',
        description: 'Developing a comprehensive learning management system connecting tutors and pupils with role-based access, real-time communication, and secure payment processing.',
        highlights: [
            'Built a secure access code system for invitation-based registration with email verification',
            'Implemented role-based dashboards with custom interfaces for Admin, Tutor, Pupil, and Parent users',
            'Developed real-time communication features including messaging, video calls, and notifications using Socket.IO',
            'Created advanced scheduling with recurring sessions, conflict detection and iCal export',
            'Integrated Stripe payment processing for tutoring services with financial reporting',
            'Designed cross-platform mobile application using React Native and Expo',
        ],
        tech: ['React Native', 'TypeScript', 'Node.js', 'Express', 'Redux', 'Socket.IO', 'Daily.co', 'Stripe', 'Expo', 'PostgreSQL', 'Prisma']
    },
    {
        id: 2,
        role: 'Co-Founder & Lead Developer',
        company: 'Oakforge Studios Ltd.',
        period: '2024 - Present',
        description: 'Co-founded a forward-thinking British company dedicated to shaping the future of education and entertainment through innovative software development.',
        highlights: [
            'Established company mission to craft engaging, user-centered platforms that empower learners and creators',
            'Developed educational software platforms with interactive and engaging digital tools',
            'Created immersive gaming experiences combining entertainment with educational value',
            'Built custom software solutions tailored to specific organizational needs',
            'Managed cross-functional teams spanning development, design, and product management'
        ],
        tech: ['TypeScript', 'React Native', 'Node.js', 'Next.js', 'TailwindCSS', 'Sanity CMS', 'PostgreSQL', 'Express', 'Prisma'] 
    },
    {
        id: 3,
        role: 'Game Developer',
        company: 'Missile Wars - One Gane Studio LLC',
        period: '2023 - 2024',
        description: 'Developed and maintained a popular multiplayer mini-game with sophisticated game mechanics and cross-platform functionality.',
        highlights: [
            'Designed player versus player gameplay with missile launching mechanics',
            'Implemented team-based strategy elements with defensive and offensive capabilities',
            'Created robust backend systems for user authentication and game state management',
            'Maintained privacy policies and terms of service for player protection',
            'Developed modular architecture allowing for easy expansion and updates'
        ],
        tech: ['Java', 'JavaScript', 'Server Architecture', 'Game Design', 'UI/UX Design', 'Multiplayer Systems']
    },
    {
        id: 4,
        role: 'IT Systems Developer',
        company: 'Southampton University - Muvis Department',
        period: '2023',
        description: 'Developed IT monitoring systems working alongside Professor Richard Boardman.',
        highlights: [
            'Implemented infrastructure monitoring solutions for university systems',
            'Worked with Icinga2 and Cacti for system optimization and reporting',
            'Gained practical experience in enterprise-level IT systems maintenance',
            'Documented system architecture and monitoring procedures',
            'Collaborated with academic staff to meet research computing requirements'
        ],
        tech: ['Icinga2', 'Cacti', 'Infrastructure Monitoring', 'Linux Systems', 'Network Management']
    },
    {
        id: 5,
        role: 'Development Team Member',
        company: 'Minecraft Middle Earth',
        period: '2022 - 2023',
        description: 'Assisted in managing multi-server system for a 20,000+ user community.',
        highlights: [
            'Helped manage complex multi-server infrastructure',
            'Developed and maintained custom resource packs and models',
            'Implemented game mechanics and interactive elements',
            'Supported a large-scale gaming community with technical solutions',
            'Collaborated with international team members on project development'
        ],
        tech: ['Server Management', 'Game Development', 'Resource Pack Development', 'Community Management', 'Java', 'Git']
    },
    {
        id: 6,
        role: 'Website Manager',
        company: 'Taunton Deane Swimming Club',
        period: '2022 - 2024',
        description: 'Volunteer website manager while also serving as a swimming coach.',
        highlights: [
            'Redesigned and maintained the club website for improved user experience',
            'Managed digital communications and event announcements',
            'Utilized Level 2 swimming teacher certification for coaching',
            'Coordinated online registration and member management systems',
            'Created digital resources for swim training and technique development'
        ],
        tech: ['Web Development', 'Content Management', 'Digital Communication', 'HTML/CSS', 'WordPress']
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
        { name: 'TypeScript/JavaScript', level: 90 },
        { name: 'React Native/React', level: 90 },
        { name: 'Node.js/Express', level: 85 },
        { name: 'Next.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL/Prisma', level: 80 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'Socket.IO/WebSockets', level: 80 },
        { name: 'Redux/State Management', level: 75 },
        { name: 'API Integration', level: 85 },
        { name: 'Infrastructure Management', level: 70 },
    ],
    tools: [
        { name: 'Git & Version Control', level: 90 },
        { name: 'Expo', level: 85 },
        { name: 'Sanity CMS', level: 80 },
        { name: 'Server Administration', level: 75 },
        { name: 'Payment APIs (Stripe)', level: 75 },
        { name: 'Daily.co Video Integration', level: 80 },
        { name: 'Icinga2/Cacti', level: 70 },
        { name: 'Game Development', level: 75 }
    ]
}

// Updated achievements data
export const achievements: string[] = [
    'Co-founder of Oakforge Studios Ltd., a British educational software company',
    'Lead Developer of Advanced Tutoring Platform with comprehensive user management',
    'Developer of Missile Wars multiplayer game with large active user base',
    'Computer Science Scholarship at Taunton School',
    'Alan Turing Prize for Computer Science',
    'Gold Duke of Edinburgh Award',
    'Level 2 Swimming Teacher Certification',
    'Cambridge University Computer Science Course Completion',
    'Contributor to 20,000+ User Gaming Community',
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
                {/* Enhanced ambient glow effects */}
                <div className="absolute top-1/3 left-1/3 w-1/2 h-1/2 bg-emerald-500/5 dark:bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-blue-500/5 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none animate-pulse-slower"></div>
                <div className="absolute top-1/4 right-1/4 w-1/4 h-1/4 bg-purple-500/5 dark:bg-purple-500/20 blur-[90px] rounded-full pointer-events-none animate-float"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Enhanced Header Section */}
                    <div className="text-center mb-16">
                        <motion.h1
                            className="text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block pb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Curriculum Vitae
                        </motion.h1>
                        <motion.p 
                            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Lead Developer & Co-Founder with expertise in educational technology and full-stack development
                        </motion.p>
                    </div>

                    {/* Experience Section with centered scrollview */}
                    <section className="mb-16">
                        <div className="flex items-center mb-8">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center mr-4 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                                Experience
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Timeline Navigation - Now with centered scrolling */}
                            <div className="relative">
                                <div 
                                    ref={scrollContainerRef}
                                    className="relative h-[520px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 dark:scrollbar-thumb-indigo-400 dark:scrollbar-track-gray-700 pr-4 scroll-smooth rounded-xl border border-gray-100 dark:border-gray-700 shadow-md"
                                >
                                    {/* Padding container with conditional padding */}
                                    <div className={`${activeExp.id === 1 ? 'pt-4 pb-[450px]' : 'py-[225px]'}`}>
                                        <div className="space-y-3">
                                            {experiences.map((exp) => (
                                                <motion.button
                                                    id={`exp-${exp.id}`}
                                                    key={exp.id}
                                                    onClick={() => setActiveExp(exp)}
                                                    className={`w-full text-left p-4 rounded-xl transition-all ${
                                                        activeExp.id === exp.id
                                                            ? 'bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 shadow-md'
                                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-sm'
                                                    }`}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                                                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">{exp.company}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500 ml-4 mt-1">{exp.period}</p>
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
                                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100/80 dark:border-gray-700/80 h-[520px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 dark:scrollbar-thumb-indigo-400 dark:scrollbar-track-gray-700 relative"
                                >
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-emerald-300/5 to-blue-500/5 dark:from-emerald-500/5 dark:to-blue-700/5 rounded-full blur-xl -z-10"></div>
                                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-300/5 to-emerald-500/5 dark:from-blue-500/5 dark:to-emerald-700/5 rounded-full blur-xl -z-10"></div>
                                    
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center mr-3 shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                                    {activeExp.role}
                                                </h3>
                                                <p className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                                                    {activeExp.company}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="ml-0 md:ml-auto mt-2 md:mt-0 text-xs font-medium bg-gradient-to-r from-emerald-400 to-blue-500 text-white py-1 px-2 rounded-full shadow-sm">
                                            {activeExp.period}
                                        </span>
                                    </div>
                                    
                                    <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {activeExp.description}
                                        </p>
                                    </div>
                                    
                                    <h4 className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Key Responsibilities & Achievements
                                    </h4>
                                    
                                    <ul className="space-y-2 mb-4">
                                        {activeExp.highlights.map((highlight, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <span className="h-4 w-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    
                                    <h4 className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                        Technologies Used
                                    </h4>
                                    
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeExp.tech.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                className="px-2 py-0.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                transition={{ delay: index * 0.03 }}
                                                whileHover={{ y: -2, scale: 1.05 }}
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
                        <div className="flex items-center mb-8">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mr-4 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Skills
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Technical Skills */}
                            <motion.div
                                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-emerald-300/5 to-blue-500/5 dark:from-emerald-500/5 dark:to-blue-700/5 rounded-full blur-xl -z-10"></div>
                                
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center mr-3 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        Technical
                                    </h3>
                                </div>
                                
                                <div className="space-y-5">
                                    {skills.technical.map((skill, index) => (
                                        <motion.div 
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <div className="flex justify-between mb-1.5">
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 rounded-md text-xs font-medium">{skill.level}%</span>
                                            </div>
                                            <motion.div
                                                className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 relative"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                >
                                                    <span className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-white border-2 border-emerald-500"></span>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tools & Technologies */}
                            <motion.div
                                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {/* Background decoration */}
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-300/5 to-pink-500/5 dark:from-purple-500/5 dark:to-pink-700/5 rounded-full blur-xl -z-10"></div>
                                
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mr-3 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        Tools & Technologies
                                    </h3>
                                </div>
                                
                                <div className="space-y-5">
                                    {skills.tools.map((skill, index) => (
                                        <motion.div 
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <div className="flex justify-between mb-1.5">
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                                                <span className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 rounded-md text-xs font-medium">{skill.level}%</span>
                                            </div>
                                            <motion.div
                                                className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                >
                                                    <span className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 rounded-full bg-white border-2 border-purple-500"></span>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-16">
                        <div className="flex items-center mb-8">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mr-4 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                Education
                            </h2>
                        </div>
                        
                        <div className="grid gap-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.degree}
                                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Background decoration */}
                                    <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-40 h-40 bg-gradient-to-b from-purple-300/5 to-pink-500/5 dark:from-purple-500/5 dark:to-pink-700/5 rounded-full blur-xl -z-10`}></div>
                                    
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mr-3 shadow-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {edu.degree}
                                                </h3>
                                            </div>
                                            <p className="text-purple-600 dark:text-purple-400 font-medium ml-11">{edu.school}</p>
                                        </div>
                                        <span className="ml-11 md:ml-0 mt-2 md:mt-0 inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-800/30 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            {edu.period}
                                        </span>
                                    </div>
                                    
                                    <div className="ml-11 mt-6 mb-6">
                                        <h4 className="text-sm uppercase tracking-wider text-purple-600 dark:text-purple-400 font-semibold mb-3">
                                            Subjects
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {edu.subjects.map((subject, i) => (
                                                <motion.span
                                                    key={subject}
                                                    className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-sm border border-gray-200 dark:border-gray-600 shadow-sm"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 + (i * 0.05) }}
                                                    whileHover={{ y: -2 }}
                                                >
                                                    {subject}
                                                </motion.span>
                                            ))}
                                        </div>
                                        
                                        {edu.achievements && edu.achievements.length > 0 && (
                                            <>
                                                <h4 className="text-sm uppercase tracking-wider text-pink-600 dark:text-pink-400 font-semibold mb-3 mt-5">
                                                    Achievements
                                                </h4>
                                                <ul className="space-y-2">
                                                    {edu.achievements.map((achievement, i) => (
                                                        <motion.li
                                                            key={achievement}
                                                            className="flex items-start"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 + (i * 0.05) }}
                                                        >
                                                            <span className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-400 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </span>
                                                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Additional Achievements Section */}
                    <section className="mb-16">
                        <div className="flex items-center mb-8">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center mr-4 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                                Additional Achievements
                            </h2>
                        </div>
                        
                        <motion.div
                            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-pink-300/5 to-red-500/5 dark:from-pink-500/5 dark:to-red-700/5 rounded-full blur-xl -z-10"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-300/5 to-pink-500/5 dark:from-red-500/5 dark:to-pink-700/5 rounded-full blur-xl -z-10"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={achievement}
                                        className="flex items-start p-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-50/50 hover:to-red-50/50 dark:hover:from-pink-900/10 dark:hover:to-red-900/10 transition-colors group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.07 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-400 to-red-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 shadow-sm shadow-pink-500/20 group-hover:scale-110 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Download CV Button - Now with improved styling */}
                    <motion.div
                        className="flex justify-center mt-16 mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.a
                            href="/api/generate-cv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl hover:shadow-xl shadow-md shadow-emerald-500/20 transition-all text-lg font-medium border border-emerald-400/20"
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px -5px rgba(59, 130, 246, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download PDF Version
                        </motion.a>
                    </motion.div>
                </div>
            </main>
        </>
    )
}