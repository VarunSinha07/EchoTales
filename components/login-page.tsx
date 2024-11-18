'use client'

import { useState } from "react"
import { Eye, EyeOff, Facebook, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginPageComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement login logic here
    setError("Invalid email or password") // Example error
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-between">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          EchoTales
        </h1>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded animate-fade-in">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="ml-2">
                Remember Me
              </Label>
            </div>

            <div>
              <Link href="/">
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Login
              </Button>
              </Link>
            </div>
          </form>

          <div className="text-center">
            <a
              href="#"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white"
            >
              <Facebook size={16} />
              <span>Facebook</span>
            </Button>
            <Link href="/">
            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-white hover:bg-gray-200 focus:ring-gray-300 text-gray-800 border border-gray-300"
            >
              <Chrome size={16} />
              <span>Google</span>
            </Button>
            </Link>
          </div>

          <div className="text-center">
            <p>
              Dont have an account?{" "}
              <a
                href="/register"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500">
        <a href="#" className="hover:text-gray-400 transition-colors duration-200">
          Terms of Service
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-gray-400 transition-colors duration-200">
          Privacy Policy
        </a>
      </footer>
    </div>
  )
}