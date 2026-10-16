'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '10K+', label: 'Cookies Baked Daily' },
  { value: '50+', label: 'Flavors Created' },
  { value: '5000+', label: 'Happy Customers' },
  { value: '8+', label: 'Years baking happiness' },
]

const team = [
  { name: 'Emma Rodriguez', role: 'Founder & Head Baker', image: '/images/team/emma.jpg' },
  { name: 'James Chen', role: 'Pastry Chef', image: '/images/team/james.jpg' },
  { name: 'Sarah Williams', role: 'Head Pastry Artist', image: '/images/team/sarah.jpg' },
  { name: 'Michael Torres', role: 'Master Artisan', image: '/images/team/michael.jpg' },
]

export function About() {
  const sectionRef = useRef<HTMLSectionElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brown-100 text-brown-700 text-sm font-medium w-fit">
              About Us
            </span>
            <h2 id="about-title" className="heading-lg text-brown-900">
              Since 2015, Crafting Joy One Cookie at a Time
            </h2>
            <p className="text-body-lg text-brown-600">
              Founded by Emma Rodriguez, our bakery was born from a passion for traditional baking techniques
              combined with innovative flavors. Every cookie is made fresh daily in our open kitchen, using
              only the finest butter, premium chocolate, and farm-fresh eggs from local farms.
            </p>
            <div className="space-y-4">
              {[
                'All-natural ingredients sourced from local farms',
                'No artificial preservatives or additives',
                'Gluten-free and vegan options available',
                'Custom orders welcome with 48-hour notice',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-brown-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.293 4.707 10.593a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-body text-brown-600">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <button className="btn-primary">
                Order Online
              </button>
              <button onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                See Our Menu
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-brown-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">24</div>
                <p className="text-sm text-brown-700">Hour ovens</p>
              </div>
              <div className="bg-brown-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">500</div>
                <p className="text-sm text-brown-700">Recipes</p>
              </div>
              <div className="bg-brown-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">10</div>
                <p className="text-sm text-brown-700">Years baking</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brown-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">99.9</div>
                <p className="text-sm text-brown-700">Fresh rating</p>
              </div>
              <div className="bg-brown-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">5</div>
                <p className="text-sm text-brown-700">Star rating</p>
              </div>
              <div className="bg-brown-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2">W</div>
                <p className="text-sm text-brown-700">Wholesale</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}