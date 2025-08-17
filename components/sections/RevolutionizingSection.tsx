'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Braces, Cog, Fan, Box, ArrowRight } from 'lucide-react'

export default function RevolutionizingSection() {
  const [activeCategory, setActiveCategory] = useState('custom-brackets')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const categories = [
    { id: 'custom-brackets', name: 'Custom Brackets', icon: Braces, number: '01' },
    { id: 'steel-adapters', name: 'Steel Adapters', icon: Cog, number: '02' },
    { id: 'motor-mounts', name: 'Motor Mounts', icon: Fan, number: '03' },
    { id: 'enclosures', name: 'Enclosures', icon: Box, number: '04' }
  ]

  const categoryImages = {
    'custom-brackets': '/Images/Img3.png',
    'steel-adapters': '/Images/Img2.png',
    'motor-mounts': '/Images/Img1.png',
    'enclosures': '/Images/Img1.png' // Using Img1 as fallback since Img4 doesn't exist
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full">
        <div className="w-full">
          {/* Top Left Corner - About Button */}
          <div className="mb-12 px-4 sm:px-6 lg:px-8 xl:px-16">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-medium hover:bg-blue-700 transition-colors">
              • About •
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 items-start w-full">
            {/* Left Column */}
            <div className="pl-0 sm:pl-4 lg:pl-6 xl:pl-12">
              {/* Main Headline */}
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Revolutionizing Manufacturing with Speed and{' '}
                <span className="italic text-gray-400 font-light">
                  Precision
                </span>
              </motion.h2>

              {/* Interactive Product Categories */}
              <div className="space-y-10">
                {categories.map((category) => {
                  const Icon = category.icon
                  const isHovered = hoveredCategory === category.id
                  const isActive = activeCategory === category.id
                  
                  return (
                    <motion.div
                      key={category.id}
                      className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${
                        isActive 
                          ? 'bg-blue-50 border-l-4 border-blue-600' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                      onMouseEnter={() => setHoveredCategory(category.id)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.span 
                        className="font-bold text-lg w-8"
                        animate={{ 
                          color: isHovered ? '#2563eb' : '#000000',
                          scale: isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {isHovered ? '→' : category.number}
                      </motion.span>
                      <motion.span 
                        className="font-bold text-lg flex-1"
                        animate={{ 
                          color: isHovered ? '#2563eb' : '#000000'
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {category.name}
                      </motion.span>
                      <motion.div
                        animate={{ 
                          color: isHovered ? '#2563eb' : '#000000',
                          rotate: isHovered ? 5 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 max-w-lg ml-auto pr-4 sm:pr-6 lg:pr-8 xl:pr-12">
              {/* Testimonial Block */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AS</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Ayrton Senna</h3>
                    <p className="text-gray-600 text-sm">CEO & Senior Partner at Forge</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. 
                  Our streamlined platform delivers production-ready CAD parts in record time, backed by 
                  our commitment to quality and precision.
                </p>
             
                {/* Descriptive Paragraph */}
                <p className="mb-8">
                  We operate high-performance CNC machines backed by in-house automation and a trusted 
                  network of suppliers. Every part we produce meets the highest standards of quality, 
                  delivered with speed that keeps your projects on track.
                </p>
                <p className="mb-20">
                  From prototype to production, we offer the option to reserve dedicated CNC machines 
                  for your specific requirements, ensuring consistency and reliability.
                </p>

                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  Every detail matters—we craft each part with care, accuracy, and a finish that feels just right
                </p>
              </motion.div>
            </div>
          </div>

          {/* Dynamic Image Display */}
          <div className="p-2 rounded-lg ml-0 sm:ml-4 lg:ml-6 xl:ml-12 max-w-4xl">
            <img
              src={categoryImages[hoveredCategory as keyof typeof categoryImages] || categoryImages[activeCategory as keyof typeof categoryImages]}
              alt={categories.find(cat => cat.id === (hoveredCategory || activeCategory))?.name || 'Selected Category'}
              className="w-full h-60 object-cover rounded-lg bg-gray-200"
            />
            <h3 className="text-white text-xl font-semibold mt-4">
              {categories.find(cat => cat.id === (hoveredCategory || activeCategory))?.name}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
