import { useEffect, useState } from 'react'
import { sanity } from '../src/sanity/lib/client'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

type Project = {
  _id: string
  title: string
  description: string
  link: string
  detailsLink?: string
  tech: string[]
  mainImage?: any
  source?: 'sanity' | 'github'
}

export default function Projects() {
  const [sanityProjects, setSanityProjects] = useState<Project[]>([])
  const [githubProjects, setGithubProjects] = useState<Project[]>([])

  useEffect(() => {
    async function loadData() {
      try {
        const sanityData = await sanity.fetch(
          `*[_type == "project"] | order(_createdAt desc) {
            _id,
            title,
            description,
            link,
            detailsLink,
            tech,
            mainImage
          }`
        )

        if (Array.isArray(sanityData)) {
          const normalized = sanityData.map((p: any) => ({
            ...p,
            tech: Array.isArray(p?.tech) ? p.tech : [],
          }))
          setSanityProjects(normalized)
        } else {
          setSanityProjects([])
        }

        const githubRes = await fetch('https://api.github.com/users/longtimeno-c/repos')
        if (githubRes.ok) {
          const githubData = await githubRes.json()
          if (Array.isArray(githubData)) {
            const githubMapped: Project[] = githubData.map((repo: any) => ({
              _id: `github-${repo.id}`,
              title: repo.name,
              description: repo.description || 'No description provided.',
              link: repo.html_url,
              tech: [],
              source: 'github',
            }))
            setGithubProjects(githubMapped)
          } else {
            setGithubProjects([])
          }
        } else {
          setGithubProjects([])
        }
      } catch (error) {
        console.error('Error loading data:', error)
        setSanityProjects([])
        setGithubProjects([])
      }
    }

    loadData()
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative">
        {/* Ambient glow effects for both light and dark mode */}
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-teal-500/5 dark:bg-teal-500/20 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1/3 h-1/3 bg-indigo-500/5 dark:bg-indigo-500/20 blur-[110px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block pb-3 border-b-2 border-blue-300/30 dark:border-blue-500/30 mx-auto">Projects</h1>
          
          {/* Highlights Section */}
          <section className="w-full mb-20">
            <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sanityProjects.map((project) => (
                <ProjectCard key={project._id} {...project} source="sanity" />
              ))}
            </div>
          </section>

          {/* Divider */}
          <hr className="w-full border-t border-gray-300 dark:border-gray-600 my-16" />

          {/* GitHub Section */}
          <section className="w-full mb-12">
            <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              GitHub Repositories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {githubProjects.map((project) => (
                <ProjectCard key={project._id} {...project} source="github" />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
