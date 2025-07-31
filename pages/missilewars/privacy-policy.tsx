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
        <div className="absolute top-20 left-1/4 w-1/2 h-1/2 bg-red-500/20 dark:block hidden blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-80 right-1/4 w-1/3 h-1/3 bg-amber-500/20 dark:block hidden blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 px-4 sm:px-6">
          {/* Header */}
          <motion.section
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent inline-block pb-3 border-b-2 border-orange-300/30 dark:border-orange-500/30">
              Privacy Policy for Missile Wars Revival
            </h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              <strong>Effective Date: 09/09/2024</strong>
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
              This Privacy Policy describes how Missile Wars Revival (the "App"), developed and managed by One Studio One Game, LLC, collects, uses, and shares your personal information when you use our App.
            </p>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Personal Information:</strong> We collect personal information that you provide to us such as name, email address, and social media usernames.</li>
                <li><strong>Usage Information:</strong> We collect information automatically as you use the App, including game progress, scores, and interactions with in-app features.</li>
                <li><strong>Device Information:</strong> We collect information about the mobile device you use to access our App, including hardware models, operating system versions, unique device identifiers, and mobile network information.</li>
                <li><strong>Location Information:</strong> We collect precise location data from your device, which is essential for providing location-based services and features such as Live Activities. This data is collected with your consent and can be disabled at any time through your device settings.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>To provide, maintain, and improve the App, including customer support, personalized features, and location-based services including Live Activities.</li>
                <li>To communicate with you about game updates, new features, and promotional offers, unless you have opted out of receiving such communications.</li>
                <li>To monitor and analyze trends, usage, and activities in connection with our App.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Sharing of Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf, such as hosting, data analysis, and advertising services.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                <li><strong>Business Transfers:</strong> In the event that One Studio One Game, LLC is involved in a merger, acquisition, or sale of assets, your information may be transferred.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Your Rights and Choices</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Access and Updates:</strong> You can review and update personal information by accessing your account settings within the App.</li>
                <li><strong>Opt-out:</strong> You may opt out of receiving promotional emails from us by following the unsubscribe link included in such emails.</li>
                <li><strong>Cookies and Similar Technologies:</strong> You have the choice to accept or refuse cookies and similar technologies used by the App.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Security</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We implement reasonable security measures to help protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">International Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                The App is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </motion.section>

            <motion.section className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Email: missilewarsdev@gmail.com</li>
                <li>Address: 1111B South Governors Avenue, 21339, Dover, DE 19904</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Compliance and Availability</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>This policy is linked on the app's store listing page in the Play Console and within the app itself.</li>
                <li>It is available on an active, publicly accessible, and non-geofenced URL.</li>
              </ul>
            </motion.section>
          </motion.div>

          {/* Footer Note */}
          <motion.section 
            className="text-center text-sm text-gray-500 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p>&copy; 2024 Missile Wars. All rights reserved.</p>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy