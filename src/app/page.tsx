'use client'

import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { About } from './components/About'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'

export default function HomePage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = target.getAttribute('href')!
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    
    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Products />
        <About />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}