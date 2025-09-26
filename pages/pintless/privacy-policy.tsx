'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20 dark:bg-gradient-to-b dark:from-gray-900 dark:via-slate-900 dark:to-slate-800 relative">
        {/* Ambient glow effects for dark mode */}
        <div className="absolute top-20 left-1/4 w-1/2 h-1/2 bg-purple-500/20 dark:block hidden blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-80 right-1/4 w-1/3 h-1/3 bg-pink-500/20 dark:block hidden blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 px-4 sm:px-6">
          {/* Header */}
          <motion.section
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent inline-block pb-3 border-b-2 border-purple-300/30 dark:border-purple-500/30">
              Privacy Policy for Pintless
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <strong>Effective Date: September 26, 2024</strong>
            </p>
          </motion.section>

          {/* Content */}
          <motion.div
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              This Privacy Policy describes how Pintless (the "App"), developed by Tristan Hill, collects, uses, and shares your personal information when you use our App. By using the App, you agree to the collection and use of information in accordance with this policy.
            </p>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Account Information:</strong> When you register or log in, we may collect your email address, username, and password.</li>
                <li><strong>Profile Information:</strong> Information you provide in your profile, such as name, profile picture, and preferences.</li>
                <li><strong>Friends and Social Data:</strong> Information about your friends, interactions, and social connections within the app.</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Usage Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Device Information:</strong> Information about your mobile device, including device ID, operating system, and app version.</li>
                <li><strong>Location Data:</strong> If you grant permission, we may collect location data to provide location-based features.</li>
                <li><strong>Notification Data:</strong> Information related to push notifications and your preferences.</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">Permissions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">The App may request the following permissions:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Notifications:</strong> To send you updates and alerts.</li>
                <li><strong>Location:</strong> To provide location-based services (if applicable).</li>
                <li><strong>Storage:</strong> To save data locally on your device.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>To provide and maintain the App's functionality.</li>
                <li>To personalize your experience and provide customized content.</li>
                <li>To send notifications and updates about app features.</li>
                <li>To improve the App and develop new features based on usage patterns.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Sharing Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following cases:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>With Your Consent:</strong> When you explicitly agree to share your information.</li>
                <li><strong>Service Providers:</strong> To service providers who assist us in operating the App (e.g., Firebase for authentication and data storage).</li>
                <li><strong>Legal Requirements:</strong> To comply with legal obligations or respond to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Your Rights and Choices</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Access and Updates:</strong> You can access, update, or delete your personal data through your account settings.</li>
                <li><strong>Opt-out:</strong> You may opt-out of certain data collection and marketing communications.</li>
                <li><strong>Data Portability:</strong> You may request a copy of your data in a structured format.</li>
                <li><strong>Withdrawal of Consent:</strong> You can withdraw consent for data processing where applicable.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                To exercise these rights, please contact us at the information provided below.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The App is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal information from a child under 13, we will delete it immediately.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your personal information in accordance with this Privacy Policy.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date." We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Email: tristanhill@tristanhill.ca</li>
                <li>Website: https://tristanhill.ca</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Acknowledgment:</strong> By using Pintless, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions.
                </p>
              </div>
            </motion.section>
          </motion.div>

          {/* Footer Note */}
          <motion.section 
            className="text-center text-sm text-gray-500 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p>&copy; 2024 Pintless. All rights reserved.</p>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
