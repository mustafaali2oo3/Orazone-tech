"use client"

import { useState } from "react"
import Link from "next/link"

export default function Home() {
  // ... (keep all the existing state and data declarations)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (unchanged) */}
      <header className="relative border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-2xl font-bold">Logo</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-blue-600 hover:text-blue-800">Home</Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">About Us</Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">Services</Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">Our Team</Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">FAQs</Link>
          </nav>
        </div>
        <div className="absolute top-0 right-0 h-full w-16 bg-orange-500"></div>
      </header>

      {/* Super Extended Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden min-h-[85vh]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/digital-business-background.jpeg')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60"></div>

        <div className="container mx-auto relative z-10 h-full flex items-center">
          <div className="max-w-2xl py-40"> {/* Increased vertical padding */}
            <h1 className="text-5xl font-bold mb-2">Orazone Technologies</h1>
            <p className="text-xl mb-16">Diversified Business Solutions</p>
            <div className="flex space-x-4">
              <Link href="#" className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Larger Diagonal shape */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-64 bg-orange-500" {/* Increased height */}
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        ></div>
      </section>

      {/* Minimal Content Area */}
      <section className="py-4"> {/* Reduced padding */}
        <div className="container mx-auto">
          <p className="text-gray-600">enter text here</p>
        </div>
      </section>

      {/* Footer (unchanged) */}
      <footer className="bg-blue-900 text-white relative overflow-hidden">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-6 justify-items-center md:justify-items-start">
            <Link href="#" className="text-lg hover:underline">Home</Link>
            <Link href="#" className="text-lg hover:underline">Jobs</Link>
            <Link href="#" className="text-lg hover:underline">LinkedIn</Link>
            <Link href="#" className="text-lg hover:underline">Contact Us</Link>
            <Link href="#" className="text-lg hover:underline">Services</Link>
            <Link href="#" className="text-lg hover:underline">Facebook</Link>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-1/3 h-16 bg-orange-500"
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
        ></div>
      </footer>
    </div>
  )
}
