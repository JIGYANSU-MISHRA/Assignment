'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'

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
      image: '/Images/Img4.png',
      material: 'Brass, Steel',
      loadCapacity: 'Up to 20,000 N',
      thread: 'M10 to M36',
      bearingType: 'Ball Bearing'
    },
    {
      id: '5',
      name: 'Gear Shaft',
      image: '/Images/Img5.png',
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

          {/* Products Grid - 6 Cards Total */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16">
            {/* First 5 Product Cards */}
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Product Info - Now on top */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Material:</span>
                      <span className="font-medium text-gray-900">{product.material}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Load Capacity:</span>
                      <span className="font-medium text-gray-900">{product.loadCapacity}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Thread:</span>
                      <span className="font-medium text-gray-900">{product.thread}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Bearing Type:</span>
                      <span className="font-medium text-gray-900">{product.bearingType}</span>
                    </div>
                  </div>
                </div>

                {/* Product Image - Now at bottom */}
                <div className="w-full h-48 sm:h-52 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}

            {/* 6th Card - Drag & Drop Your 3D Design */}
            <motion.div
              key="drag-drop-card"
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-4 sm:p-5 md:p-6 text-white h-full flex flex-col justify-center">
                {/* Upload Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 text-center">
                  Drag & Drop Your 3D Design
                </h3>
                
                {/* Supported Formats */}
                <div className="text-center mb-4">
                  <p className="text-xs sm:text-sm text-white/80 mb-2 font-medium">SUPPORTED FORMATS</p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
