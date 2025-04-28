import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const classList = document.documentElement.classList
    const stored = localStorage.getItem('theme')

    // Default to dark mode unless explicitly set to light
    if (stored === 'light') {
      classList.remove('dark')
      setIsDark(false)
    } else {
      classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    setShowParticles(true)
    setTimeout(() => setShowParticles(false), 1000)
    
    const classList = document.documentElement.classList
    if (classList.contains('dark')) {
      classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  if (!isMounted) return <div className="w-14 h-14"></div>

  // Generate random particles for explosion effect
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2
    return {
      id: i,
      x: Math.cos(angle) * 40,
      y: Math.sin(angle) * 40,
      scale: Math.random() * 0.6 + 0.5,
      rotate: Math.random() * 360
    }
  })

  // Stars that appear in night mode
  const stars = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    scale: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 0.5
  }))

  // Clouds that appear in day mode
  const clouds = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    bottom: `${30 + Math.random() * 20}%`,
    left: `${20 + i * 30}%`,
    scale: 0.7 + Math.random() * 0.3,
    delay: i * 0.1
  }))

  return (
    <motion.button 
      onClick={toggle} 
      className="relative w-14 h-14 rounded-full overflow-hidden"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Night sky or day sky background */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{ 
          background: isDark 
            ? "radial-gradient(circle, #0f172a 0%, #020617 100%)"
            : "linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)"
        }}
        transition={{ duration: 0.7 }}
      />

      {/* Stars (only visible in dark mode) */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: star.top, left: star.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isDark ? 1 : 0, 
            scale: isDark ? star.scale : 0,
          }}
          transition={{ 
            delay: isDark ? star.delay : 0,
            duration: 0.5,
          }}
        />
      ))}

      {/* Clouds (only visible in light mode) */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute w-6 h-3 bg-white rounded-full blur-[1px]"
          style={{ bottom: cloud.bottom, left: cloud.left }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: isDark ? 0 : 0.9, 
            scale: cloud.scale,
            x: isDark ? -20 : 0
          }}
          transition={{ 
            delay: isDark ? 0 : cloud.delay,
            duration: 0.6,
          }}
        />
      ))}

      {/* Moon with craters */}
      <AnimatePresence mode="wait">
        {isDark && (
          <motion.div 
            key="moon"
            className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-gray-200"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              x: "-50%", 
            }}
            exit={{ opacity: 0, scale: 0, rotate: 45, y: -20 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            {/* Moon craters */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-300 opacity-70"></div>
            <div className="absolute bottom-3 right-2 w-2 h-2 rounded-full bg-gray-300 opacity-70"></div>
            <div className="absolute top-5 right-1 w-1 h-1 rounded-full bg-gray-300 opacity-70"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sun with rays */}
      <AnimatePresence mode="wait">
        {!isDark && (
          <motion.div 
            key="sun"
            className="absolute top-1/2 left-1/2 w-7 h-7 rounded-full bg-yellow-400"
            style={{ 
              boxShadow: "0 0 15px 5px rgba(250, 204, 21, 0.7)",
              x: "-50%", 
              y: "-50%",
            }}
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0
            }}
            exit={{ opacity: 0, scale: 0, rotate: -45, y: 20 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            {/* Sun rays */}
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-yellow-300 origin-left"
                style={{ rotate: `${i * 45}deg` }}
                animate={{ 
                  rotate: `${i * 45 + 360}deg`,
                  opacity: [0.5, 1, 0.5],
                  scaleX: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  repeatType: "reverse"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explosion particles when toggling */}
      <AnimatePresence>
        {showParticles && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${isDark ? 'bg-yellow-300' : 'bg-indigo-300'}`}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{ 
              x: particle.x, 
              y: particle.y, 
              opacity: 0,
              scale: particle.scale,
              rotate: particle.rotate
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Emoji animation */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moonface"
              initial={{ rotate: 45, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -45, scale: 0, y: 10 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              className="text-2xl"
            >
              🌙
            </motion.div>
          ) : (
            <motion.div
              key="sunface"
              initial={{ rotate: -45, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 45, scale: 0, y: -10 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              className="text-2xl"
            >
              ☀️
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  )
}
