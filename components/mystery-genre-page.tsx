'use client'

import React, { useState } from 'react'
import { ChevronDown, Home, Book, User, PenTool, Search, Footprints, Heart, Wand2 } from 'lucide-react'
import Link from 'next/link'

const genres = [
  { name: 'Fantasy', icon: <Wand2 className="w-6 h-6" /> },
  { name: 'Romance', icon: <Heart className="w-6 h-6" /> },
  { name: 'Thriller', icon: <Footprints className="w-6 h-6" /> },
]

const stories = [
  { title: 'The Vanishing Key', author: 'A. Sleuth', description: 'A locked room mystery' },
  { title: 'Whispers in the Fog', author: 'M. Shadow', description: 'Atmospheric noir' },
  { title: 'The Crimson Cipher', author: 'C. Enigma', description: 'Code-breaking thriller' },
  { title: 'Echoes of Deception', author: 'E. Riddle', description: 'Psychological suspense' },
  { title: 'The Midnight Conspiracy', author: 'N. Intrigue', description: 'Political mystery' },
  { title: 'Shadows of the Past', author: 'S. Secrets', description: 'Historical whodunit' },
]

export function MysteryGenrePageComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Twinkling Stars */}
      <div className="stars"></div>
      <div className="twinkling"></div>

      {/* Header */}
      <header className="p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <span>Menu</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" role="menuitem">
                    <User className="inline-block w-4 h-4 mr-2" />User Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" role="menuitem">
                    <Book className="inline-block w-4 h-4 mr-2" />Bookmarked Stories
                  </a>
                  <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" role="menuitem">
                    <PenTool className="inline-block w-4 h-4 mr-2" />Writer Dashboard
                  </a>
                </div>
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:from-white hover:to-gray-300 transition-all duration-300 animate-glow">
            EchoTales
          </h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          {genres.map((genre) => (
            <Link key={genre.name} href={`/${genre.name.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-200">
              {React.cloneElement(genre.icon, { className: 'inline-block w-6 h-6 mr-1' })}
              <span className="hidden lg:inline">{genre.name}</span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Genre Title */}
      <div className="relative text-center py-12 z-10">
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-red-700 animate-pulse">
          Mystery
        </h2>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
      </div>

      {/* Story Grid */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group">
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold mb-2 text-white relative z-10">{story.title}</h3>
                <p className="text-gray-400 text-sm mb-4 relative z-10">by {story.author}</p>
                <p className="text-gray-300 text-sm relative z-10">{story.description}</p>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white opacity-50" />
                </div>
              </div>
              <div className="bg-gray-700 px-6 py-4">
                <button className="text-white hover:text-red-400 transition-colors duration-200">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="fixed bottom-4 right-4 z-10">
        <Link href="/" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 flex items-center">
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/mystery-background.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900 to-gray-900 opacity-70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
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
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .stars, .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
        .stars {
          background: #000 url('/stars.png') repeat top center;
          z-index: 0;
        }
        .twinkling {
          background: transparent url('/twinkling.png') repeat top center;
          z-index: 1;
          animation: move-twink-back 200s linear infinite;
        }
        @keyframes move-twink-back {
          from {background-position: 0 0;}
          to {background-position: -10000px 5000px;}
        }
      `}</style>
    </div>
  )
}