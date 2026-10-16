'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'How It Works' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#order', label: 'Order Now' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-brown-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom h-20 flex items-center justify-between" aria-label="Main navigation">
        <Link
          href="#"
          className="flex items-center gap-3 text-xl font-display font-bold text-brown-900"
          aria-label="Crumble Cookies Home"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brown-500 to-cream-500 rounded-lg opacity-20" />
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brown-500 to-cream-500 flex items-center justify-center text-white text-sm font-bold">
              C
            </div>
          </div>
          <span className="hidden sm:inline">Crumble Cookies</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-brown-700 hover:text-brown-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brown-600 after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="btn-primary text-sm px-6 py-2.5 rounded-full"
          >
            Order Now
          </a>
        </div>

        <button
          className="lg:hidden p-3 rounded-lg text-brown-700 hover:bg-brown-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between h-20 px-4 border-b border-brown-100">
                <Link href="#" className="flex items-center gap-2 text-xl font-display font-bold text-brown-900" aria-label="Crumble Cookies Home">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-brown-500 to-cream-500 flex items-center justify-center text-white font-bold">C</div>
                  Crumble Cookies
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-brown-700 hover:bg-brown-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col p-4 gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="w-full text-left px-4 py-3 text-base font-medium text-brown-700 hover:text-brown-900 hover:bg-brown-50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                  <a
                    href="tel:+919876543210"
                    className="btn-primary text-center mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}