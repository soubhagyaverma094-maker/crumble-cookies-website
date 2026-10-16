'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = scrollTop / docHeight
      setProgress(scrollPercent)
    }
    
    window.addEventListener('scroll', updateProgress)
    updateProgress()
    
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])
  
  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-brown-800 z-50"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-cream-500 origin-left"
        animate={{ scaleX: progress }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  )
}