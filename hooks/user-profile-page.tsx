'use client';
import React, { useState } from 'react'
import { ChevronDown, Home, Book, User, PenTool, Edit, Heart, Headphones, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const favoriteStories = [
  { title: 'The Midnight Whisper', author: 'E. A. Poe', description: 'A chilling tale of mystery' },
  { title: 'Echoes of Eternity', author: 'S. King', description: 'A haunting journey through time' },
  { title: 'The Quantum Paradox', author: 'I. Asimov', description: 'Sci-fi meets mystery' },
]

const subscriptions = [
  { type: 'Mystery Genre', renewalDate: '2024-05-15' },
  { type: 'Author: J. K. Rowling', renewalDate: '2024-06-01' },
]

const purchasedAudiobooks = [
  { title: 'The Silent Witness', author: 'A. Christie', coverArt: '/books/the-silent-witness.png?height=150&width=100' },
  { title: 'Shadows of the Past', author: 'D. Brown', coverArt: '/books/shadows-of-the-past.png?height=150&width=100' },
]

export default function UserProfilePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <span>Menu</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" role="menuitem">
                  <User className="inline-block w-4 h-4 mr-2" />User Profile
                </Link>
                <Link href="/bookmarks" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" role="menuitem">
                  <Book className="inline-block w-4 h-4 mr-2" />Bookmarked Stories
                </Link>
                <Link href="/writer-dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" role="menuitem">
                  <PenTool className="inline-block w-4 h-4 mr-2" />Writer Dashboard
                </Link>
                <Link href="/" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" role="menuitem">
                  <Home className="inline-block w-4 h-4 mr-2" />Home Page
                </Link>
              </div>
            </div>
          )}
        </div>
        <h1 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:from-white hover:to-gray-300 transition-all duration-300 animate-glow">
          EchoTales
        </h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* User Information */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="relative group">
              <Image
                src="/avatar/avatar.png"
                alt="User Avatar"
                width={200}
                height={200}
                className="rounded-full border-4 border-gray-700 transition-all duration-300 group-hover:border-gray-500"
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Edit className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 hover:text-gray-300 transition-colors duration-200">Varun Sinha</h2>
              <div className="flex flex-col space-y-2 mb-4">
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  varunsinha2604@gmail.com
                </p>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  9341549993
                </p>
              </div>
              <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-200">Avid reader and aspiring writer. Lover of all things mysterious and fantastical.</p>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                Edit Profile
              </button>
            </div>
          </div>
        </section>

        {/* Favorite Stories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Favorite Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteStories.map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">by {story.author}</p>
                  <p className="text-gray-300 text-sm">{story.description}</p>
                </div>
                <div className="bg-gray-700 px-6 py-4">
                  <button className="text-white hover:text-red-400 transition-colors duration-200 flex items-center">
                    <Heart className="w-4 h-4 mr-2" /> Favorite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscriptions */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Subscriptions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriptions.map((sub, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{sub.type}</h4>
                  <p className="text-gray-400 text-sm">Renews on: {sub.renewalDate}</p>
                </div>
                <div className="bg-gray-700 px-6 py-4">
                  <button className="text-white hover:text-blue-400 transition-colors duration-200">
                    Manage Subscription
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Purchased Audiobooks */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Purchased Audiobooks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchasedAudiobooks.map((book, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="p-6 flex items-center space-x-4">
                  <Image src={book.coverArt} alt={book.title} width={100} height={150} className="rounded" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{book.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">by {book.author}</p>
                  </div>
                </div>
                <div className="bg-gray-700 px-6 py-4">
                  <button className="text-white hover:text-green-400 transition-colors duration-200 flex items-center">
                    <Headphones className="w-4 h-4 mr-2" /> Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 flex items-center">
            <Home className="w-5 h-5 mr-2" /> Home
          </Link>
          <Link href="/story-submission" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 flex items-center">
            <PenTool className="w-5 h-5 mr-2" /> Submit Story
          </Link>
        </div>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900 to-gray-900 opacity-70"></div>
      </div>

      <style jsx global>{`
        @keyframes glow {
          0% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.8); }
          100% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
        }
        .animate-glow {
          animation: glow 3s infinite;
        }
      `}</style>
    </div>
  )
}