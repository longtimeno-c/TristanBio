import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeToggle from './DarkModeToggle'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define routes for the nav links
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/cv', label: 'CV' },
    { path: '/projects', label: 'Projects' },
  ];
  
  return (
    <motion.nav 
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg' 
          : 'bg-white/30 dark:bg-gray-900/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Name */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="group relative">
            <motion.h1 
              className="text-xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 
                       bg-clip-text text-transparent relative z-10 px-2 py-1"
              whileHover={{ scale: 1.05 }}
            >
              Tristan Hill
            </motion.h1>
            
            {/* Background glow */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 
                        blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
        
        {/* Navigation Links */}
        <div className="flex gap-1 items-center">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.path;
            
            return (
              <Link href={link.path} key={link.path}>
                <motion.div 
                  className={`relative px-4 py-2 rounded-full ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}

          {/* Dark Mode Toggle */}
          <div className="ml-2">
            <DarkModeToggle />
          </div>
        </div>
      </div>
      
      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
    </motion.nav>
  )
}
