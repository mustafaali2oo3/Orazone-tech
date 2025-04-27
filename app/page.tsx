"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
    const [expandedTests, setExpandedTests] = useState<string[]>(["test-1"])
  const [selectedTest, setSelectedTest] = useState<string>("test-1-1")
  const [selectedAction, setSelectedAction] = useState<number>(1)

  const toggleExpand = (id: string) => {
    if (expandedTests.includes(id)) {
      setExpandedTests(expandedTests.filter((testId) => testId !== id))
    } else {
      setExpandedTests([...expandedTests, id])
    }
  }

  const testFiles = [
    {
      id: "test-1",
      name: "example.spec.ts",
      tests: [
        { id: "test-1-1", name: "should navigate to the homepage", status: "passed" },
        { id: "test-1-2", name: "should display the login form", status: "passed" },
      ],
    },
    {
      id: "test-2",
      name: "auth.spec.ts",
      tests: [
        { id: "test-2-1", name: "should login successfully", status: "failed" },
        { id: "test-2-2", name: "should show error for invalid credentials", status: "passed" },
      ],
    },
    {
      id: "test-3",
      name: "dashboard.spec.ts",
      tests: [
        { id: "test-3-1", name: "should display user data", status: "skipped" },
        { id: "test-3-2", name: "should allow editing profile", status: "passed" },
      ],
    },
  ]

  const actions = [
    { id: 1, time: "0ms", action: "goto", target: "http://localhost:3000", duration: "320ms" },
    { id: 2, time: "350ms", action: "click", target: "text=Login", duration: "45ms" },
    {
      id: 3,
      time: "420ms",
      action: "fill",
      target: "input[name='email']",
      value: "user@example.com",
      duration: "65ms",
    },
    { id: 4, time: "510ms", action: "fill", target: "input[name='password']", value: "password123", duration: "55ms" },
    { id: 5, time: "590ms", action: "click", target: "button:has-text('Submit')", duration: "120ms" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Logo Image */}
      <header className="relative border-b border-gray-100 h-20">
        <div className="container mx-auto flex justify-between items-center h-full px-6">
          {/* Logo Image Container */}
          <div className="pl-4">
            <Link href="/">
              <Image
                src="/Logo.png" // Path to your logo in public folder
                alt="Company Logo" // Descriptive alt text
                width={160} // Adjust to your logo's width
                height={50} // Adjust to your logo's height
                className="h-auto object-contain" // Maintain aspect ratio
                priority // Important for above-the-fold logo
              />
            </Link>
          </div>
          
          {/* Navigation Menu (unchanged) */}
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              About Us
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              Services
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              Our Team
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              FAQs
            </Link>
          </nav>
        </div>
        <div className="absolute top-0 right-0 h-full w-16 bg-orange-500"></div>
      </header>

 {/* Extended Hero Section */}
<section className="relative bg-blue-900 text-white overflow-hidden min-h-[50vh]">
  <div
    className="absolute inset-0 z-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/digital-business-background.jpeg')",
    }}
  ></div>
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60"></div>

  <div className="container mx-auto relative z-10 h-full flex items-center">
    <div className="max-w-2xl pl-8 md:pl-16 lg:pl-24 mt-16"> {/* Added mt-16 here */}
      <h1 className="text-5xl font-bold mb-2">Orazone Technologies</h1>
      <p className="text-xl mb-16">Diversified Business Solutions</p>
      <div className="flex space-x-18">
        <Link href="#" className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors">
          Contact Us
        </Link>
        <Link href="#" className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
          Services
        </Link>
      </div>
    </div>
  </div>

        {/* Diagonal shape */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-48 bg-orange-500"
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        ></div>
      </section>

      {/* Content Area */}
      <section className="py-8 flex justify-center items-center h-[60vh] bg-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-2xl text-gray-600">Enter text here or any additional content you'd like to display.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white relative overflow-hidden py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Company</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-lg hover:underline">Home</Link>
                <Link href="#" className="block text-lg hover:underline">About Us</Link>
                <Link href="#" className="block text-lg hover:underline">Services</Link>
                <Link href="#" className="block text-lg hover:underline">Our Team</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Careers</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-lg hover:underline">Jobs</Link>
                <Link href="#" className="block text-lg hover:underline">Internships</Link>
                <Link href="#" className="block text-lg hover:underline">Culture</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-lg hover:underline">LinkedIn</Link>
                <Link href="#" className="block text-lg hover:underline">Facebook</Link>
                <Link href="#" className="block text-lg hover:underline">Twitter</Link>
                <Link href="#" className="block text-lg hover:underline">Instagram</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-lg hover:underline">Contact Us</Link>
                <Link href="#" className="block text-lg hover:underline">Support</Link>
                <Link href="#" className="block text-lg hover:underline">FAQ</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-700 text-center">
            <p className="text-lg">© {new Date().getFullYear()} Orazone Technologies. All rights reserved.</p>
          </div>
        </div>

        {/* Diagonal shape - Only one needed */}
        <div
          className="absolute bottom-0 left-0 w-1/3 h-24 bg-orange-500"
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
        ></div>
      </footer>
    </div>
  )
}
