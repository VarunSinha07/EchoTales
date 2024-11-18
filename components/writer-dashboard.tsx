"use client"

import React from 'react'
import { Bell, Book, ChevronRight, Edit, Eye, Heart, MessageCircle, Mic, Star, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

export function WriterDashboardComponent() {
  // Mock data - replace with actual data fetching logic
  const writerName = "Varun Sinha"
  const totalViews = 112500
  const totalLikes = 12000
  const totalComments = 900
  const activeAudiobooks = 3

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          EchoTales
        </h1>
        <Button variant="outline" size="icon" className="border-gray-600 bg-gray-700 text-white hover:bg-gray-600 hover:text-white">
          <Bell className="h-4 w-4" />
        </Button>
      </header>

      <main className="space-y-8">
        {/* Welcome Section */}
        <section className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-avatar.jpg" alt={writerName} />
              <AvatarFallback>{writerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-semibold">Welcome back, {writerName}!</h2>
          </div>
          <div className="flex space-x-4">
            <Card className="w-[150px] bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-100">Total Views</CardTitle>
                <Eye className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card className="w-[150px] bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-100">Total Likes</CardTitle>
                <Heart className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="text-2xl font-bold">{totalLikes.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card className="w-[150px] bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-100">Total Comments</CardTitle>
                <MessageCircle className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="text-2xl font-bold">{totalComments.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card className="w-[150px] bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-100">Active Audiobooks</CardTitle>
                <Mic className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="text-2xl font-bold">{activeAudiobooks}</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Management */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Story Management</CardTitle>
              <CardDescription className="text-gray-400">Manage your submitted stories and create new ones</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Your Stories</h3>
                  <Link href="/story-submission">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-white font-semibold">
                    Submit New Story
                  </Button>
                  </Link>
                </div>
                <div className="grid gap-4">
                  {['The Echoing Void', 'Whispers of Eternity', 'Neon Dreams'].map((story, index) => (
                    <Card key={index} className="transition-all duration-300 hover:bg-gray-700 hover:shadow-lg bg-gray-800 border-gray-700">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-gray-100">{story}</CardTitle>
                        <Badge variant={index === 0 ? "default" : index === 1 ? "secondary" : "outline"}
                               className="bg-gray-700 text-gray-200 hover:bg-gray-600">
                          {index === 0 ? 'Published' : index === 1 ? 'Pending' : 'Draft'}
                        </Badge>
                      </CardHeader>
                      <CardContent className="text-gray-300">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Sci-Fi • 15 min read</span>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm" className="border-gray-600 bg-gray-700 text-white hover:bg-gray-600 hover:text-white">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="border-gray-600 bg-gray-700 text-white hover:bg-gray-600 hover:text-white">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="border-gray-600 bg-gray-700 text-white hover:bg-gray-600 hover:text-white">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Performance Analytics */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Performance Analytics</CardTitle>
              <CardDescription className="text-gray-400">Track your stories' performance over time</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="h-[300px]">
                
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Audiobooks Section */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Audiobooks</CardTitle>
              <CardDescription className="text-gray-400">Manage your audiobook productions</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-4">
                {['The Echoing Void', 'Whispers of Eternity'].map((book, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Mic className="h-6 w-6 text-purple-500" />
                      <span>{book}</span>
                    </div>
                    <Badge variant={index === 0 ? "default" : "secondary"} className="bg-gray-700 text-gray-200 hover:bg-gray-600">
                      {index === 0 ? 'Live' : 'In Production'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Milestones and Achievements */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Milestones and Achievements</CardTitle>
              <CardDescription className="text-gray-400">Track your writing journey</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="flex justify-between items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span>Top Writer of the Month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="h-6 w-6 text-blue-500" />
                  <span>10 Stories Published</span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">150k Views Goal</span>
                    <span className="text-sm font-medium text-gray-300">75%</span>
                  </div>
                  <Progress value={75} className="w-[200px] bg-gray-700" indicatorClassName="bg-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Earnings and Royalties */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Earnings and Royalties</CardTitle>
              <CardDescription className="text-gray-400">Track your earnings from stories and audiobooks</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Earnings</span>
                  <span className="text-2xl font-bold">₹76380</span>
                </div>
               
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reader Feedback & Comments */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Reader Feedback & Comments</CardTitle>
              <CardDescription className="text-gray-400">Manage and respond to reader comments</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-4">
                {['Great story!', 'I loved the characters', 'Can\'t wait for the next one!'].map((comment, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>R{index + 1}</AvatarFallback>
                      </Avatar>
                      <span>{comment}</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-gray-600 bg-gray-700 text-white hover:bg-gray-600 hover:text-white">Reply</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Profile Management */}
        <section>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-100">Profile Management</CardTitle>
              <CardDescription className="text-gray-400">Update your writer profile</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-avatar.jpg" alt={writerName} />
                    <AvatarFallback>{writerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{writerName}</h3>
                    <p className="text-sm text-gray-400">Sci-Fi Enthusiast • 10 Stories Published</p>
                  </div>
                </div>
                <Button variant="outline" className="border-gray-600 bg-gray-700 text-white hover:bg-gray-600 hover:text-white">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Back to Homepage Button */}
        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 text-white font-semibold"
              size="lg"
            >
              Back to Homepage
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}