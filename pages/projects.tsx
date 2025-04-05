import { useEffect, useState } from 'react'
import { sanity } from '../src/sanity/lib/client'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

type Project = {
  _id: string
  title: string
  description: string
  link: string
  tech: string[]
  source?: 'sanity' | 'github'
}

export default function Projects() {
  const [sanityProjects, setSanityProjects] = useState<Project[]>([])
  const [githubProjects, setGithubProjects] = useState<Project[]>([])

  useEffect(() => {
    async function loadData() {
      const sanityData = await sanity.fetch(
        `*[_type == "project"] | order(_createdAt desc) {
          _id,
          title,
          description,
          link,
          tech
        }`
      )

      const githubRes = await fetch('https://api.github.com/users/longtimeno-c/repos')
      const githubData = await githubRes.json()

      const githubMapped: Project[] = githubData.map((repo: any) => ({
        _id: `github-${repo.id}`,
        title: repo.name,
        description: repo.description || 'No description provided.',
        link: repo.html_url,
        tech: [],
        source: 'github',
      }))

      setSanityProjects(sanityData)
      setGithubProjects(githubMapped)
    }

    loadData()
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-12 flex flex-col items-center gap-12">
        {/* Highlights Section */}
        <section className="w-full max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Highlights
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sanityProjects.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="w-full max-w-6xl border-t border-gray-300 dark:border-gray-600" />

        {/* GitHub Section */}
        <section className="w-full max-w-6xl">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-500 dark:text-indigo-300">
            GitHub Repositories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
