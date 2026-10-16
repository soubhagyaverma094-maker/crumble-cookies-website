'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Browse Our Menu',
    description: 'Explore our delicious cookie collection and custom cake options online.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Place Your Order',
    description: 'Add to cart and checkout in minutes. Customize your cookies with dietary preferences.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V3a2 2 0 00-2-2H8a2 2 0 00-2 2v4m12 0v4a2 2 0 01-2 2H8a2 2 0 01-2-2V7m12 0H5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Pick Up or Delivery',
    description: 'Choose pickup at our bakery or get your order delivered hot and fresh.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M3 6h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Enjoy!',
    description: 'Share the joy! Perfect cookies ready to gift or enjoy anytime.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.958c.54-.689 1.39-1.196 2.34-1.411A4.405 4.405 0 0112 4.5c1.4 0 2.66.574 3.66 1.536.95.222 1.8.73 2.34 1.411A4.405 4.405 0 0120.682 7.5c-1.183-.932-2.69-1.491-4.22-1.384A6.003 6.003 0 0012 3.5c-3.3 0-6 2.7-6 6 0 1.38.56 2.63 1.48 3.57A6.003 6.003 0 006 13.5c0 .9.31 1.7.84 2.34C6.023 16.95 4.72 18 3.3 18.5c-1.7.5-3.3-.3-3.3-2.05v-2.45z" />
      </svg>
    ),
  },
]

export function Process() {
  const sectionRef = useRef<HTMLSectionElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-padding bg-brown-50 relative overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brown-100 text-brown-700 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 id="process-title" className="heading-lg text-brown-900 mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-body-lg text-brown-600">
            Getting your fresh cookies delivered is easy - just 3 simple steps.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-brown-500 text-white flex items-center justify-center mb-6 text-2xl font-bold">
                {step.num}
              </div>
              <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center text-brown-600 mb-4">
                {step.icon}
              </div>
              <h3 className="heading-md text-brown-900 mb-3">{step.title}</h3>
              <p className="text-body text-brown-600 max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-brown-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  aria-label="Customer"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-brown-700">Trusted by 5,000+ customers across the city</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}