'use client'

import { ThemeProvider as ThemeProviderContext } from '@/contexts/ThemeContext'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProviderContext>{children}</ThemeProviderContext>
}

