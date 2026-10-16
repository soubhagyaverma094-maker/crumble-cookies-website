'use client'

import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

const cookieCount = 15
const cookiePositions = []

for (let i = 0; i < cookieCount; i++) {
  const angle = (i / cookieCount) * Math.PI * 2
  const radius = 1.5
  const height = (i % 3) * 0.8 - 1.2
  cookiePositions.push([
    Math.cos(angle) * radius,
    height,
    Math.sin(angle) * radius
  ])
}

function Cookie() {
  const meshRef = useRef<THREE.Mesh>(null)
  const rotationSpeed = 0.02 + Math.random() * 0.01
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
      meshRef.current.rotation.x += rotationSpeed * 0.3
    }
  })
  
  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <torusGeometry args={[0.8, 0.3, 16, 32]} />
      <meshStandardMaterial 
        color="#8b4513" 
        metalness={0.3} 
        roughness={0.7}
        emissive="#a0522d"
        emissiveIntensity={0.2}
      />
      <mesh position={[0, 0, 0.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
    </mesh>
  )
}

function CookieCloud() {
  return (
    <group>
      {cookiePositions.map((pos, i) => (
        <Float
          key={i}
          speed={1 + i * 0.1}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={pos as [number, number, number]}
        >
          <Cookie />
        </Float>
      ))}
    </group>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          className="absolute inset-0"
        >
          <color attach="background" args={['#fffef7']} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#a48a7a" />
          <Suspense fallback={null}>
            <Cookies />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cream-50 via-white to-cream-50 opacity-50" aria-hidden="true" />
      </div>
      
      <div className="relative z-10 container-custom px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brown-100 text-brown-700 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brown-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brown-500"></span>
            </span>
            Artisan Baked Goods Since 2015
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-900 mb-6 leading-tight"
        >
          Handcrafted{' '}
          <span className="gradient-text">Cookies</span>{' '}
          &{' '}
          <span className="text-brown-700">Custom Cakes</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-lg sm:text-xl text-brown-600 mb-10 max-w-2xl mx-auto"
        >
          Made with premium butter, real vanilla, and love in every bite. Order online for pickup or delivery and indulge in perfection.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#order"
            className="btn-primary text-lg px-10 py-4"
          >
            Order Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button
            onClick={() => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-10 py-4"
          >
            See Our Menu
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-brown-500"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brown-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.293 4.707 10.593a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Free local pickup</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brown-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 15l-3.87 3.43a.75.75 0 00-.97-.15l-4.37 1.32a.75.75 0 00-.63.74v4.28a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75v-4.28a.75.75 0 00-.63-.74l-4.37-1.32a.75.75 0 01-.97.15L10 15z" />
            </svg>
            <span>Wide delivery area</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brown-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M9 12l2 2 4-4M12 7v5l2 2" />
            </svg>
            <span>Fast delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Cookies() {
  return (
    <mesh position={[0, -1, 0]}>
      <CookieCloud />
    </mesh>
  )
}