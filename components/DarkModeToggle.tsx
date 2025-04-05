import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const classList = document.documentElement.classList
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      classList.add('dark')
      setIsDark(true)
    } else {
      classList.remove('dark')
    }
  }, [])

  const toggle = () => {
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

  return (
    <button onClick={toggle} className="p-2 text-xl">
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
