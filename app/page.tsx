"use client"

import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with increased height and adjusted logo */}
      <header className="relative border-b border-gray-100 h-28">
        <div className="container mx-auto flex justify-between items-center h-full px-6">
          {/* Logo Image Container - adjusted for larger header */}
          <div className="pl-4">
            <Link href="/">
              <Image
                src="/arozne11.png"
                alt="Company Logo"
                width={70}
                height={70}
                className="h-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Navigation Menu */}
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
      <section className="relative bg-blue-900 text-white overflow-hidden min-h-[70vh]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/digital-business-background.jpeg')",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60" />

        <div className="container mx-auto relative z-10 h-full flex items-center">
          <div className="max-w-2xl pl-8 md:pl-16 lg:pl-24 mt-32 md:mt-40">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Orazone Technologies</h1>
            <p className="text-xl md:text-2xl mb-16">Diversified Business Solutions</p>
            <div className="flex gap-6">
              <Link 
                href="#" 
                className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="#" 
                className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Diagonal shape - moved inside the hero section */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-48 bg-orange-500"
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        ></div>
      </section>

      {/* Rest of your existing code remains the same */}
      {/* Fancy Content Area */}
      <section className="relative py-16 flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
        {/* ... existing fancy content area code ... */}
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white relative overflow-hidden py-16">
        {/* ... existing footer code ... */}
      </footer>

      {/* Animation styles */}
      <style jsx global>{`
        /* ... existing animation styles ... */
      `}</style>
    </div>
  )
}
