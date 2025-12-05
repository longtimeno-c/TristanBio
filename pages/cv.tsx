'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useState, useEffect, useRef } from 'react'
import { FaBriefcase, FaGraduationCap, FaCode, FaTrophy, FaDownload, FaCalendarAlt, FaBuilding, FaTools, FaLaptopCode } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

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
        id: 2,
        role: 'Full-Stack Developer (Contract)',
        company: 'Progress UK',
        period: '2024 - 2025',
        description: 'Delivered a full‑stack web platform for Progress UK, covering onboarding, authentication, events, newsroom, subscriptions, policy editing, Discord linking, and admin tools.',
        highlights: [
            'Implemented Stripe subscriptions: Checkout sessions, Billing Portal, webhooks, and subscription lifecycle management',
            'Built Express API with Prisma/PostgreSQL and JWT authentication',
            'Developed Expo Router (React Native Web) frontend: auth flows, newsroom, events, and GitHub-backed policy editing',
            'Integrated Resend for transactional email and Discord bot for role linking',
            'Automated builds and deploys via GitHub Actions to VPS with optional Vercel configs'
        ],
        tech: ['TypeScript', 'Expo Router', 'React Native Web', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Resend', 'Discord', 'GitHub App', 'Cloudflare Turnstile']
    },
    {
        id: 3,
        role: 'Lead Developer - Missile Wars',
        company: 'One Game One Studio LLC',
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
            'Computer Science (C)',
            'Mathematics (C)',
            'Geography (C)',
            'EPQ (B)'
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
        { name: 'Stripe (Payments/Billing)', level: 92 },
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
        { name: 'Stripe Webhooks/Checkout/Billing Portal', level: 90 },
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
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-16 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent dark:from-emerald-500/10 pointer-events-none" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Curriculum Vitae
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                Lead Developer & Co-Founder crafting innovative digital experiences
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        
                        {/* Left Column: Experience & Education (Main Content) */}
                        <div className="lg:col-span-8 space-y-12">
                            
                            {/* Experience Section */}
                            <section>
                                <div className="flex items-center mb-8">
                                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mr-4 text-emerald-600 dark:text-emerald-400">
                                        <FaBriefcase className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Professional Experience</h2>
                                </div>

                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
                                    {experiences.map((exp, index) => (
                                        <motion.div 
                                            key={exp.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                        >
                                            {/* Icon */}
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                <FaBriefcase className="w-4 h-4 text-white" />
                                            </div>
                                            
                                            {/* Card */}
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white">{exp.role}</h3>
                                                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mt-2 sm:mt-0 w-fit">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                                                    <FaBuilding className="w-3.5 h-3.5 mr-2" />
                                                    {exp.company}
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>
                                                
                                                {/* Highlights */}
                                                <ul className="space-y-2 mb-4">
                                                    {exp.highlights.slice(0, 3).map((highlight, i) => (
                                                        <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                                            <MdVerified className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 shrink-0" />
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Tech Tags */}
                                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                                                    {exp.tech.slice(0, 5).map(t => (
                                                        <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
                                                            {t}
                                                        </span>
                                                    ))}
                                                    {exp.tech.length > 5 && (
                                                        <span className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded-md">
                                                            +{exp.tech.length - 5} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Education Section */}
                            <section>
                                <div className="flex items-center mb-8">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4 text-blue-600 dark:text-blue-400">
                                        <FaGraduationCap className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Education</h2>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    {education.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white">{edu.degree}</h3>
                                                    <p className="text-blue-600 dark:text-blue-400 text-sm">{edu.school}</p>
                                                </div>
                                                <span className="text-xs font-medium px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300">
                                                    {edu.period}
                                                </span>
                                            </div>
                                            
                                            <div className="space-y-3">
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.subjects.map(sub => (
                                                        <span key={sub} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                                                            {sub}
                                                        </span>
                                                    ))}
                                                </div>
                                                {edu.achievements && (
                                                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
                                                        <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Key Achievements</p>
                                                        <ul className="space-y-1">
                                                            {edu.achievements.map((ach, i) => (
                                                                <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2 shrink-0" />
                                                                    {ach}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Skills & Achievements (Sidebar) */}
                        <div className="lg:col-span-4 space-y-8">
                            
                            {/* Download Button */}
                            <motion.a
                                href="/api/generate-cv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaDownload className="mr-2 group-hover:animate-bounce" />
                                Download PDF Resume
                            </motion.a>

                            {/* Technical Skills */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                                <div className="flex items-center mb-6">
                                    <FaLaptopCode className="w-5 h-5 text-purple-500 mr-3" />
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white">Technical Skills</h3>
                                </div>
                                <div className="space-y-4">
                                    {skills.technical.map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                                                <span className="text-slate-400 text-xs">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: index * 0.05 }}
                                                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                                <div className="flex items-center mb-6">
                                    <FaTools className="w-5 h-5 text-pink-500 mr-3" />
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white">Tools & Technologies</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <span key={skill.name} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-6">
                                    <FaTrophy className="w-5 h-5 text-yellow-400 mr-3" />
                                    <h3 className="font-bold text-lg">Honors & Awards</h3>
                                </div>
                                <ul className="space-y-4">
                                    {achievements.slice(0, 5).map((achievement, index) => (
                                        <li key={index} className="flex items-start text-sm text-slate-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 mr-3 shrink-0" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
