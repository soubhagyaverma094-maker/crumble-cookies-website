'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const quickLinks = [
  { href: '#products', label: 'Cookies' },
  { href: '#about', label: 'About Us' },
  { href: '#process', label: 'How It Works' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#order', label: 'Order' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <footer
      id="footer"
      className="bg-brown-900 text-cream-100 pt-12"
      aria-label="Site footer"
    >
      <div className="container-custom pb-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link href="#" className="flex items-center gap-2 text-2xl font-display font-bold text-white" aria-label="Crumble Cookies Home">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cream-500 to-brown-500 flex items-center justify-center text-brown-900 font-bold">
                C
              </div>
              <span>Crumble Cookies</span>
            </Link>
            <p className="text-sm text-cream-200 max-w-xs">
              Artisan baked goods crafted with passion since 2015. 
              Fresh daily, delivered hot to your door.
            </p>
            <div className="flex gap-4">
              <a href="tel:+919876543210" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center text-cream-200 hover:bg-brown-700 transition-colors" aria-label="Call us">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:info@crumblecookies.com" className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center text-cream-200 hover:bg-brown-700 transition-colors" aria-label="Email us">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 12v5a2 2 0 002 2h10a2 2 0 002-2v-5M8 7v5a2 2 0 002 2h4a2 2 0 002-2V7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200 hover:text-cream-100 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="heading-md text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {['Cookie Collection', 'Custom Cakes', 'Corporate Orders', 'Wholesale Baked Goods', 'Catering Packages'].map((service) => (
                <li key={service}>
                  <a href="#order" className="text-sm text-cream-200 hover:text-cream-100 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="heading-md text-white mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm text-cream-200">
              <p>123 Bakery Lane</p>
              <p>Sweetville, SV 12345</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 info@crumblecookies.com</p>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-brown-700 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-cream-300">
            © {new Date().getFullYear()} Crumble Cookies. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-brown-800 flex items-center justify-center text-cream-200 hover:bg-brown-700 transition-colors"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </footer>
  )
}