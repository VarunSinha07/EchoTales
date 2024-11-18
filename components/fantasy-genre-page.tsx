'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Feather, Home, Bookmark, User, Heart, Skull, Glasses, Wand2 } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function FantasyGenrePageComponent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const stories = [
    { id: 1, title: "The Dragon's Prophecy", author: "Elara Stormborn", description: "An epic tale of destiny and dragons" },
    { id: 2, title: "Whispers of the Enchanted Forest", author: "Finn Leafwalker", description: "A journey through magical realms" },
    { id: 3, title: "The Sorcerer's Apprentice", author: "Merlin Ambrosius", description: "Magic and mischief in a wizard's tower" },
    { id: 4, title: "Realm of the Fae", author: "Aria Moonwhisper", description: "Adventures in the land of faeries" },
    { id: 5, title: "The Cursed Crown", author: "Rowan Blackthorn", description: "A quest to break an ancient royal curse" },
    { id: 6, title: "Echoes of Atlantis", author: "Naia Seasinger", description: "Uncovering the secrets of a lost civilization" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-fantasy">
      {/* Header */}
      <header className="p-4 flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300">
            <span>Menu</span>
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 text-gray-100 p-2 rounded-md shadow-lg">
            <DropdownMenuItem className="hover:bg-gray-700 px-2 py-1 rounded-md cursor-pointer">
              <User size={16} className="mr-2" />
              User Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 px-2 py-1 rounded-md cursor-pointer">
              <Bookmark size={16} className="mr-2" />
              Bookmarked Stories
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 px-2 py-1 rounded-md cursor-pointer">
              <Feather size={16} className="mr-2" />
              Writer Dashboard
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="text-3xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors duration-300 cursor-pointer ml-6 font-enchanted">
          EchoTales
        </h1>
        <nav className="ml-auto flex space-x-4">
          <Link href="/romance" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center">
            <Heart size={20} className="mr-2" />
            Romance
          </Link>
          <Link href="/mystery" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center">
            <Skull size={20} className="mr-2" />
            Mystery
          </Link>
          <Link href="/thriller" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center">
            <Glasses size={20} className="mr-2" />
            Thriller
          </Link>
        </nav>
      </header>

      {/* Genre Header */}
      <div className="relative text-center py-16">
        <h2 className="text-6xl font-bold text-blue-400 font-magical relative z-10 animate-pulse">
          Fantasy
        </h2>
        <div className="absolute inset-0 bg-[url('/banner/fantasy-bg.png')] opacity-20 bg-cover bg-center"></div>
      </div>

      {/* Story List */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`bg-gray-800 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                hoveredCard === story.id ? 'bg-blue-900 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredCard(story.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-300">{story.title}</h3>
              <p className="text-gray-400 mb-4">{story.author}</p>
              <p className="text-gray-300">{story.description}</p>
              {hoveredCard === story.id && (
                <div className="mt-4 flex justify-end">
                  <Wand2 className="text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 right-8">
        <Link
          href="/"
          className="bg-gray-800 text-emerald-300 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-300"
        >
          <Home size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}