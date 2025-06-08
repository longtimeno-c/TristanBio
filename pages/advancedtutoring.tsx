'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import Image from 'next/image'

// Timeline data showcasing the development process
const timelineData = [
    { 
        id: 1, 
        title: 'Access Code System',
        description: 'Invitation-based registration using secure access codes with email verification',
        tech: ['Node.js', 'JWT', 'JSON Storage'],
        phase: 'Authentication'
    },
    { 
        id: 2, 
        title: 'User Management',
        description: 'Multiple user roles: Admin, Tutor, Pupil, and Parent with specialized permissions',
        tech: ['React', 'TypeScript', 'Redux'],
        phase: 'Core Features'
    },
    { 
        id: 3, 
        title: 'Role-Based Dashboards',
        description: 'Custom interfaces for each user role with dark/light mode support',
        tech: ['Next.js', 'TailwindCSS', 'React Query'],
        phase: 'UI/UX'
    },
    { 
        id: 4, 
        title: 'Communication System',
        description: 'Direct messaging, video calls, and system notifications with Socket.IO',
        tech: ['WebSocket', 'Socket.IO', 'Push Notifications'],
        phase: 'Communication'
    },
    { 
        id: 5, 
        title: 'Calendar Integration',
        description: 'Advanced scheduling with recurring sessions, conflict detection, and iCal export',
        tech: ['FullCalendar', 'date-fns', 'iCal'],
        phase: 'Scheduling'
    },
    { 
        id: 6, 
        title: 'Progress Tracking',
        description: 'Notes system and activity logs to track tutoring progress and development',
        tech: ['Chart.js', 'JSON Storage', 'Redux'],
        phase: 'Tutoring Tools'
    },
    { 
        id: 7, 
        title: 'Financial Management',
        description: 'Payment tracking, service charges, and detailed financial reporting',
        tech: ['Payment APIs', 'Financial Reports', 'Receipts'],
        phase: 'Payments'
    },
    { 
        id: 8, 
        title: 'Mobile Development',
        description: 'Cross-platform React Native app for web, iOS, and Android',
        tech: ['React Native', 'Expo', 'Push Notifications'],
        phase: 'Mobile'
    },
    {
        id: 9,
        title: 'Admin Tools',
        description: 'User management, access code generation, and system monitoring',
        tech: ['Admin Dashboard', 'Analytics', 'User Management'],
        phase: 'Administration'
    }
]

// Key features of the platform
const features = [
    {
        title: 'Multiple User Roles',
        description: 'Admin, Tutor, Pupil, and Parent roles with specific permissions and interfaces',
        icon: '👥'
    },
    {
        title: 'Access Code System',
        description: 'Invitation-based registration system with secure code generation and management',
        icon: '🔒'
    },
    {
        title: 'Comprehensive Communication',
        description: 'Messaging, video calls, notifications, and real-time updates with Socket.IO',
        icon: '💬'
    },
    {
        title: 'Advanced Scheduling',
        description: 'Calendar with recurring sessions, rescheduling requests and iCal integration',
        icon: '📅'
    },
    {
        title: 'Financial Tools',
        description: 'Payment tracking, service charges, reports and receipt generation',
        icon: '💳'
    },
    {
        title: 'Cross-Platform',
        description: 'Web platform plus native mobile apps for iOS and Android via React Native',
        icon: '🌐'
    },
    {
        title: 'Tutoring Progress Tools',
        description: 'Notes system, activity logs and student development tracking',
        icon: '📊'
    },
    {
        title: 'Parent-Child Accounts',
        description: 'Parents can manage and oversee their children\'s tutoring activities',
        icon: '👨‍👧‍👦'
    }
]

// User flow steps
const userFlowSteps = [
    {
        step: 1,
        title: 'Admin creates tutor access codes',
        description: 'Platform administrators generate secure invitation codes for tutors'
    },
    {
        step: 2,
        title: 'Tutors register with codes',
        description: 'Tutors use the access codes to create accounts with verification'
    },
    {
        step: 3,
        title: 'Tutors generate student codes',
        description: 'Registered tutors create access codes for their pupils'
    },
    {
        step: 4, 
        title: 'Students register with codes',
        description: 'Pupils use tutor-provided codes to create their accounts'
    },
    {
        step: 5,
        title: 'Email verification',
        description: 'If enabled, users must verify their email before accessing full features'
    }
]

export default function AdvancedTutoring() {
    const [selectedFeature, setSelectedFeature] = useState(timelineData[0])
    const [activePhase, setActivePhase] = useState('Authentication')

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <main className="pt-32 pb-20 dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative">
                {/* Ambient glow effects */}
                <div className="absolute top-20 left-1/4 w-1/2 h-1/2 bg-blue-500/20 dark:block hidden blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute top-80 right-1/4 w-1/3 h-1/3 bg-purple-500/20 dark:block hidden blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 px-4 sm:px-6">
                    {/* Hero Section */}
                    <motion.section
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block pb-3 border-b-2 border-purple-300/30 dark:border-purple-500/30">
                            Advanced Tutoring Platform
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            A comprehensive learning management system connecting tutors and pupils
                        </p>
                    </motion.section>

                    {/* Platform Overview */}
                    <motion.section
                        className="max-w-4xl mx-auto mb-24 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Built with modern web technologies, the Advanced Tutoring Platform revolutionizes online education by providing a secure, feature-rich environment for educational relationships to flourish.
                        </p>
                    </motion.section>

                    {/* Key Features Grid */}
                    <motion.section
                        className="max-w-7xl mx-auto mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <span className="text-4xl mb-4 block">{feature.icon}</span>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Development Timeline */}
                    <motion.section
                        className="max-w-7xl mx-auto mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Development Journey
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Timeline Navigation */}
                            <div className="lg:col-span-1">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                        Development Phases
                                    </h3>
                                    <div className="space-y-2">
                                        {Array.from(new Set(timelineData.map(item => item.phase))).map((phase) => (
                                            <motion.button
                                                key={phase}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                                                    activePhase === phase
                                                        ? 'bg-indigo-500 text-white'
                                                        : 'hover:bg-indigo-100 dark:hover:bg-indigo-900'
                                                }`}
                                                onClick={() => setActivePhase(phase)}
                                                whileHover={{ x: 5 }}
                                            >
                                                {phase}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Content */}
                            <div className="lg:col-span-2">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                                        {selectedFeature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {selectedFeature.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedFeature.tech.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {timelineData
                                        .filter(item => item.phase === activePhase)
                                        .map((item) => (
                                            <motion.div
                                                key={item.id}
                                                className={`p-4 rounded-lg cursor-pointer transition-all ${
                                                    selectedFeature.id === item.id
                                                        ? 'bg-indigo-500 text-white'
                                                        : 'bg-white dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900'
                                                }`}
                                                onClick={() => setSelectedFeature(item)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <h4 className="font-medium text-sm mb-1">Stage {item.id}</h4>
                                                <p className="text-xs opacity-80">{item.title}</p>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Technical Stack */}
                    <motion.section
                        className="max-w-7xl mx-auto mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                            Technology Stack
                        </h2>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    {
                                        category: 'Frontend Development',
                                        techs: ['Next.js', 'TypeScript', 'TailwindCSS', 'Redux']
                                    },
                                    {
                                        category: 'Backend & Database',
                                        techs: ['Node.js', 'PostgreSQL', 'Redis', 'Prisma']
                                    },
                                    {
                                        category: 'Real-time Features',
                                        techs: ['WebSocket', 'Firebase', 'React Query', 'Socket.io']
                                    },
                                    {
                                        category: 'Mobile Development',
                                        techs: ['React Native', 'Expo', 'Native Modules']
                                    }
                                ].map((stack, index) => (
                                    <motion.div
                                        key={stack.category}
                                        className="space-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                                            {stack.category}
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {stack.techs.map((tech) => (
                                                <div 
                                                    key={tech}
                                                    className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg p-3 text-sm text-center shadow-lg"
                                                >
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Project Notes */}
                    <motion.section
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Built with modern web technologies and best practices for security, scalability, and user experience.
                        </p>
                    </motion.section>

                    {/* Detailed Project Description */}
                    <motion.section
                        className="max-w-4xl mx-auto mt-16 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                                Technical Overview
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    The Advanced Tutoring Platform is built on a modern tech stack that prioritizes performance, security, and scalability. The frontend leverages Next.js and TypeScript for type-safe, server-side rendered pages, while TailwindCSS provides a responsive and maintainable styling system.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Real-time features are powered by WebSocket and Firebase, enabling instant messaging, notifications, and live updates. The platform uses Redux for state management and React Query for efficient data fetching and caching.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    The backend infrastructure consists of Node.js services with PostgreSQL for persistent storage and Redis for caching. JWT handles authentication, while Prisma provides type-safe database access. Payment processing is integrated through both Stripe and PayPal APIs.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Mobile apps are developed using React Native and Expo, sharing business logic with the web platform while providing native performance and features. The entire system is designed with scalability in mind, utilizing microservices architecture and containerized deployments.
                                </p>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </main>
        </div>
    )
}