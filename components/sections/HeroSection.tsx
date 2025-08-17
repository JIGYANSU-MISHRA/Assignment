'use client'

import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import the 3D component to avoid SSR issues
const Realistic3DScene = dynamic(() => import('../3d/Realistic3DScene'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white w-full pt-20 sm:pt-24 lg:pt-20">
      {/* Content */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-bold">Precision</span>{' '}
            <span className="text-gray-400 font-bold italic">CNC</span>{' '}
            Parts Shipped as Fast as{' '}
            <span className="text-gray-900 font-bold">Tomorrow</span>
          </motion.h1>

          {/* Realistic 3D Mechanical Parts Scene */}
          <motion.div
            className="my-8 sm:my-12 md:my-16 h-48 sm:h-64 md:h-80 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Realistic3DScene />
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="btn-primary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 flex items-center gap-2 sm:gap-3 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            UPLOAD YOUR DESIGN
          </motion.button>
        </motion.div>

        {/* Footer Details */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-900 font-medium space-y-2 md:space-y-0">
            {/* Left */}
            <div className="text-center md:text-left">
              <span className="block sm:inline">12+ YEARS OF DELIVERING PERFECT DETAILS</span>
            </div>

            {/* Right */}
            <div className="text-center md:text-right">
              <span className="block sm:inline">OVER 100,000 PARTS MANUFACTURED ANNUALLY</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
