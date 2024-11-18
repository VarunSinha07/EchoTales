'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, Heart, Bookmark, Play, Pause, Rewind, FastForward, MessageSquare, ThumbsUp, ThumbsDown, Facebook, Twitter, Instagram, Share2 } from 'lucide-react'
import Link from 'next/link'

export function StoryDetailPageComponent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [fontSize, setFontSize] = useState(18)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <header className="p-4 flex justify-between items-center border-b border-gray-700">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white hover:bg-gray-800">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-800 text-gray-100 border-gray-700">
            <DropdownMenuItem className="hover:bg-gray-700 text-gray-200">User Profile</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 text-gray-200">Bookmarked Stories</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 text-gray-200">Writer Dashboard</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          EchoTales
        </h1>
        <div className="w-8" /> {/* Placeholder for right side balance */}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-white">The Whisper in the Shadows</h2>
          <div className="flex items-center space-x-4 mb-6">
            <Avatar>
              <AvatarImage src="/avatar/avatar.png" alt="Author" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-gray-200">Varun Sinha</p>
              <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">View Profile</a>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`text-gray-200 hover:text-white ${isPlaying ? 'text-purple-400' : ''}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white">
                  <Rewind className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-200 hover:text-white">
                  <FastForward className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-200">Font Size:</span>
                <Slider
                  value={[fontSize]}
                  min={14}
                  max={24}
                  step={1}
                  onValueChange={(value) => setFontSize(value[0])}
                  className="w-32"
                />
              </div>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-1/3" />
            </div>
          </div>
          <div className="prose prose-invert max-w-none" style={{ fontSize: `${fontSize}px` }}>
            <p className="text-gray-200 leading-relaxed">
              The old house creaked and groaned, its weathered boards protesting against the howling wind. Sarah stood at the threshold, her heart pounding in her chest as she peered into the inky darkness beyond. The floorboards beneath her feet seemed to whisper ancient secrets, and the air was thick with the scent of dust and forgotten memories.
            </p>
            <p className="text-gray-200 leading-relaxed mt-4">
              As she took a tentative step forward, the door slammed shut behind her with a resounding bang. Sarah whirled around, her eyes wide with fear, only to find that the entrance had vanished, replaced by a solid wall. She was trapped, alone in a house that seemed to breathe with a life of its own.
            </p>
            {/* More story content here */}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((part) => (
              <div key={part} className="relative group">
                <Button
                  variant="outline"
                  className="w-full justify-between text-gray-200 hover:bg-gray-700 transition-colors duration-200 ease-in-out"
                >
                  <span>Part {part}</span>
                  <div className="flex space-x-2">
                    <Heart className="h-4 w-4 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
                    <Bookmark className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200" />
                  </div>
                </Button>
                <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
              </div>
            ))}
            {[6, 7, 8].map((part) => (
              <div key={part} className="relative">
                <Button
                  variant="outline"
                  className="w-full justify-start opacity-50 cursor-not-allowed text-gray-400"
                  disabled
                >
                  <span>Part {part}</span>
                  <span className="ml-2">🔒</span>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className={`text-gray-200 hover:text-white ${isLiked ? 'text-red-500' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`text-gray-200 hover:text-white ${isBookmarked ? 'text-yellow-500' : ''}`}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark className={`h-6 w-6 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-blue-400 hover:text-blue-300">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-sky-400 hover:text-sky-300">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-pink-400 hover:text-pink-300">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">Comments</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((comment) => (
              <Card key={comment} className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>U{comment}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-200">User {comment}</p>
                        <p className="text-sm text-gray-400">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-200">This story is absolutely gripping! I cant wait for the next part.</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="mt-4 w-full text-gray-200">
            <MessageSquare className="mr-2 h-4 w-4" /> Add a comment
          </Button>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 text-white">Related Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((story) => (
              <Card key={story} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">The Midnight Caller</h4>
                  <p className="text-sm text-gray-400 mb-2">by John Smith</p>
                  <p className="text-sm text-gray-300">A chilling tale of mystery and suspense...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 py-6 border-t border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Back to Home
          </Button>
          </Link>
          <Link href="/genre/mystery">
          <Button variant="link" className="text-purple-400 hover:text-purple-300">
            Explore More in Mystery Genre
          </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}