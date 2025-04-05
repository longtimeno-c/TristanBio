import { motion } from 'framer-motion'

type ProjectProps = {
  title: string
  description: string
  link: string
  tech: string[]
}

export default function ProjectCard({ title, description, link, tech }: ProjectProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer transform transition-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span key={i} className="bg-indigo-100 dark:bg-indigo-700 dark:text-white text-indigo-700 text-sm px-2 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
