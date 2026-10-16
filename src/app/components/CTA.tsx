'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export function CTA() {
  const sectionRef = useRef<HTMLSectionElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  
  return (
    <section
      ref={sectionRef}
      id="order"
      className="section-padding bg-gradient-to-r from-brown-600 to-brown-800 relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cream-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cream-500/10 blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cream-500/20 text-cream-200 text-sm font-medium mb-4">
            Order Now
          </span>
          <h2 id="cta-title" className="heading-lg text-white mb-6">
            Ready to Order Your Fresh Cookies?
          </h2>
          <p className="text-body-lg text-cream-200 max-w-xl mx-auto">
            Get your cookies baked fresh to perfection. Order online, customize your pick-up time, and enjoy!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12"
        >
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brown-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brown-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brown-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-colors"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brown-700 mb-2">
                  Pickup/Delivery Time *
                </label>
                <select
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brown-200 bg-white focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-colors"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                >
                  <option value="">Select your preferred time</option>
                  <option value="Morning">Morning (8-11 AM)</option>
                  <option value="Midday">Midday (11 AM-2 PM)</option>
                  <option value="Afternoon">Afternoon (2-5 PM)</option>
                  <option value="Evening">Evening (5-8 PM)</option>
                  <option value="Custom">Custom (add note)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="order-details" className="block text-sm font-semibold text-brown-700 mb-2">
                Order Details
              </label>
              <textarea
                id="order-details"
                name="orderDetails"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-brown-200 focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-colors resize-none"
                placeholder="Which cookies would you like? Any special requests?"
                defaultValue={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              Place My Order
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l11 11M14 8l-1 11" />
              </svg>
            </button>
            
            <p className="text-xs text-cream-200 text-center">
              By submitting, you agree to our terms. We'll contact you within 15 minutes to confirm your order.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}