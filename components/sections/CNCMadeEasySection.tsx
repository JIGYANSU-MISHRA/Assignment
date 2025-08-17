'use client'

import { motion } from 'framer-motion'
import { Upload, CreditCard, Cog, Truck } from 'lucide-react'

const steps = [
  {
    icon: <Upload className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />,
    title: 'Upload Step Files',
    description: 'Simply drag and drop your CAD files in any major format. Our system automatically analyzes and prepares your design for manufacturing.'
  },
  {
    icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />,
    title: 'Get a Quote & Checkout',
    description: 'Receive an instant quote with detailed pricing breakdown. Complete your order securely with our streamlined checkout process.'
  },
  {
    icon: <Cog className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />,
    title: 'We Make Your Parts',
    description: 'Our expert team and advanced CNC machines work together to create your parts with precision down to the micron level.'
  },
  {
    icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />,
    title: 'Parts Are Shipped',
    description: 'Your finished parts are carefully packaged and shipped to your door, often arriving as early as tomorrow.'
  }
]

export default function CNCMadeEasySection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-16">
        <div className="max-w-5xl sm:max-w-6xl md:max-w-6xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto">
          {/* Headline */}
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-6 xl:mb-8 leading-tight px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4">
              CNC Machining Made Easy
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4">
              From design to delivery in four simple steps. No complexity, no delays, just precision parts when you need them.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 2xl:w-24 2xl:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 group-hover:text-primary transition-colors duration-300 px-1 sm:px-2 md:px-2 lg:px-2 xl:px-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg text-gray-600 leading-relaxed px-1 sm:px-2 md:px-2 lg:px-2 xl:px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-8 sm:mt-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="btn-primary text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8">
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
