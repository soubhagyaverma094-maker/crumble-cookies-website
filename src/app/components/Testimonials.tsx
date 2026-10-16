'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Marketing Manager',
    rating: 5,
    quote: 'The salted caramel crunch is absolutely divine! My office colleagues are obsessed. The delivery is always prompt and the cookies are perfectly fresh.',
    image: '/images/testimonials/priya.jpg',
  },
  {
    id: 2,
    name: 'Raj Patel',
    role: 'Business Owner',
    rating: 5,
    quote: 'Ordered a custom birthday cake for my daughter. It was a masterpiece! Everyone loved it. Crumble Cookies truly delivers on quality and presentation.',
    image: '/images/testimonials/raj.jpg',
  },
  {
    id: 3,
    name: 'Sneha Desai',
    role: 'Teacher',
    rating: 5,
    quote: 'I order cookies every week for my classroom. The kids love the matcha white chocolate and the lemon lavender is perfect for summer. Reliable and delicious!',
    image: '/images/testimonials/sneha.jpg',
  },
  {
    id: 4,
    name: 'Amit Verma',
    role: 'Student',
    rating: 4,
    quote: 'Got these for my exam study session - perfect! The peanut butter fudge kept me going. Will definitely be ordering again for my upcoming birthday party.',
    image: '/images/testimonials/amit.jpg',
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLSectionElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding bg-cream-50 relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brown-100 text-brown-700 text-sm font-medium mb-4">
            What Our Customers Say
          </span>
          <h2 id="testimonials-title" className="heading-lg text-brown-900 mb-4">
            Sweet Reviews From Our{' '}
            <span className="gradient-text">Loyal Customers</span>
          </h2>
          <p className="text-body-lg text-brown-600">
            We're proud that our cookies bring smiles. Read what our customers have to say!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
              className="card bg-white"
            >
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-3.87 3.43a.75.75 0 00-.97-.15l-4.37 1.32a.75.75 0 00-.63.74v4.28a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75v-4.28a.75.75 0 00-.63-.74l-4.37-1.32a.75.75 0 01-.97.15L10 15z" />
                    </svg>
                  ))}
                  <span className="text-sm text-brown-500 ml-2">(Verified purchase)</span>
                </div>
                <p className="text-body text-brown-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brown-200 rounded-full flex items-center justify-center text-brown-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-brown-900">{testimonial.name}</div>
                    <div className="text-sm text-brown-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          className="text-center mt-16"
        >
          <button className="btn-secondary">
            Read All Reviews
          </button>
        </motion.div>
      </div>
    </section>
  )
}