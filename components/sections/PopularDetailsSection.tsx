'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Product {
  id: string
  name: string
  image: string
  material: string
  loadCapacity: string
  thread: string
  bearingType: string
}

export default function PopularDetailsSection() {
  const [showBottomCards, setShowBottomCards] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBottomCards(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const products: Product[] = [
    {
      id: '1',
      name: 'Spherical Joint',
      image: '/Images/Img4.png',
      material: 'Steel, Stainless Steel',
      loadCapacity: 'Up to 10,000 N',
      thread: 'M8 to M30',
      bearingType: 'Ball or Plain'
    },
    {
      id: '2',
      name: 'Mounting Plate',
      image: '/Images/Img5.png',
      material: 'Aluminum 6061, Steel',
      loadCapacity: 'Up to 15,000 N',
      thread: 'M6 to M24',
      bearingType: 'Threaded or Plain'
    },
    {
      id: '3',
      name: 'Protective Cap',
      image: '/Images/Img6.png',
      material: 'Delrin, Nylon',
      loadCapacity: 'Up to 5,000 N',
      thread: 'M4 to M16',
      bearingType: 'Press Fit'
    },
    {
      id: '4',
      name: 'Bearing Housing',
      image: '/Images/Img1.png',
      material: 'Brass, Steel',
      loadCapacity: 'Up to 20,000 N',
      thread: 'M10 to M36',
      bearingType: 'Ball Bearing'
    },
    {
      id: '5',
      name: 'Gear Shaft',
      image: '/Images/Img2.png',
      material: 'Steel 4140, Titanium',
      loadCapacity: 'Up to 25,000 N',
      thread: 'M12 to M40',
      bearingType: 'Spline or Keyway'
    }
  ]

  return (
    <section id="manufacture" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
            className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Manufacture Button */}
          <motion.button
            className="text-white px-4 py-2 rounded-2xl text-sm font-medium hover:bg-blue-700 transition-colors bg-blue-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            • Manufacture •
          </motion.button>
          
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            The Most Popular<br />
            <span className="text-gray-400 font-bold">Details</span>{' '}
            We Produce
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="relative">
          <AnimatePresence>
            {!showBottomCards && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {products.slice(0, 3).map((product, index) => (
                  <motion.div
                    key={`top-${product.id}`}
                    className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Product Info */}
                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Material:</span>
                          <span className="font-medium">{product.material}</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Load Capacity:</span>
                          <span className="font-medium">{product.loadCapacity}</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Thread:</span>
                          <span className="font-medium">{product.thread}</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Bearing Type:</span>
                          <span className="font-medium">{product.bearingType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Image - Now at bottom with better sizing */}
                    <div className="w-full h-40 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showBottomCards && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16"
                initial={{ opacity: 0, scale: 1.2, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {products.slice(2, 5).map((product, index) => (
                  <motion.div
                    key={`bottom-${product.id}`}
                    className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Product Info */}
                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Material:</span>
                          <span className="font-medium">{product.material}</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Load Capacity:</span>
                          <span className="font-medium">{product.loadCapacity}</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Thread:</span>
                          <span className="font-medium">{product.thread}</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-500">Bearing Type:</span>
                          <span className="font-medium">{product.bearingType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Image - Now at bottom with better sizing */}
                    <div className="w-full h-40 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Special Drag & Drop Card */}
                <motion.div
                  key="drag-drop-card"
                  className="bg-blue-600 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-4 sm:p-5 md:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center">
                      Drag & Drop Your 3D Design
                    </h3>
                    
                    {/* 3D Wireframe Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 border-2 border-white rounded-lg relative">
                        <div className="absolute top-1 left-1 w-3 h-3 border border-white rounded-full"></div>
                        <div className="absolute top-1 right-1 w-3 h-3 border border-white rounded-full"></div>
                        <div className="absolute bottom-1 left-1 w-3 h-3 border border-white rounded-full"></div>
                        <div className="absolute bottom-1 right-1 w-3 h-3 border border-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Supported Formats */}
                    <div className="text-center mb-4">
                      <p className="text-xs sm:text-sm text-white/80 mb-2">SUPPORTED FORMATS</p>
                      <p className="text-xs sm:text-sm text-white/90">IGES / STL / FBX / DXF / STEP</p>
                    </div>

                    {/* Drop Zone */}
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-white/90">
                        Drop your CAD file here or browse
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
              </div>
            </div>
    </section>
  )
}
