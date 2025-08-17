'use client'

import { motion } from 'framer-motion'
import { Upload, CreditCard, Cog, Truck } from 'lucide-react'

const steps = [
  {
    icon: <Upload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: 'Upload Step Files',
    description: 'Simply drag and drop your CAD files in any major format. Our system automatically analyzes and prepares your design for manufacturing.'
  },
  {
    icon: <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: 'Get a Quote & Checkout',
    description: 'Receive an instant quote with detailed pricing breakdown. Complete your order securely with our streamlined checkout process.'
  },
  {
    icon: <Cog className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: 'We Make Your Parts',
    description: 'Our expert team and advanced CNC machines work together to create your parts with precision down to the micron level.'
  },
  {
    icon: <Truck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    title: 'Parts Are Shipped',
    description: 'Your finished parts are carefully packaged and shipped to your door, often arriving as early as tomorrow.'
  }
]

export default function CNCMadeEasySection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              CNC Machining Made Easy
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4">
              From design to delivery in four simple steps. No complexity, no delays, just precision parts when you need them.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 px-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12 sm:mt-14 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="btn-primary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6">
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
