'use client'

import { ReactNode } from 'react'
import { LenisProvider } from './providers/LenisProvider'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      {children}
    </LenisProvider>
  )
}