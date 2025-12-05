'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'
import { sanity } from '../src/sanity/lib/client'
import { urlFor } from '../src/sanity/lib/sanityImage'

// Define types for Advanced Tutoring assets
type AdvancedTutoringProject = {
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
    featured: boolean
}

// Technical breakdown modules
const technicalModules = [
    { 
        id: 'backend', 
        title: 'Backend & Security',
        phase: 'Core Architecture',
        description: 'Built on Node.js, Express, and PostgreSQL (Prisma). Features a unique "Access Code" onboarding flow where registration is impossible without a valid code. Codes carry metadata to automatically link parents to children. Includes device fingerprinting and "impersonation" mode for admins to debug user issues.',
        tech: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Turnstile'],
        details: [
            "Registration is impossible without a valid AccessCode.",
            "Smart Metadata in codes automatically links parents to children.",
            "Admins can 'impersonate' users via query params for debugging.",
            "Sensitive data stripping in eventController.js for privacy."
        ]
    },
    { 
        id: 'ai', 
        title: 'AI Tutor+ (Socratic)',
        phase: 'Artificial Intelligence',
        description: 'A premium subscription service that acts as a Socratic tutor. The system prompt explicitly instructs the AI to guide learning through questioning. It injects full assignment context (text, due dates) into the prompt and uses Multi-Modal analysis for PDFs and images.',
        tech: ['OpenAI GPT-4o', 'Vector Embeddings', 'pdf-parse', 'mammoth', 'Vision API'],
        details: [
            "System prompt enforces Socratic method: guide, don't answer.",
            "Context Injection: AI knows the assignment details and due dates.",
            "Multi-Modal: Parses PDFs, Word docs, and images (handwriting/formulas).",
            "Admin AI: Verifies tutor credentials (DBS, degrees) with fraud detection."
        ]
    },
    { 
        id: 'video', 
        title: 'Video Classroom',
        phase: 'Real-Time Comms',
        description: 'Fully integrated classroom environment built on WebRTC (Daily.co). Features dedicated screen sharing, Picture-in-Picture (PiP) to browse assignments while calling, and automatic bandwidth management.',
        tech: ['Daily.co', 'WebRTC', 'Socket.IO', 'Screen Sharing'],
        details: [
            "Picture-in-Picture allows browsing assignments while in a call.",
            "Dedicated screen sharing video element.",
            "Automatic bandwidth management for video quality.",
            "Permission Matrix ensures safe communication channels."
        ]
    },
    { 
        id: 'finance', 
        title: 'Financial Infrastructure',
        phase: 'Payments',
        description: 'Marketplace model using Stripe Connect for tutor payouts and RevenueCat for cross-platform subscription management. The system tracks KYC status and enforces service fees automatically.',
        tech: ['Stripe Connect', 'RevenueCat', 'Webhooks', 'KYC Compliance'],
        details: [
            "Tutors have Stripe Connect Express accounts for direct payouts.",
            "Platform takes a configurable service fee automatically.",
            "RevenueCat syncs subscription status across iOS, Android, and Web.",
            "Enforces KYC compliance before enabling payouts."
        ]
    },
    { 
        id: 'frontend', 
        title: 'Frontend Engineering',
        phase: 'User Experience',
        description: 'Built with Expo (React Native) and TypeScript. Uses "Provider Hell" pattern for global state (Auth, Socket, Call) and optimistic updates for a snappy feel. Includes Haptics for tactile feedback.',
        tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Reanimated'],
        details: [
            "SocketContext maintains connections across navigation.",
            "CallContext manages active call state (minimized/fullscreen).",
            "Optimistic updates for immediate UI feedback.",
            "Haptics integration for tactile feedback."
        ]
    },
    { 
        id: 'infra', 
        title: 'Infra & Storage',
        phase: 'Infrastructure',
        description: 'Scalable infrastructure with smart file storage using SHA-256 deduplication. Includes role-based storage quotas (up to 100TB for Admins) and automated cron jobs for maintenance and reminders.',
        tech: ['@vercel/blob', 'node-cron', 'Redis', 'SHA-256 Hashing'],
        details: [
            "Smart Storage: SHA-256 hashing for file deduplication.",
            "Role-based storage quotas (e.g., 100TB for Admins).",
            "Cron jobs for session reminders and cleanup.",
            "CSRF protection and secure headers (Helmet)."
        ]
    }
]

// Key features of the platform
const features = [
    {
        title: 'Role-Based Ecosystem',
        description: 'Secure hierarchy linking Parents, Pupils, and Tutors with strict permission matrices.',
        icon: '👥'
    },
    {
        title: 'Socratic AI Tutor',
        description: 'AI that guides learning via questioning, with full context of assignments and files.',
        icon: '🧠'
    },
    {
        title: 'Smart Access Codes',
        description: 'Invitation-only onboarding with metadata that auto-links family accounts.',
        icon: '🔐'
    },
    {
        title: 'Video Classroom',
        description: 'Integrated WebRTC calls with Screen Share and Picture-in-Picture mode.',
        icon: '📹'
    },
    {
        title: 'Stripe Connect',
        description: 'Marketplace payments with automated split fees and tutor payouts.',
        icon: '💳'
    },
    {
        title: 'Cross-Platform Sync',
        description: 'RevenueCat integration syncs subscriptions across Web, iOS, and Android.',
        icon: '🔄'
    },
    {
        title: 'Smart Storage',
        description: 'Deduplicated file storage with SHA-256 hashing and role-based quotas.',
        icon: '📂'
    },
    {
        title: 'Real-Time Context',
        description: 'Socket.IO messaging with "sticky" headers and assignment attachments.',
        icon: '💬'
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
    // Find first item in timeline data for initial selected feature
    const [activePhase, setActivePhase] = useState('Core Architecture')
    const [projectData, setProjectData] = useState<AdvancedTutoringProject | null>(null)
    const [activeSlide, setActiveSlide] = useState(0)
    
    // Initialize selected feature based on active phase
    const [selectedFeature, setSelectedFeature] = useState<any>(() => {
        const featuresInPhase = technicalModules.filter(item => item.phase === 'Core Architecture');
        return featuresInPhase.length > 0 ? featuresInPhase[0] : technicalModules[0];
    })
    
    // Function to determine how many items are visible based on screen width
    const getVisibleItemCount = () => {
        // Using window would cause hydration issues, so we estimate based on common breakpoints
        // This is a simplified version that will be used for calculations
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width < 640) return 1;      // Mobile
            if (width < 768) return 2;      // Small tablets
            if (width < 1024) return 3;     // Tablets
            if (width < 1280) return 4;     // Small desktops
            return 5;                       // Large desktops
        }
        return 5; // Default for server-side rendering
    };

    // Auto-advance carousel slides
    useEffect(() => {
        if (projectData?.gallery && projectData.gallery.length > 1) {
            const visibleItems = getVisibleItemCount();
            const maxSlide = Math.ceil(projectData.gallery.length / visibleItems) - 1;
            const timer = setTimeout(() => {
                setActiveSlide(prev => (prev === maxSlide ? 0 : prev + 1));
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [activeSlide, projectData?.gallery])

    // Fetch project data from Sanity
    useEffect(() => {
        // Use a more flexible query that will match "Advanced Tutoring Platform", "Advanced Tutoring", etc.
        sanity.fetch(
            `*[_type == "oakforgeWork" && title match "*Advanced Tutoring*" || title match "*Tutoring Platform*"][0]{
                _id,
                title,
                description,
                completionDate,
                projectType,
                technologies,
                mainImage,
                gallery[] {
                    asset-> {
                        _id,
                        url
                    },
                    caption
                },
                links,
                featured
            }`
        ).then((data) => {
            if (data) {
                console.log("Found Advanced Tutoring project:", data);
                setProjectData(data);
            } else {
                // Fallback to search for educational projects if no direct match
                console.log("No exact match found, trying to find educational projects");
                return sanity.fetch(
                    `*[_type == "oakforgeWork" && projectType == "educational"][0]{
                        _id,
                        title,
                        description,
                        completionDate,
                        projectType,
                        technologies,
                        mainImage,
                        gallery[] {
                            asset-> {
                                _id,
                                url
                            },
                            caption
                        },
                        links,
                        featured
                    }`
                ).then((fallbackData) => {
                    if (fallbackData) {
                        console.log("Found educational project:", fallbackData);
                        setProjectData(fallbackData);
                    }
                });
            }
        }).catch(error => {
            console.error("Error fetching project data:", error);
        });
    }, []);

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

                    {/* Platform Overview with App Screenshots */}
                    <motion.section
                        className="max-w-7xl mx-auto mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-12">
                            {/* Overview Text */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                    Platform Overview
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                    Advanced Tutoring is a sophisticated, multi-role educational platform designed to bridge the gap between tutors, pupils, and parents. Unlike simple scheduling apps, it integrates a complete ecosystem of tools: real-time communication, AI-powered learning assistance, secure payments, and role-specific dashboards.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                    <strong>Core Philosophy:</strong> The app is built around <em>relationships</em> (Parent-Child, Tutor-Pupil) and <em>permissions</em>, ensuring that every interaction is secure and context-aware.
                                </p>
                                
                                {projectData?.links && projectData.links.length > 0 && (
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        {projectData.links
                                            .filter(link => link.label !== "Project description")
                                            .map((link, index) => (
                                                <a 
                                                    key={index} 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-all"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                    </div>
                                )}
                            </div>
                            
                            {/* App Screenshots - Carousel with 5 Side-by-Side Images */}
                            <div className="bg-gradient-to-b from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/10 p-8 rounded-xl border border-indigo-100 dark:border-indigo-900/20">
                                <h3 className="text-xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-400">App Screens</h3>
                                <div className="relative w-full">
                                    {projectData?.gallery && projectData.gallery.length > 0 ? (
                                        <div className="w-full">
                                            {/* Carousel Container */}
                                            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-xl">
                                                {/* Carousel Track */}
                                                <motion.div 
                                                    className="flex py-10"
                                                    animate={{ 
                                                        x: activeSlide === 0 ? 0 : `-${activeSlide * 100}%` 
                                                    }}
                                                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                                >
                                                    {/* All Gallery Images */}
                                                    {projectData.gallery.map((image, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 px-3"
                                                            whileHover={{ y: -8, scale: 1.03 }}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <div className="h-[400px] relative group flex items-center justify-center">
                                                                {/* Phone Frame */}
                                                                <div className="relative w-auto h-full" style={{ aspectRatio: '9/19.5' }}>
                                                                    {/* Phone Body */}
                                                                    <div className="absolute inset-0 bg-gray-900 dark:bg-black rounded-[40px] shadow-xl"></div>
                                                                    {/* Screen Bezel */}
                                                                    <div className="absolute inset-0 m-[10px] rounded-[30px] bg-black overflow-hidden">
                                                                        {/* Actual Screenshot */}
                                                                        <img
                                                                            src={image.asset?.url || urlFor(image).width(400).height(860).url()}
                                                                            alt={`App screenshot ${index + 1}`}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                    {/* Notch */}
                                                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[20px] bg-black rounded-b-xl z-10"></div>
                                                                </div>
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                                    <div className="bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1.5">
                                                                        <p className="text-xs sm:text-sm font-medium text-white text-center">
                                                                            {image.caption || `Screen ${index + 1}`}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                                
                                                {/* Carousel Navigation Buttons */}
                                                {projectData.gallery.length > 1 && (
                                                    <>
                                                        <button 
                                                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center z-20 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                            onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
                                                            disabled={activeSlide === 0}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                            </svg>
                                                        </button>
                                                        <button 
                                                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center z-20 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                            onClick={() => setActiveSlide((prev) => {
                                                                const visibleItems = getVisibleItemCount();
                                                                const maxSlide = Math.max(0, Math.ceil((projectData?.gallery?.length || 0) / visibleItems) - 1);
                                                                return Math.min(maxSlide, prev + 1);
                                                            })}
                                                            disabled={activeSlide >= Math.ceil((projectData?.gallery?.length || 0) / getVisibleItemCount()) - 1}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    </>
                                                )}
                                                
                                                {/* Carousel Indicators - Page Dots */}
                                                {projectData.gallery.length > getVisibleItemCount() && (
                                                    <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-20 pb-4">
                                                        {Array.from({ length: Math.ceil((projectData.gallery.length || 0) / getVisibleItemCount()) }).map((_, index) => (
                                                            <button
                                                                key={index}
                                                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                                                                    index === activeSlide 
                                                                        ? 'bg-indigo-600 dark:bg-indigo-500 scale-125 ring-2 ring-white dark:ring-gray-800' 
                                                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-400 dark:hover:bg-indigo-700'
                                                                }`}
                                                                onClick={() => setActiveSlide(index)}
                                                                aria-label={`Go to slide set ${index + 1}`}
                                                                aria-current={index === activeSlide ? 'true' : 'false'}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-[350px] w-full flex flex-col items-center justify-center">
                                            <p className="text-gray-500 dark:text-gray-400 mb-2">Screenshots will be displayed here</p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500">Make sure to add images to the Advanced Tutoring project in Sanity</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-indigo-400/30"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                                        <span className="text-3xl text-white">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Technical Deep Dive */}
                    <motion.section
                        className="max-w-7xl mx-auto mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Technical Deep Dive
                        </h2>
                        
                        {/* Phases Tabs - Improved design */}
                        <div className="flex justify-center mb-12 overflow-x-auto">
                            <div className="flex space-x-3 p-2 rounded-2xl bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/20 dark:to-purple-900/20 backdrop-blur-sm shadow-lg">
                                {Array.from(new Set(technicalModules.map(item => item.phase))).map((phase) => (
                                    <motion.button
                                        key={phase}
                                        className={`px-6 py-3 rounded-xl transition-all ${
                                            activePhase === phase
                                                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 dark:shadow-indigo-800/30'
                                                : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-white hover:dark:bg-gray-700 shadow-sm'
                                        }`}
                                        onClick={() => {
                                            setActivePhase(phase);
                                            // Update selected feature to be the first item in the new phase
                                            const featuresInPhase = technicalModules.filter(item => item.phase === phase);
                                            if (featuresInPhase.length > 0) {
                                                setSelectedFeature(featuresInPhase[0]);
                                            }
                                        }}
                                        whileHover={{ y: -3, scale: 1.03 }}
                                        whileTap={{ y: 0, scale: 0.98 }}
                                    >
                                        <span className="font-medium">{phase}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Timeline Visualization - Enhanced design */}
                            <div>
                                <motion.div 
                                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-indigo-300/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-10"></div>
                                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-purple-300/10 to-indigo-500/10 dark:from-purple-600/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>
                                    
                                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
                                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg w-8 h-8 flex items-center justify-center text-white mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        System Modules
                                    </h3>
                                    
                                    <div className="relative pl-10">
                                        {technicalModules
                                            .filter(item => item.phase === activePhase)
                                            .map((item, index, filteredArray) => (
                                                <motion.div
                                                    key={item.id}
                                                    className={`mb-8 relative ${
                                                        index !== filteredArray.length - 1 ? 'pb-8 border-l-2 border-gradient-pulse' : ''
                                                    }`}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.15 }}
                                                    style={{
                                                        borderImage: index !== filteredArray.length - 1 ? 'linear-gradient(to bottom, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.4)) 1' : 'none'
                                                    }}
                                                >
                                                    <motion.div 
                                                        className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer ${
                                                            selectedFeature.id === item.id
                                                                ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                                                                : 'bg-white dark:bg-gray-700 border-2 border-indigo-300 dark:border-indigo-600'
                                                        }`}
                                                        onClick={() => setSelectedFeature(item)}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {selectedFeature.id === item.id ? (
                                                            <div className="w-3 h-3 rounded-full bg-white"></div>
                                                        ) : (
                                                            <div className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-300"></div>
                                                        )}
                                                    </motion.div>
                                                    
                                                    <motion.div 
                                                        className={`cursor-pointer pl-6 py-3 pr-4 rounded-xl transition-all ${
                                                            selectedFeature.id === item.id
                                                                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 shadow-md'
                                                                : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                                        }`}
                                                        onClick={() => setSelectedFeature(item)}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <h4 className="font-bold text-lg text-gray-800 dark:text-white flex items-center">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                        <div className="mt-3 flex flex-wrap gap-2">
                                                            {item.tech.map((tech, i) => (
                                                                <span 
                                                                    key={i} 
                                                                    className="text-xs bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-md shadow-sm border border-indigo-100 dark:border-indigo-700/50"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                </motion.div>
                                            ))
                                        }
                                    </div>
                                </motion.div>
                            </div>

                            {/* Feature details panel */}
                            <div>
                                <motion.div 
                                    className="h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    layout
                                >
                                    {/* Background decoration */}
                                    <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-b from-purple-300/10 to-indigo-500/10 dark:from-purple-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>
                                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tr from-indigo-300/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-10"></div>

                                    <motion.div
                                        key={`${selectedFeature.id}-${activePhase}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent inline-block">
                                            {selectedFeature.title}
                                        </h3>
                                        <div className="mb-6 flex items-center">
                                            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-3 py-1 rounded-full">
                                                {selectedFeature.phase}
                                            </span>
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                                            {selectedFeature.description}
                                        </p>

                                        {selectedFeature.details && (
                                            <ul className="mb-8 space-y-3 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                                                {selectedFeature.details.map((detail: string, i: number) => (
                                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300 text-sm">
                                                        <span className="mr-2 mt-1 text-indigo-500 flex-shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="mb-8">
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedFeature.tech.map((tech: string, index: number) => (
                                                    <motion.div
                                                        key={tech}
                                                        className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-100 dark:border-indigo-700/50 px-4 py-2 rounded-lg shadow-sm"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ y: -3, scale: 1.05 }}
                                                    >
                                                        <span className="font-medium text-indigo-700 dark:text-indigo-300">{tech}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
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
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Stack */}
                            <div className="lg:col-span-2">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                                    <h3 className="text-xl font-semibold mb-8 text-gray-800 dark:text-white">
                                        Full-Stack Architecture
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {[
                                            {
                                                category: 'Frontend Development',
                                                techs: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
                                                icon: '💻'
                                            },
                                            {
                                                category: 'Backend Services',
                                                techs: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM'],
                                                icon: '⚙️'
                                            },
                                            {
                                                category: 'AI & Data',
                                                techs: ['OpenAI GPT-4o', 'Vector Embeddings', 'Redis', 'Vision API'],
                                                icon: '🧠'
                                            },
                                            {
                                                category: 'Real-time Features',
                                                techs: ['Socket.IO', 'WebRTC (Daily.co)', 'Push Notifications', 'Optimistic Updates'],
                                                icon: '⚡'
                                            }
                                        ].map((stack, index) => (
                                            <motion.div
                                                key={stack.category}
                                                className="space-y-4 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-2xl">{stack.icon}</span>
                                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                        {stack.category}
                                                    </h3>
                                                </div>
                                                
                                                <div className="flex flex-wrap gap-2">
                                                    {stack.techs.map((tech) => (
                                                        <div 
                                                            key={tech}
                                                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm"
                                                        >
                                                            {tech}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Integration & Services */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                                    Third-Party Integrations
                                </h3>
                                
                                <ul className="space-y-6">
                                    {[
                                        {
                                            name: 'Stripe Connect',
                                            description: 'Marketplace payments with split fees and automated tutor payouts',
                                            icon: '💳'
                                        },
                                        {
                                            name: 'RevenueCat',
                                            description: 'Cross-platform subscription sync (iOS, Android, Web)',
                                            icon: '🔄'
                                        },
                                        {
                                            name: 'Daily.co',
                                            description: 'WebRTC video infrastructure with screen sharing and bandwidth management',
                                            icon: '🎥'
                                        },
                                        {
                                            name: 'OpenAI & Vercel Blob',
                                            description: 'GPT-4o for Socratic tutoring and scalable edge storage for files',
                                            icon: '☁️'
                                        }
                                    ].map((integration, index) => (
                                        <motion.li
                                            key={integration.name}
                                            className="flex gap-4"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xl">
                                                {integration.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800 dark:text-white">
                                                    {integration.name}
                                                </h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                    {integration.description}
                                                </p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* App Architecture Diagram */}
                    <motion.section
                        className="max-w-7xl mx-auto mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            App Architecture
                        </h2>
                        
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Architecture Diagram */}
                                <div className="p-6 bg-gray-50 dark:bg-gray-700/40 rounded-lg">
                                    <div className="relative overflow-hidden">
                                        <div className="w-full p-4 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10 rounded-lg border border-blue-100 dark:border-blue-800/30">
                                            {/* Client Layer */}
                                            <div className="mb-8">
                                                <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">CLIENT LAYER</h4>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-sm shadow-sm border border-blue-100 dark:border-blue-900/30">
                                                        React Native (Mobile)
                                                    </div>
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-sm shadow-sm border border-blue-100 dark:border-blue-900/30">
                                                        Web Client (Responsive)
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* API Layer with arrows */}
                                            <div className="mb-8 relative">
                                                <div className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-indigo-200 dark:border-b-indigo-700"></div>
                                                <h4 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2">API LAYER</h4>
                                                <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center shadow-sm border border-indigo-100 dark:border-indigo-900/30">
                                                    Express.js REST API & Socket.IO Server
                                                </div>
                                            </div>
                                            
                                            {/* Service Layer with arrows */}
                                            <div className="mb-8 relative">
                                                <div className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-purple-200 dark:border-b-purple-700"></div>
                                                <h4 className="text-sm font-semibold text-purple-800 dark:text-purple-300 mb-2">SERVICE LAYER</h4>
                                                <div className="grid grid-cols-3 gap-3">
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-xs shadow-sm border border-purple-100 dark:border-purple-900/30">
                                                        Authentication
                                                    </div>
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-xs shadow-sm border border-purple-100 dark:border-purple-900/30">
                                                        Messaging
                                                    </div>
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-xs shadow-sm border border-purple-100 dark:border-purple-900/30">
                                                        Scheduling
                                                    </div>
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-xs shadow-sm border border-purple-100 dark:border-purple-900/30">
                                                        Payments
                                                    </div>
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-xs shadow-sm border border-purple-100 dark:border-purple-900/30">
                                                        Notifications
                                                    </div>
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-xs shadow-sm border border-purple-100 dark:border-purple-900/30">
                                                        Video Calls
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Data Layer with arrows */}
                                            <div className="relative">
                                                <div className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-pink-200 dark:border-b-pink-700"></div>
                                                <h4 className="text-sm font-semibold text-pink-800 dark:text-pink-300 mb-2">DATA LAYER</h4>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-sm shadow-sm border border-pink-100 dark:border-pink-900/30">
                                                        PostgreSQL (Prisma ORM)
                                                    </div>
                                                    <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-center text-sm shadow-sm border border-pink-100 dark:border-pink-900/30">
                                                        Redis Cache
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Technical Overview */}
                                <div className="prose dark:prose-invert max-w-none flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                                        Technical Overview
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        The Advanced Tutoring Platform uses a modern tech stack designed for performance, security, and scalability. It's built as a Node.js/Express application with a React Native (Expo) client that works across web and mobile platforms.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        The backend leverages <strong>Prisma ORM</strong> for complex relational queries and <strong>Redis</strong> for caching. The "Tutor+" AI system integrates <strong>OpenAI's GPT-4o</strong> with context injection to provide Socratic tutoring, while <strong>Daily.co</strong> powers the WebRTC video classroom.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Real-time features are powered by <strong>Socket.IO</strong>, enabling instant messaging and notifications. Financial transactions are handled via <strong>Stripe Connect</strong> for marketplace payouts and <strong>RevenueCat</strong> for cross-platform subscription synchronization.
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Security is paramount, with a custom "Access Code" onboarding flow, device fingerprinting, and strict role-based permission matrices ensuring data privacy for all users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                    
                    {/* User Flow Section */}
                    <motion.section
                        className="max-w-7xl mx-auto mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                            User Registration Flow
                        </h2>
                        
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                            {/* Horizontal Timeline */}
                            <div className="relative">
                                <div className="absolute h-1 bg-green-200 dark:bg-green-800 top-10 left-0 right-0 z-0"></div>
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                    {userFlowSteps.map((step, index) => (
                                        <motion.div 
                                            key={step.step}
                                            className="relative z-10 flex flex-col items-center text-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-green-400 dark:border-green-600 flex items-center justify-center mb-4">
                                                <span className="text-2xl font-bold text-green-500 dark:text-green-400">{step.step}</span>
                                            </div>
                                            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Additional Info */}
                            <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800/30">
                                <h4 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-4">
                                    Security by Design
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    The access code system ensures that only authorized users can join the platform, maintaining the integrity of tutor-student relationships. 
                                    Each user type has specific permissions, and the registration flow is designed to preserve the hierarchical nature of educational relationships.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Project Status */}
                    <motion.section
                        className="max-w-4xl mx-auto text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-10 px-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Project Status</h3>
                            <p className="text-lg opacity-90 mb-6">
                                The Advanced Tutoring Platform is currently in production with active users across web and mobile platforms.
                                Regular updates introduce new features and performance improvements based on user feedback.
                            </p>
                            <div className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold">
                                ✓ Production Ready
                            </div>
                        </div>
                    </motion.section>
                </div>
            </main>
        </div>
    )
}