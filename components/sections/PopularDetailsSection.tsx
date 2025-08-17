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
    <section id="manufacture" className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gray-50">
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-16">
        <div className="w-full mx-auto">
          {/* Headline */}
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Manufacture Button */}
            <motion.button
              className="text-white px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 rounded-2xl text-xs sm:text-sm md:text-sm lg:text-base xl:text-base font-medium hover:bg-blue-700 transition-colors bg-blue-600 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              • Manufacture •
            </motion.button>
            
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-6 xl:mb-8 leading-tight px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4">
              The Most Popular<br />
              <span className="text-gray-400 font-bold italic">Details</span>{' '}
              We Produce
            </h2>
          </motion.div>

          {/* Products Grid - 6 Cards Total */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            {/* First 5 Product Cards */}
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Product Info - Now on top */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-2.5 xl:space-y-3">
                    <div className="flex justify-between text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">
                      <span className="text-gray-500">Material:</span>
                      <span className="font-medium text-gray-900">{product.material}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">
                      <span className="text-gray-500">Load Capacity:</span>
                      <span className="font-medium text-gray-900">{product.loadCapacity}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">
                      <span className="text-gray-500">Thread:</span>
                      <span className="font-medium text-gray-900">{product.thread}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm">
                      <span className="text-gray-500">Bearing Type:</span>
                      <span className="font-medium text-gray-900">{product.bearingType}</span>
                    </div>
                  </div>
                </div>

                {/* Product Image - Now at bottom */}
                <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-60 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-3 sm:p-4 md:p-4 lg:p-4 xl:p-4 group-hover:scale-105 transition-transform duration-300"
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
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 text-white h-full flex flex-col justify-center">
                {/* Upload Icon */}
                <div className="flex justify-center mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-white/20 rounded-full flex items-center justify-center">
                    <Upload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-white" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-4 text-center">
                  Drag & Drop Your 3D Design
                </h3>
                
                {/* Supported Formats */}
                <div className="text-center mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-5">
                  <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white/80 mb-1 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 font-medium">SUPPORTED FORMATS</p>
                  <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white/90">IGES / STL / FBX / DXF / STEP</p>
                </div>

                {/* Drop Zone */}
                <div className="text-center">
                  <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white/90">
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
