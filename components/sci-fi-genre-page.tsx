'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronLeft, Rocket, Heart, Zap, Skull } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SciFiGenrePageComponent() {
  const stories = [
    { id: 1, title: "Nebula's Edge", author: "Zara Starling", description: "Space exploration" },
    { id: 2, title: "Quantum Paradox", author: "Axel Nova", description: "Time travel" },
    { id: 3, title: "Cyber Nexus", author: "Elara Byte", description: "Cyberpunk" },
    { id: 4, title: "Galactic Emissary", author: "Orion Flux", description: "Alien contact" },
    { id: 5, title: "Neon Horizon", author: "Nova Spark", description: "Dystopian future" },
    { id: 6, title: "Singularity Shift", author: "Quasar Zen", description: "AI uprising" },
  ]

  return (
    <div className="min-h-screen bg-black text-cyan-400 p-6 space-background">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Menu <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-cyan-400">
              <DropdownMenuItem>
                <Link href="/profile" className="text-cyan-400 hover:text-white transition-colors duration-300">User Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/bookmarks" className="text-cyan-400 hover:text-white transition-colors duration-300">Bookmarked Stories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard" className="text-cyan-400 hover:text-white transition-colors duration-300">Writer Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/" className="text-4xl font-bold text-cyan-400 hover:text-white transition-colors duration-300 echoes-logo">
            EchoTales
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link href="/genre/romance" className="flex items-center text-pink-400 hover:text-white transition-colors duration-300">
            <Heart className="h-6 w-6 mr-2" />
            <span>Romance</span>
          </Link>
          <Link href="/genre/thriller" className="flex items-center text-red-400 hover:text-white transition-colors duration-300">
            <Zap className="h-6 w-6 mr-2" />
            <span>Thriller</span>
          </Link>
          <Link href="/genre/mystery" className="flex items-center text-purple-400 hover:text-white transition-colors duration-300">
            <Skull className="h-6 w-6 mr-2" />
            <span>Mystery</span>
          </Link>
        </nav>
      </header>

      <main>
        <h1 className="text-6xl font-bold text-center mb-12 text-cyan-400 glitch-effect">
          Sci-Fi
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link href={`/story/${story.id}`} key={story.id} className="block transform transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-cyan-900 to-blue-900 border border-cyan-400 rounded-lg p-6 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">{story.title}</h2>
                  <p className="text-sm mb-2 text-cyan-200 group-hover:text-white transition-colors duration-300">{story.author}</p>
                </div>
                <p className="text-xs text-cyan-300 group-hover:text-white transition-colors duration-300">{story.description}</p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-12 flex justify-center">
        <Link href="/">
          <Button variant="outline" className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </footer>
    </div>
  )
}