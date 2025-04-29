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
          <div className="max-w-2xl pl-8 md:pl-16 lg:pl-24 mt-16">
            <h1 className="text-5xl font-bold mb-2">Orazone Technologies</h1>
            <p className="text-xl mb-16">Diversified Business Solutions</p>
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

        {/* Diagonal shape */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-48 bg-orange-500"
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        ></div>
      </section>

      {/* Fancy Content Area */}
      <section className="relative py-16 flex justify-center items-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-indigo-300 mix-blend-multiply blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-300 mix-blend-multiply blur-xl animate-float-delay"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-300 mix-blend-multiply blur-xl animate-float"></div>
        </div>

        <div className="container mx-auto text-center px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Animated heading with gradient text */}
            <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fadeInUp">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Empowering Businesses
              </span>
              <br />
              <span className="text-gray-800">With Smart Solutions Since 2008</span>
            </h1>

            {/* Content with animated border */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white border-opacity-30 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-indigo-500 rounded-bl-full"></div>
              
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed animate-fadeIn delay-100">
                At <span className="font-semibold text-indigo-600">Orazone Technologies</span>, we believe in turning visions into reality. Established in 2008, we are a premier call center and software development company dedicated to delivering innovative, reliable, and scalable solutions to clients worldwide.
              </p>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto my-6 rounded-full"></div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fadeIn delay-200">
                With over a decade of experience, we've built a reputation for excellence across diverse industries — from customer support services to cutting-edge software products. Our dynamic team combines technical expertise with business insights to help you achieve your goals efficiently and effectively.
              </p>
            </div>

            {/* Animated CTA button */}
            <button className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounceIn delay-300">
              Discover Our Solutions
            </button>
          </div>
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

        {/* Diagonal shape */}
        <div
          className="absolute bottom-0 left-0 w-1/3 h-24 bg-orange-500"
          style={{ clipPath: "polygon(0 0, 0% 100%, 100% 100%)" }}
        ></div>
      </footer>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite 2s; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  )
}
