'use client'

import { motion } from 'framer-motion'
import { Volume2, ExternalLink } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/E1czmX6bjFA?start=10&autoplay=1&mute=1&loop=1&playlist=E1czmX6bjFA&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="w-full h-full"
          title="CNC Manufacturing Process"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          {/* Play Button Removed */}
        </div>
      </div>

      {/* Corner Elements */}
      {/* Top-left corner - SOUND ON button */}
      <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6">
        <button className="bg-white hover:bg-gray-50 text-black px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md flex items-center space-x-1 sm:space-x-2 transition-all duration-200 text-xs sm:text-sm">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.383-3.207a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">SOUND ON</span>
        </button>
      </div>

      {/* Top-right corner - CHECK ON YOUTUBE button */}
      <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6">
        <button className="bg-white hover:bg-gray-50 text-black px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md flex items-center space-x-1 sm:space-x-2 transition-all duration-200 text-xs sm:text-sm">
          <span className="font-medium">CHECK ON YOUTUBE</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  )
}
