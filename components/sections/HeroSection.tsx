'use client'

import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import the 3D component to avoid SSR issues
const MotorModel = dynamic(() => import('../3d/MotorModel'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white w-full pt-16 sm:pt-20 md:pt-24 lg:pt-20 xl:pt-24 2xl:pt-28">
      {/* Content */}
      <div className="relative z-10 w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-6 xl:mb-8 leading-tight px-1 sm:px-2 md:px-2 lg:px-2 xl:px-2"
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
            className="my-6 sm:my-8 md:my-12 lg:my-16 xl:my-20 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MotorModel 
              position={[0, 0, 0]}
              scale={[1.2, 1.2, 1.2]}
              autoRotate={true}
              showWireframe={false}
            />
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="btn-primary text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 flex items-center gap-2 sm:gap-3 mx-auto"
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
          className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 left-0 right-0 w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base text-gray-900 font-medium space-y-2 md:space-y-0">
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
