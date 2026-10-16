'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    id: 1,
    name: 'Classic Chocolate Chip',
    description: 'Our signature recipe with generous chocolate chunks, buttery dough, and just the right amount of sweetness.',
    price: '$4.50',
    image: '/images/cookies/chocolate-chip.jpg',
    category: 'Classic',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Salted Caramel Crunch',
    description: 'Buttery shortbread base with salted caramel filling and crunchy toffee bits on top.',
    price: '$5.75',
    image: '/images/cookies/caramel.jpg',
    category: 'Caramel',
    bestseller: false,
  },
  {
    id: 3,
    name: 'Matcha White Chocolate',
    description: 'Premium Japanese matcha with creamy white chocolate chips for a perfect balance of earthy and sweet.',
    price: '$5.50',
    image: '/images/cookies/matcha.jpg',
    category: 'Specialty',
    bestseller: false,
  },
  {
    id: 4,
    name: 'Peanut Butter Fudge',
    description: 'Rich peanut butter cookie loaded with fudge chunks and a sprinkle of sea salt.',
    price: '$4.75',
    image: '/images/cookies/peanut-butter.jpg',
    category: 'Nutty',
    bestseller: true,
  },
  {
    id: 5,
    name: 'Lemon Lavender',
    description: 'Zesty lemon cookies with a hint of culinary lavender - refreshingly floral and bright.',
    price: '$5.25',
    image: '/images/cookies/lemon.jpg',
    category: 'Floral',
    bestseller: false,
  },
  {
    id: 6,
    name: 'Birthday Cake',
    description: 'Vanilla bean cookies with rainbow sprinkles and a creamy frosting center.',
    price: '$5.00',
    image: '/images/cookies/birthday.jpg',
    category: 'Fun',
    bestseller: false,
  },
]

export function Products() {
  const sectionRef = useRef<HTMLSectionElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-padding bg-cream-50 relative overflow-hidden"
      aria-labelledby="products-title"
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brown-100 text-brown-700 text-sm font-medium mb-4">
            Our Cookies
          </span>
          <h2 id="products-title" className="heading-lg text-brown-900 mb-4">
            Cookie <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-body-lg text-brown-600">
            Freshly baked daily with premium ingredients, every cookie tells a story of tradition and taste.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
              className="card group"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-brown-100 rounded-t-2xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brown-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                      </svg>
                    </div>
                    <p className="text-sm text-brown-600">Cookie Image</p>
                  </div>
                </div>
                {product.bestseller && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-brown-500 text-white animate-bounce">
                    Bestseller
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="text-sm text-brown-500 mb-2">{product.category}</div>
                <h3 className="heading-md text-brown-900 mb-3">{product.name}</h3>
                <p className="text-body text-brown-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-brown-900">{product.price}</span>
                  <button className="w-10 h-10 rounded-full bg-brown-500 text-white hover:bg-brown-600 transition-colors flex items-center justify-center" aria-label="Add to cart">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2m.6-2v4m-1.8 5.6c-.3-1.1-.8-2.1-1.3-3.1-.3.9-.5 1.9-.7 2.9-.1.5-.2 1-.26 1.6-.12.9-.22 1.8-.28 2.7a10.01 10.01 0 0011.73 7.19c.1-.1.1-.1.2-.2l.1-.1a5.007 5.007 0 00.1-.1c.05-.1.1-.1.15-.15.05-.05.05-.1.1-.12a2.78 2.78 0 011.2 3.49c-.3 1.2-1 2.3-1.9 3.2-1.1 1-2.3 1.8-3.6 2.4" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
          className="text-center mt-16"
        >
          <button className="btn-secondary">
            View All Cookies
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
          className="mt-20 bg-brown-100 rounded-2xl p-8 text-center"
        >
          <h3 className="heading-md text-brown-900 mb-4">Custom Cakes & Special Orders</h3>
          <p className="text-body-lg text-brown-700 mb-6 max-w-2xl mx-auto">
            Need a special cake for an occasion? We create custom designs for birthdays, weddings, anniversaries, and more!
          </p>
          <button className="btn-primary">
            View Cake Gallery
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}