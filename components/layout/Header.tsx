'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, MapPin } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-16">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 2xl:h-24">
          {/* Logo and Location - Left */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black">
              <span className="normal">*Forge</span>
            </h1>
          </div>

          {/* Navigation - Center - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 sm:space-x-8 md:space-x-8 lg:space-x-8 xl:space-x-10 2xl:space-x-12">
            <a 
              href="#canada" 
              className="text-black hover:text-blue-600 transition-colors text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg cursor-pointer flex items-center gap-1 sm:gap-1.5 md:gap-2"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('canada')
              }}
            >
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
              Canada, Montreal
            </a>
            <div className="w-8 sm:w-10 md:w-12 lg:w-12 xl:w-14 2xl:w-16"></div> {/* Responsive gap spacer */}
            <a 
              href="#manufacture" 
              className="text-black hover:text-blue-600 transition-colors underline text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('manufacture')
              }}
            >
              Manufacture
            </a>
            <a 
              href="#tool-library" 
              className="text-black hover:text-blue-600 transition-colors underline text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('tool-library')
              }}
            >
              Tool Library
            </a>
            <a 
              href="#contact" 
              className="text-black hover:text-blue-600 transition-colors underline text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('contact')
              }}
            >
              Get in touch
            </a>
          </nav>

          {/* Language Selector - Right - Hidden on mobile */}
          <motion.div
            className="hidden sm:block text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-medium text-black hover:text-blue-600 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eng / Fra
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 text-black hover:text-blue-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-transparent border-t border-gray-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-3 sm:py-4 md:py-4 lg:py-4 xl:py-5 space-y-2 sm:space-y-3">
              <a 
                href="#canada" 
                className="block px-3 sm:px-4 md:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-3 text-black hover:text-blue-600 transition-colors text-sm sm:text-base md:text-base lg:text-base xl:text-base flex items-center gap-2"
                onClick={() => smoothScrollTo('canada')}
              >
                <MapPin className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4" />
                Canada, Montreal
              </a>
              <a 
                href="#manufacture" 
                className="block px-3 sm:px-4 md:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-3 text-black hover:text-blue-600 transition-colors underline text-sm sm:text-base md:text-base lg:text-base xl:text-base"
                onClick={() => smoothScrollTo('manufacture')}
              >
                Manufacture
              </a>
              <a 
                href="#tool-library" 
                className="block px-3 sm:px-4 md:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-3 text-black hover:text-blue-600 transition-colors underline text-sm sm:text-base md:text-base lg:text-base xl:text-base"
                onClick={() => smoothScrollTo('tool-library')}
              >
                Tool Library
              </a>
              <a 
                href="#contact" 
                className="block px-3 sm:px-4 md:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-3 text-black hover:text-blue-600 transition-colors underline text-sm sm:text-base md:text-base lg:text-base xl:text-base"
                onClick={() => smoothScrollTo('contact')}
              >
                Get in touch
              </a>
              <div className="px-3 sm:px-4 md:px-4 lg:px-4 xl:px-5 py-2 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-3">
                <span className="text-sm sm:text-base md:text-base lg:text-base xl:text-base font-medium text-black">Eng / Fra</span>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
