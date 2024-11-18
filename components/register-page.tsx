'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, EyeOff, Chrome, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export function RegisterPageComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [error, setError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  useEffect(() => {
    const savedData = localStorage.getItem("registrationFormData")
    if (savedData) {
      const { username, email } = JSON.parse(savedData)
      setUsername(username)
      setEmail(email)
    }
  }, [])

  useEffect(() => {
    const formData = { username, email }
    localStorage.setItem("registrationFormData", JSON.stringify(formData))
  }, [username, email])

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setError("Registration failed. Please try again.") // Example error
  }

  const calculatePasswordStrength = (password: string) => {
    const strength = Math.min(100, Math.max(0, password.length * 10))
    setPasswordStrength(strength)
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long")
    } else {
      setPasswordError("")
    }
  }

  useEffect(() => {
    calculatePasswordStrength(password)
  }, [password])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-between">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          EchoTales
        </h1>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded animate-pulse">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-gray-200">Username</Label>
              <Input
                id="username"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-200">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (e.target.value.length < 8) {
                      setPasswordError("Password must be at least 8 characters long")
                    } else {
                      setPasswordError("")
                    }
                  }}
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 pr-10"
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
              {passwordError && (
                <p className="mt-2 text-sm text-red-400 font-medium animate-pulse">
                  {passwordError}
                </p>
              )}
              <Progress value={passwordStrength} className="mt-2" />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-gray-200">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                className="border-2 border-purple-500 text-purple-500 focus:ring-purple-500 rounded-sm"
              />
              <Label htmlFor="terms" className="ml-2 text-gray-200">
                I agree to the{" "}
                <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            <Link href='/login'>  
            <Button
              type="submit"
              disabled={!agreedToTerms}
              className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign Up
            </Button>
            </Link>
            
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 focus:ring-gray-300 text-gray-800 border border-gray-300"
            >
              <Chrome size={16} />
              <span>Sign up with Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white"
            >
              <Facebook size={16} />
              <span>Sign up with Facebook</span>
            </Button>
          </div>

          <div className="text-center text-gray-300">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-gray-400">
        <Link href="/terms" className="hover:text-gray-300 transition-colors duration-200">
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link href="/privacy" className="hover:text-gray-300 transition-colors duration-200">
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}