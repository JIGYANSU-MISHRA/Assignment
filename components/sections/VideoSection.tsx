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
        <div className="text-center text-white px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4">
          {/* Play Button Removed */}
        </div>
      </div>

      {/* Corner Elements */}
      {/* Top-left corner - SOUND ON button */}
      <div className="absolute top-2 sm:top-3 md:top-4 lg:top-6 xl:top-8 left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8">
        <button className="bg-white hover:bg-gray-50 text-black px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2 xl:py-2.5 rounded-lg shadow-md flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-2 transition-all duration-200 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base">
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.383 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.383l4.383-3.207a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">SOUND ON</span>
        </button>
      </div>

      {/* Top-right corner - CHECK ON YOUTUBE button */}
      <div className="absolute top-2 sm:top-3 md:top-4 lg:top-6 xl:top-8 right-2 sm:right-3 md:right-4 lg:right-6 xl:right-8">
        <button className="bg-white hover:bg-gray-50 text-black px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2 xl:py-2.5 rounded-lg shadow-md flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-2 transition-all duration-200 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base">
          <span className="font-medium">CHECK ON YOUTUBE</span>
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  )
}
