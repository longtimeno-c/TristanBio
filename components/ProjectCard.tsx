import { motion } from 'framer-motion'
import { urlFor } from '@/src/sanity/lib/sanityImage'
import { useState } from 'react'

type ProjectProps = {
  title: string
  description: string
  link: string
  detailsLink?: string
  tech?: string[]
  mainImage?: any
  source?: 'sanity' | 'github'
}

export default function ProjectCard({ title, description, link, detailsLink, tech, mainImage, source }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden cursor-pointer transform transition-transform h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Card background with border gradient */}
      <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 
                    group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative bg-white dark:bg-gray-800 rounded-[10px] h-full flex flex-col">
        {/* Glass-like hover effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]" 
        />
        
        {/* Cool image hover effect */}
        {mainImage && (
          <div className="relative w-full h-48 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <motion.img
              src={urlFor(mainImage).width(800).height(400).url()}
              alt={title}
              className="w-full h-48 object-cover"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Source badge */}
            {source && (
              <div className="absolute top-3 right-3 z-20 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {source === 'github' ? '🐙 GitHub' : '✨ Featured'}
              </div>
            )}
          </div>
        )}
        
        {!mainImage && (
          <div className="h-24 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <span className="text-3xl">{source === 'github' ? '🐙' : '📁'}</span>
          </div>
        )}
        
        {/* Details area pinned bottom-left within flexible space */}
        <div className="p-6 relative flex-1 flex items-end">
          <div>
          {/* Title with animated underline effect */}
          <div className="relative inline-block mb-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : '0%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
          
          {/* Tech tags with staggered animation */}
          <div className="flex flex-wrap gap-2">
            {(tech ?? []).map((item, i) => (
              <motion.span
                key={i}
                className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-300/20 
                         dark:border-indigo-700/30 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.05), duration: 0.2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
          </div>
        </div>
        
        {/* Footer CTAs */}
        <div className="px-6 pb-4 flex items-center justify-between gap-3">
          {detailsLink && (
            <a
              href={detailsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium"
            >
              Project details
            </a>
          )}
          <a href={link} target="_blank" rel="noopener noreferrer" className="ml-auto">
            <motion.div
              className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1"
              animate={{ x: isHovered ? 3 : 0 }}
            >
              View Project 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </a>
        </div>
      </div>
      
      {/* Card shadow glow effect */}
      <motion.div 
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur opacity-0 
                  group-hover:opacity-100 -z-10 transition-opacity duration-300" 
      />
    </motion.div>
  )
}
