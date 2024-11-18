"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Upload, Save, Eye, Send } from 'lucide-react'
import Link from 'next/link'

export function StorySubmissionPageComponent() {
  const [isAudiobook, setIsAudiobook] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [storyParts, setStoryParts] = useState([{ title: '', content: '' }])

  const handleWordCount = (content: string) => {
    const words = content.trim().split(/\s+/)
    setWordCount(words.length)
  }

  const addNewPart = () => {
    setStoryParts([...storyParts, { title: '', content: '' }])
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
      <header className="flex justify-between items-center mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-gray-600 bg-gray-800 text-white hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105">
              Menu <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            <DropdownMenuItem>
              <Link href="/profile" className="text-gray-200 hover:text-white">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/" className="text-gray-200 hover:text-white">Homepage</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard" className="text-gray-200 hover:text-white">Writer Dashboard</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          EchoTales
        </h1>
      </header>

      <main className="space-y-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-100">Submit Your Story</CardTitle>
            <CardDescription className="text-gray-400">Share your creativity with the world</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-gray-200">Story Title</Label>
                <Input id="title" placeholder="Enter your story title" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div>
                <Label htmlFor="genre" className="text-gray-200">Genre</Label>
                <Select>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                    <SelectItem value="thriller">Thriller</SelectItem>
                    <SelectItem value="scifi">Science Fiction</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cover-image" className="text-gray-200">Cover Image</Label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="cover-image" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-400">PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="cover-image" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="audiobook" className="text-gray-200">Audiobook</Label>
                <Switch id="audiobook" checked={isAudiobook} onCheckedChange={setIsAudiobook} />
              </div>
              {isAudiobook && (
                <div>
                  <Label htmlFor="audio-file" className="text-gray-200">Audio File</Label>
                  <Input id="audio-file" type="file" accept="audio/*" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              )}
              <div>
                <Label htmlFor="description" className="text-gray-200">Story Description</Label>
                <Textarea id="description" placeholder="Enter a brief summary of your story" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div>
                <Label htmlFor="tags" className="text-gray-200">Tags</Label>
                <Input id="tags" placeholder="Enter tags separated by commas" className="bg-gray-700 border-gray-600 text-white" />
              </div>
            </div>

            {storyParts.map((part, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-200">
                    {index === 0 ? 'Story Content' : `Part ${index + 1}`}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {index > 0 && (
                    <Input
                      placeholder={`Part ${index + 1} Title`}
                      className="mb-4 bg-gray-600 border-gray-500 text-white"
                      value={part.title}
                      onChange={(e) => {
                        const newParts = [...storyParts]
                        newParts[index].title = e.target.value
                        setStoryParts(newParts)
                      }}
                    />
                  )}
                  <Textarea
                    placeholder="Write your story here..."
                    className="min-h-[200px] bg-gray-600 border-gray-500 text-white"
                    value={part.content}
                    onChange={(e) => {
                      const newParts = [...storyParts]
                      newParts[index].content = e.target.value
                      setStoryParts(newParts)
                      handleWordCount(e.target.value)
                    }}
                  />
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between items-center">
              <Button onClick={addNewPart} className="bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                Add New Part
              </Button>
              <Badge variant="secondary" className="text-gray-200">
                Word Count: {wordCount}
              </Badge>
            </div>

            <div className="flex justify-between">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Save className="mr-2 h-4 w-4" /> Save Draft
              </Button>
              <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                <Eye className="mr-2 h-4 w-4" /> Preview
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                <Send className="mr-2 h-4 w-4" /> Submit Story
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-100">Submission Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ul className="list-disc list-inside space-y-2">
              <li>Ensure your story is original and does not infringe on copyrights.</li>
              <li>Proofread your work for spelling and grammatical errors.</li>
              <li>Aim for a word count between 1,000 and 10,000 words for optimal engagement.</li>
              <li>Choose relevant tags to increase your story's discoverability.</li>
              <li>If submitting an audiobook, ensure clear audio quality and proper pacing.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}