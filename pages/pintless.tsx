'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'

// Define types for Pintless assets
type PintlessProject = {
    title: string
    description: string
    gallery: { caption: string, url: string }[]
    links: { label: string, url: string }[]
}

// Technical breakdown modules
const technicalModules = [
    { 
        id: 'core-features', 
        title: 'Event Management',
        phase: 'Core Experience',
        description: 'Comprehensive event creation and management system designed for social gatherings. Features smart venue detection that automatically suggests "Pub Crawl" mode when a bar is selected, and community integration for automatic member invites.',
        tech: ['React Native', 'Expo', 'Firebase', 'Smart Venue Detection'],
        details: [
            "Smart Venue Detection identifies pubs/bars automatically.",
            "Community integration for bulk invites.",
            "Real-time metrics: Drinks, Cost, Steps, Speed.",
            "Interactive maps showing crawl path and venues."
        ]
    },
    { 
        id: 'tracking', 
        title: 'Real-time Tracking',
        phase: 'Core Experience',
        description: 'Advanced tracking system that monitors various metrics during an event. Participants can track drinks consumed, money spent, and physical activity. The app uses background location services to record the path of a crawl even when the phone is locked.',
        tech: ['Expo Sensors', 'Background Location', 'Pedometer', 'Accelerometer'],
        details: [
            "Background location tracking for crawl paths.",
            "Integrated pedometer for step counting.",
            "Speed and acceleration tracking for gamification.",
            "Real-time leaderboard updates."
        ]
    },
    { 
        id: 'social', 
        title: 'Social & Community',
        phase: 'Social & Gamification',
        description: 'Robust social features including a friend system, community groups, and shared event galleries. Users can upload photos, react with "Emoji Explosions", and maintain streaks to encourage social consistency.',
        tech: ['Firebase Auth', 'Realtime Database', 'Cloud Storage', 'Social Graph'],
        details: [
            "Friend system with search and discovery.",
            "Community groups for organized events.",
            "Shared media galleries with reactions.",
            "Streak tracking for social consistency."
        ]
    },
    { 
        id: 'gamification', 
        title: 'Gamification & Store',
        phase: 'Social & Gamification',
        description: 'Competitive elements to enhance the experience. Features real-time leaderboards, powerups like "Streak Shield" and "Ghost Mode", and a store for purchasing consumables and subscriptions.',
        tech: ['RevenueCat', 'In-App Purchases', 'Gamification Engine'],
        details: [
            "Competitive leaderboards for Drinks, Cost, Steps.",
            "Consumable Powerups: Streak Shield, Ghost Mode.",
            "Pintless Pro subscription for premium features.",
            "In-app currency and store system."
        ]
    },
    { 
        id: 'tech-stack', 
        title: 'Technical Stack',
        phase: 'Technical Implementation',
        description: 'Built with React Native and Expo for a seamless cross-platform experience. Powered by Firebase for real-time data synchronization and authentication. Utilizes device sensors and maps for rich location-based features.',
        tech: ['React Native', 'Expo Router', 'Firebase', 'Expo Maps'],
        details: [
            "React Native (Expo) for cross-platform mobile app.",
            "Firebase for Auth, Database, and Storage.",
            "Expo Maps for venue and path visualization.",
            "Expo Camera for in-app media capture."
        ]
    },
    { 
        id: 'auth', 
        title: 'Auth & Security',
        phase: 'Technical Implementation',
        description: 'Secure authentication system supporting Email/Password and Social Login (Google, Apple). Manages user profiles, privacy settings, and location permissions to ensure user data is protected.',
        tech: ['Firebase Auth', 'Google Sign-In', 'Apple Authentication', 'Privacy Controls'],
        details: [
            "Multi-provider authentication (Email, Google, Apple).",
            "Granular location permission handling.",
            "Secure user profile management.",
            "Privacy-focused background tracking."
        ]
    }
]

// Key features of the platform
const features = [
    {
        title: 'Smart Venue Detection',
        description: 'Automatically identifies pubs and bars to enable specialized "Pub Crawl" modes.',
        icon: '📍'
    },
    {
        title: 'Real-time Leaderboards',
        description: 'Live rankings for drinks, steps, and speed among event participants.',
        icon: '🏆'
    },
    {
        title: 'Background Tracking',
        description: 'Records your crawl path and stats even while your phone is locked.',
        icon: '👣'
    },
    {
        title: 'Social Streaks',
        description: 'Track consecutive social events and maintain streaks with friends.',
        icon: '🔥'
    },
    {
        title: 'Media Gallery',
        description: 'Shared event albums with live camera, uploads, and emoji reactions.',
        icon: '📸'
    },
    {
        title: 'Powerups & Store',
        description: 'Use items like "Streak Shield" or "Ghost Mode" to enhance gameplay.',
        icon: '⚡'
    },
    {
        title: 'Community Groups',
        description: 'Create and manage communities for easy group event invites.',
        icon: '👥'
    },
    {
        title: 'Cross-Platform',
        description: 'Seamless experience on both iOS and Android devices.',
        icon: '📱'
    }
]

export default function Pintless() {
    const [activePhase, setActivePhase] = useState('Core Experience')
    const [activeSlide, setActiveSlide] = useState(0)
    
    // Initialize selected feature based on active phase
    const [selectedFeature, setSelectedFeature] = useState<any>(() => {
        const featuresInPhase = technicalModules.filter(item => item.phase === 'Core Experience');
        return featuresInPhase.length > 0 ? featuresInPhase[0] : technicalModules[0];
    })

    // Static project data based on user request
    const projectData: PintlessProject = {
        title: "Pintless",
        description: "Pintless is a social event tracking application designed primarily for \"Pub Crawls\" and social gatherings. It combines event management, social networking, location tracking, and gamification to enhance the experience of going out with friends.",
        gallery: [
            { caption: "Dashboard & Events", url: "" },
            { caption: "Live Tracking", url: "" },
            { caption: "Leaderboards", url: "" },
            { caption: "User Profile", url: "" },
            { caption: "Social Feed", url: "" }
        ],
        links: []
    }
    
    // Function to determine how many items are visible based on screen width
    const getVisibleItemCount = () => {
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
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [activeSlide, projectData?.gallery])

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <main className="pt-32 pb-20 dark:bg-gradient-to-b dark:from-gray-900 dark:via-orange-900/10 dark:to-gray-900 relative min-h-screen">
                {/* Ambient glow effects - Orange Theme */}
                <div className="absolute top-20 left-1/4 w-1/2 h-1/2 bg-orange-500/20 dark:block hidden blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute top-80 right-1/4 w-1/3 h-1/3 bg-red-500/20 dark:block hidden blur-[120px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 px-4 sm:px-6">
                    {/* Hero Section */}
                    <motion.section
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent inline-block pb-3 border-b-2 border-orange-300/30 dark:border-orange-500/30">
                            Pintless
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            The ultimate social event tracking and gamification platform for your nights out.
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
                            <div className="flex flex-col justify-center text-center max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                                    Project Overview
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {projectData.description}
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    The app tracks various metrics such as drinks consumed, money spent, steps taken, and movement speed, presenting them in a competitive leaderboard format. It combines event management, social networking, location tracking, and gamification to enhance the experience of going out with friends.
                                </p>
                            </div>
                            
                            {/* App Screenshots - Carousel */}
                            <div className="bg-gradient-to-b from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/5 p-8 rounded-xl border border-orange-100 dark:border-orange-900/20">
                                <h3 className="text-xl font-bold mb-6 text-center text-orange-700 dark:text-orange-400">App Screens</h3>
                                <div className="relative w-full">
                                    <div className="w-full">
                                        {/* Carousel Container */}
                                        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
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
                                                                <div className="absolute inset-0 bg-gray-900 dark:bg-black rounded-[40px] shadow-xl border-4 border-gray-800 dark:border-gray-900"></div>
                                                                {/* Screen Bezel */}
                                                                <div className="absolute inset-0 m-[10px] rounded-[30px] bg-gray-800 overflow-hidden flex items-center justify-center">
                                                                    {/* Placeholder for Screenshot */}
                                                                    {image.url ? (
                                                                        <img
                                                                            src={image.url}
                                                                            alt={`App screenshot ${index + 1}`}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full bg-gray-700 flex flex-col items-center justify-center p-4 text-center">
                                                                            <span className="text-4xl mb-2">📱</span>
                                                                            <span className="text-gray-400 text-sm">Screenshot Placeholder</span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                {/* Notch */}
                                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[20px] bg-black rounded-b-xl z-10"></div>
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                                <div className="bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1.5">
                                                                    <p className="text-xs sm:text-sm font-medium text-white text-center">
                                                                        {image.caption}
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
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
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-orange-400/30"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
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
                        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            Technical Deep Dive
                        </h2>
                        
                        {/* Phases Tabs */}
                        <div className="flex justify-center mb-12 overflow-x-auto">
                            <div className="flex space-x-3 p-2 rounded-2xl bg-gradient-to-r from-orange-50/80 to-red-50/80 dark:from-orange-900/20 dark:to-red-900/20 backdrop-blur-sm shadow-lg">
                                {Array.from(new Set(technicalModules.map(item => item.phase))).map((phase) => (
                                    <motion.button
                                        key={phase}
                                        className={`px-6 py-3 rounded-xl transition-all ${
                                            activePhase === phase
                                                ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 dark:shadow-orange-800/30'
                                                : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-white hover:dark:bg-gray-700 shadow-sm'
                                        }`}
                                        onClick={() => {
                                            setActivePhase(phase);
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
                            {/* Timeline Visualization */}
                            <div>
                                <motion.div 
                                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-orange-300/10 to-red-500/10 dark:from-orange-500/10 dark:to-red-700/10 rounded-full blur-3xl -z-10"></div>
                                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-red-300/10 to-orange-500/10 dark:from-red-600/10 dark:to-orange-700/10 rounded-full blur-3xl -z-10"></div>
                                    
                                    <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
                                        <span className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg w-8 h-8 flex items-center justify-center text-white mr-3">
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
                                                        index !== filteredArray.length - 1 ? 'pb-8 border-l-2 border-orange-200 dark:border-orange-800' : ''
                                                    }`}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.15 }}
                                                >
                                                    <motion.div 
                                                        className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer ${
                                                            selectedFeature.id === item.id
                                                                ? 'bg-gradient-to-br from-orange-500 to-red-600'
                                                                : 'bg-white dark:bg-gray-700 border-2 border-orange-300 dark:border-orange-600'
                                                        }`}
                                                        onClick={() => setSelectedFeature(item)}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {selectedFeature.id === item.id ? (
                                                            <div className="w-3 h-3 rounded-full bg-white"></div>
                                                        ) : (
                                                            <div className="w-2 h-2 rounded-full bg-orange-400 dark:bg-orange-300"></div>
                                                        )}
                                                    </motion.div>
                                                    
                                                    <motion.div 
                                                        className={`cursor-pointer pl-6 py-3 pr-4 rounded-xl transition-all ${
                                                            selectedFeature.id === item.id
                                                                ? 'bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 shadow-md'
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
                                                    </motion.div>
                                                </motion.div>
                                            ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Feature Detail View */}
                            <div>
                                <motion.div 
                                    key={selectedFeature.id}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 h-full"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedFeature.title}</h3>
                                            <span className="text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                                                {selectedFeature.phase}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        {selectedFeature.description}
                                    </p>
                                    
                                    <div className="mb-8">
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedFeature.tech.map((tech: string) => (
                                                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Key Capabilities</h4>
                                        <ul className="space-y-3">
                                            {selectedFeature.details.map((detail: string, index: number) => (
                                                <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </main>
        </div>
    )
}
