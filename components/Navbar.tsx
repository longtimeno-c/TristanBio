import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeToggle from './DarkModeToggle'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/cv', label: 'CV' },
    { path: '/projects', label: 'Projects' },
  ];
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 pointer-events-none">
      <motion.nav 
        className={`
          pointer-events-auto
          flex items-center gap-1 sm:gap-2 px-1 sm:px-2 rounded-full border
          backdrop-blur-md transition-all duration-300
          ${scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5 py-2' 
            : 'bg-white/50 dark:bg-gray-900/50 border-transparent py-2 sm:py-3'
          }
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Link href="/" className="hidden md:block px-4 font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Tristan Hill
        </Link>
        
        <ul className="flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.path;
            
            return (
              <li key={link.path}>
                <Link href={link.path} className="relative block px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors">
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}>
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="pl-1 sm:pl-2 pr-1 sm:pr-2 border-l border-gray-200 dark:border-gray-700 ml-1 sm:ml-2">
          <DarkModeToggle />
        </div>
      </motion.nav>
    </div>
  )
}
