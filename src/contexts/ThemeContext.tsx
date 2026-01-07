import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Inicializar con 'light' por defecto para evitar problemas de SSR
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return
    
    setMounted(true)
    
    // Check localStorage first
    try {
      const savedTheme = localStorage.getItem('setlux-theme') as Theme
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme)
        return
      }
    } catch (e) {
      // Ignorar errores de localStorage
    }
    
    // Check system preference
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      }
    } catch (e) {
      // Ignorar errores
    }
  }, [])

  useEffect(() => {
    // Solo ejecutar en el cliente después de montar
    if (!mounted || typeof window === 'undefined' || typeof document === 'undefined') return
    
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('setlux-theme', theme)
      }
    } catch (e) {
      // Ignorar errores de localStorage
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
