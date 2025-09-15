'use client'

import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function ProgressProject() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20 dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative px-4 sm:px-6">
        {/* Ambient glow */}
        <div className="absolute top-24 left-1/4 w-1/2 h-1/2 bg-blue-500/20 dark:block hidden blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-80 right-1/4 w-1/3 h-1/3 bg-purple-500/20 dark:block hidden blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero */}
          <motion.section
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block pb-3 border-b-2 border-purple-300/30 dark:border-purple-500/30">
              Progress UK Web Platform
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A modern, end‑to‑end platform I designed and built to power membership, events, newsroom, subscriptions and policy workflows.
            </p>
          </motion.section>

          {/* Value + Highlights */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">What I Delivered</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I led the design and development across frontend, backend and DevOps. The result is a cohesive platform that feels fast, secure and cohesive across web and mobile.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                <li>End‑to‑end auth with refresh tokens</li>
                <li>Member onboarding with approvals</li>
                <li>Newsroom with emoji reactions</li>
                <li>Events with registration and iCal</li>
                <li>Stripe subscriptions with webhooks</li>
                <li>Policy editing via GitHub App</li>
                <li>Role‑aware UI and navigation</li>
                <li>Admin tools and dashboards</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-100/60 dark:border-indigo-900/40">
              <h3 className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">Outcomes</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Streamlined onboarding and approvals</li>
                <li>Consistent UX across web and mobile</li>
                <li>Operational visibility for admins</li>
                <li>Secure payment integration</li>
              </ul>
            </div>
          </motion.section>

          {/* Architecture Snapshot */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Architecture Snapshot</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Expo Router app targeting web and native from a single codebase with theme and auth contexts.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Express API with Prisma/PostgreSQL, modular controllers, and scheduled jobs for cleanup and event completion.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Integrations</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Stripe, Resend, Discord bot, GitHub App for policy repos, and Turnstile for friction‑light bot defense.</p>
              </div>
            </div>
          </motion.section>

          {/* My Role */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-pink-600 bg-clip-text text-transparent">My Role</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
              <li>Product/UX: information architecture, role‑aware flows</li>
              <li>Frontend: design system, Expo Router, SEO/metadata</li>
              <li>Backend: route design, controllers, auth middleware</li>
              <li>Data: Prisma models and migrations</li>
              <li>Integrations: Stripe, Discord, Resend, GitHub App</li>
              <li>DevOps: CI, automated builds and deployments</li>
            </ul>
          </motion.section>

          {/* Challenges and Solutions */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Challenges and Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Multi‑role UX without duplication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">I built a role‑aware navigation and permission layer so the same components adapt to ADMIN, WRITER, EVENT_MANAGER and MEMBER contexts.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Reliable auth across devices</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Short‑lived access tokens with refresh tokens and device fingerprints ensure security while keeping sessions seamless on web and mobile.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Payments and lifecycle sync</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Stripe webhooks update local state for subscription events, enabling accurate billing status and reactivation flows.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Policy authoring via GitHub</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">A GitHub App integration exposes policy repos in‑app with file editing and PR workflows, making governance transparent and auditable.</p>
              </div>
            </div>
          </motion.section>

          {/* Security and Auth Model */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">Security and Auth</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
              <li>JWT access + DB‑stored refresh tokens</li>
              <li>Role checks in middleware and UI guards</li>
              <li>Turnstile‑backed onboarding endpoints</li>
              <li>Least‑privilege API patterns and CORS discipline</li>
            </ul>
          </motion.section>

          {/* Admin and Workflows */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Admin and Workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Onboarding</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Approval queues, access codes, and notifications streamline member intake.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Events</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Create, manage and complete events with automatic volunteer hour logging.</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-white">Content</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Newsroom authoring with reactions and moderation tools.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}
