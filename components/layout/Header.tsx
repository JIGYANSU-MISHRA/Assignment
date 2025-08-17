'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo and Location - Left */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
              <span className="normal">*Forge</span>
            </h1>
          </div>

          {/* Navigation - Center - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a 
              href="#canada" 
              className="text-black hover:text-primary transition-colors text-sm xl:text-base cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('canada')
              }}
            >
              Canada, Montreal
            </a>
            <div className="w-12 xl:w-16"></div> {/* Responsive gap spacer */}
            <a 
              href="#manufacture" 
              className="text-black hover:text-primary transition-colors underline text-sm xl:text-base cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('manufacture')
              }}
            >
              Manufacture
            </a>
            <a 
              href="#tool-library" 
              className="text-black hover:text-primary transition-colors underline text-sm xl:text-base cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('tool-library')
              }}
            >
              Tool Library
            </a>
            <a 
              href="#contact" 
              className="text-black hover:text-primary transition-colors underline text-sm xl:text-base cursor-pointer"
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
            className="hidden sm:block text-xs sm:text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eng / Fra
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-black hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4 space-y-3">
              <a 
                href="#canada" 
                className="block px-4 py-2 text-black hover:text-primary transition-colors text-base"
                onClick={() => smoothScrollTo('canada')}
              >
                Canada, Montreal
              </a>
              <a 
                href="#manufacture" 
                className="block px-4 py-2 text-black hover:text-primary transition-colors underline text-base"
                onClick={() => smoothScrollTo('manufacture')}
              >
                Manufacture
              </a>
              <a 
                href="#tool-library" 
                className="block px-4 py-2 text-black hover:text-primary transition-colors underline text-base"
                onClick={() => smoothScrollTo('tool-library')}
              >
                Tool Library
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-2 text-black hover:text-primary transition-colors underline text-base"
                onClick={() => smoothScrollTo('contact')}
              >
                Get in touch
              </a>
              <div className="px-4 py-2">
                <span className="text-sm font-medium text-gray-700">Eng / Fra</span>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
