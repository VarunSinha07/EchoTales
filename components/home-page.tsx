'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Facebook, Instagram, Twitter, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export function HomePageComponent() {
  const [hoveredStory, setHoveredStory] = useState(null)
  const [likedStories, setLikedStories] = useState<number[]>([])

  const genres = [
    { name: 'Fantasy', icon: '🧙‍♂️', color: 'from-purple-500 to-blue-500' },
    { name: 'Romance', icon: '💖', color: 'from-pink-500 to-red-500' },
    { name: 'Thriller', icon: '🕵️', color: 'from-gray-700 to-gray-900' },
    { name: 'Sci-Fi', icon: '🚀', color: 'from-blue-500 to-green-500' },
    { name: 'Mystery', icon: '🔍', color: 'from-yellow-500 to-orange-500' },
  ]

  const featuredStories = [
    { id: 1, title: 'The Enchanted Forest', author: 'Alice Wonder', genre: 'Fantasy' },
    { id: 2, title: 'Midnight Serenade', author: 'Jack Harmony', genre: 'Romance' },
    { id: 3, title: 'The Silent Witness', author: 'Olivia Keen', genre: 'Thriller' },
    { id: 4, title: 'Starship Odyssey', author: 'Neil Cosmos', genre: 'Sci-Fi' },
    { id: 5, title: 'The Whispering Shadows', author: 'Varun Sinha', genre: 'Mystery' },
    { id: 6, title: 'Love in the Time of Dragons', author: 'Michael Pencraft', genre: 'Fantasy' },
    { id: 7, title: 'The Quantum Paradox', author: 'Sophia Storyline', genre: 'Sci-Fi' },
    { id: 8, title: 'Echoes of Eternity', author: 'Daniel Plottwist', genre: 'Romance' },
  ]

  const topWriters = [
    { id: 1, name: 'Varun Sinha', views: 112500 },
    { id: 2, name: 'Michael Pencraft', views: 95000 },
    { id: 3, name: 'Sophia Storyline', views: 80000 },
    { id: 4, name: 'Daniel Plottwist', views: 60000 },
    { id: 5, name: 'Laura Lettersmith', views: 40000 },
  ]

  const topStories = [
    { id: 1, title: 'The Whispering Shadows', views: 80000 },
    { id: 2, title: 'Love in the Time of Dragons', views: 45000 },
    { id: 3, title: 'The Quantum Paradox', views: 40000 },
    { id: 4, title: 'Echoes of Eternity', views: 35000 },
    { id: 5, title: 'The Last Serenade', views: 30000 },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Menu <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
            <DropdownMenuItem>
              <Link href="/profile" className="w-full text-gray-200 hover:text-white">User Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/bookmarks" className="w-full text-gray-200 hover:text-white">Bookmarked Stories</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard" className="w-full text-gray-200 hover:text-white">Writer Dashboard</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          EchoTales
        </h1>
      </header>

      <main>
        <section className="hero bg-gradient-to-b from-gray-800 to-gray-900 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/banner/banner.png?height=600&width=800')] opacity-35 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600 animate-pulse">
              Discover stories. Listen to audiobooks. Share your creativity.
            </h2>
          </div>
        </section>

        <section className="genres container mx-auto px-4 py-12">
          <h3 className="text-3xl font-semibold mb-8">Explore Genres</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {genres.map((genre) => (
              <Link
                key={genre.name}
                href={`/genre/${genre.name.toLowerCase()}`}
                className={`bg-gray-800 p-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br ${genre.color}`}
              >
                <span className="text-4xl mb-2 block">{genre.icon}</span>
                <span className="text-lg">{genre.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="featured-stories container mx-auto px-4 py-12">
          <h3 className="text-3xl font-semibold mb-8">Featured Stories & Audiobooks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onMouseEnter={() => setHoveredStory(null)}
                onMouseLeave={() => setHoveredStory(null)}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{story.title}</h4>
                  <p className="text-gray-400 mb-2">by {story.author}</p>
                  <p className="text-sm text-gray-500 mb-4">{story.genre}</p>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`transition-colors duration-300 ${
                        likedStories.includes(story.id) ? 'text-red-500 hover:text-red-400' : 'text-pink-500 hover:text-pink-400'
                      }`}
                      onClick={() => {
                        setLikedStories(prev =>
                          prev.includes(story.id)
                            ? prev.filter(id => id !== story.id)
                            : [...prev, story.id]
                        )
                      }}
                    >
                      <Heart className={`mr-2 h-4 w-4 ${likedStories.includes(story.id) ? 'fill-current' : ''}`} />
                      {likedStories.includes(story.id) ? 'Liked' : 'Like'}
                    </Button>
                    <Button variant="outline" size="sm" className="bg-gray-700 hover:bg-gray-600">
                      View Details
                    </Button>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 ${
                    hoveredStory === story.id ? 'opacity-20' : ''
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </section>

        <section className="leaderboard container mx-auto px-4 py-12">
          <h3 className="text-3xl font-semibold mb-8">Leaderboards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h4 className="text-2xl font-semibold mb-4">Top Writers</h4>
              <ul className="bg-gray-800 rounded-lg overflow-hidden flex-grow">
                {topWriters.map((writer, index) => (
                  <li key={writer.id} className="p-4 hover:bg-gray-700 transition-colors duration-200">
                    <Link href={`/writer/${writer.id}`} className="flex justify-between items-center">
                      <span>{index + 1}. {writer.name}</span>
                      <span className="text-gray-400">{writer.views.toLocaleString()} views</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-2xl font-semibold mb-4">Top Stories</h4>
              <ul className="bg-gray-800 rounded-lg overflow-hidden flex-grow">
                {topStories.map((story, index) => (
                  <li key={story.id} className="p-4 hover:bg-gray-700 transition-colors duration-200">
                    <Link href={`/story/${slugify(story.title)}`}  className="flex justify-between items-center">
                      <span>{index + 1}. {story.title}</span>
                      <span className="text-gray-400">{story.views.toLocaleString()} views</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
            <p>&copy; 2024 EchoTales. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}