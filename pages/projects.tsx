import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Stream 150',
    description: 'A 150-hour livestream challenge with multi-PC streaming, OBS plugins, donation triggers, and chaos.',
    link: 'https://watch.stream150.com',
    tech: ['Node.js', 'OBS', 'NDI', 'Tangia']
  },
  {
    title: 'Missile Wars Revival',
    description: 'A Minecraft mini-game remake with custom backend, matchmaking, and global stats.',
    link: 'https://github.com/TristanDev/MissileWars',
    tech: ['TypeScript', 'React', 'Node.js']
  },
  {
    title: 'Dev Portfolio (this site)',
    description: 'My personal bio site built with Next.js, Tailwind, and a bunch of stubborn energy.',
    link: '/',
    tech: ['Next.js', 'Tailwind CSS', 'Sanity']
  }
]

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-12 flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  )
}
