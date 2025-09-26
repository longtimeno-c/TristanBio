import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Pintless: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pintless - Tristan Hill</title>
        <meta name="description" content="Pintless - A social networking mobile app for friends to connect, plan, and track drinking-related social events" />
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Pintless
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              A social networking mobile app built with React Native and Expo for friends to connect, plan, and track drinking-related social events.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Expo</span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Firebase</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Mobile App</span>
              <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">Social Networking</span>
            </div>
          </div>

          {/* Core Purpose Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Core Purpose</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Pintless is a gamified social platform that helps users organize and document social drinking outings with friends. 
              The app focuses on tracking consumption, costs, and maintaining streaks of participation for pub crawls, bar visits, 
              and similar social activities.
            </p>
          </section>

          {/* Key Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Authentication & User Management */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Authentication & User Management</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Email/password login with form validation</li>
                  <li>• Social login via Google and Apple Sign-In</li>
                  <li>• Customizable user profiles with photos</li>
                  <li>• Profile statistics and streak tracking</li>
                </ul>
              </div>

              {/* Friend System */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Friend System</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Add friends by email address</li>
                  <li>• GPS-based discovery of nearby users</li>
                  <li>• Friend lists with activity indicators</li>
                  <li>• Deep link sharing for invitations</li>
                </ul>
              </div>

              {/* Event Planning */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Event Planning & Management</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Create events with custom names and timing</li>
                  <li>• Invite friends to participate</li>
                  <li>• Real-time event tracking</li>
                  <li>• Participant management tools</li>
                </ul>
              </div>

              {/* Consumption Tracking */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-orange-600 dark:text-orange-400">Consumption Tracking</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Track individual drink counts per event</li>
                  <li>• Calculate and display total costs</li>
                  <li>• Event leaderboards and rankings</li>
                  <li>• Personal consumption charts with filters</li>
                </ul>
              </div>

              {/* Gamification */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-pink-600 dark:text-pink-400">Gamification Elements</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Daily/weekly/monthly participation streaks</li>
                  <li>• Visual progress indicators</li>
                  <li>• Animated counters and achievements</li>
                  <li>• Social activity tracking</li>
                </ul>
              </div>

              {/* Media & Sharing */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Media & Sharing</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Photo upload and sharing for events</li>
                  <li>• Firebase Storage integration</li>
                  <li>• Event photo galleries</li>
                  <li>• Camera and gallery access</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Frontend Technologies</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• React Native with Expo framework</li>
                    <li>• Expo Router for navigation</li>
                    <li>• Custom themed components</li>
                    <li>• Responsive mobile design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Backend & Services</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Firebase Authentication</li>
                    <li>• Firestore database</li>
                    <li>• Firebase Storage for media</li>
                    <li>• Push notifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* App Flow */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">App Flow</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <p className="text-gray-600 dark:text-gray-300">Users register/login and set up profiles</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <p className="text-gray-600 dark:text-gray-300">Add friends and discover nearby users</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <p className="text-gray-600 dark:text-gray-300">Create or join drinking events</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <p className="text-gray-600 dark:text-gray-300">Track drinks and costs during events</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <p className="text-gray-600 dark:text-gray-300">View leaderboards, streaks, and consumption statistics</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                <p className="text-gray-600 dark:text-gray-300">Share photos and maintain social connections</p>
              </div>
            </div>
          </section>

          {/* Additional Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Additional Features</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Dark/Light Theme</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Custom themed components with gradients</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Location Services</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">GPS-based friend discovery</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                <h4 className="font-semibold mb-2">Haptic Feedback</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Enhanced user interactions</p>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
            <p className="text-lg leading-relaxed">
              Pintless is designed for social drinkers who want to gamify and document their pub-going experiences with friends. 
              It combines event planning with consumption tracking and social networking features, creating an engaging platform 
              for organizing and remembering social drinking activities.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Pintless;