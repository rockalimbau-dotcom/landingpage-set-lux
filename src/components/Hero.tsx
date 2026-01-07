

import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()
  const [isDark, setIsDark] = useState(theme === 'dark')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Sincronizar con el tema del contexto
    setIsDark(theme === 'dark')
  }, [theme])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Calcular la posición relativa (0-1)
      const relativeX = x / rect.width
      const relativeY = y / rect.height
      
      // Si el ratón está en la mitad izquierda, modo claro, si está en la derecha, modo oscuro
      // O podemos usar una combinación de X e Y
      const threshold = 0.5
      setIsDark(relativeX > threshold)
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Modo claro: naranja claro, Modo oscuro: azul oscuro */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundColor: isDark ? '#0476D9' : '#F27405',
          opacity: isDark ? 0.95 : 0.1,
        }}
      ></div>
      
      {/* Background base */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundColor: isDark ? '#1e293b' : '#fff7ed',
        }}
      ></div>
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Logo size="xl" isDark={isDark} className="transform hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Main Heading - Sin degradado */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up">
            <span 
              className="transition-colors duration-700"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              SetLux
            </span>
            <span className={`block text-3xl md:text-4xl lg:text-5xl font-normal mt-4 transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              All in One
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-2xl md:text-3xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-gray-700'}`} style={{ animationDelay: '0.2s' }}>
            La solución completa para la gestión del departamento de iluminación{' '}
            <span className={`transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>en</span>{' '}
            <span 
              className="font-semibold transition-colors duration-700"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >producciones audiovisuales</span>
          </p>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up transition-colors duration-700 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} style={{ animationDelay: '0.4s' }}>
            Digitaliza y optimiza todos los procesos administrativos: planificación, 
            gestión de equipo, condiciones laborales, reportes y nóminas en un solo lugar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#features"
              className="group text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Descubre más
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className={`px-10 py-5 rounded-xl font-bold text-lg border-3 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm ${isDark ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' : 'bg-white/80 border-orange-500 text-orange-600 hover:bg-orange-50'}`}
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.3)' : '#F27405' }}
            >
              Contactar
            </a>
          </div>

          {/* Stats or Highlights */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-1 transition-colors duration-700"
                style={{ color: '#0476D9' }}
              >100%</div>
              <div className={`text-sm transition-colors duration-700 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Automatizado</div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-1 transition-colors duration-700"
                style={{ color: '#F27405' }}
              >0</div>
              <div className={`text-sm transition-colors duration-700 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Errores</div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl font-bold mb-1 transition-colors duration-700"
                style={{ color: '#0476D9' }}
              >∞</div>
              <div className={`text-sm transition-colors duration-700 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Proyectos</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div 
              className="w-6 h-10 border-2 rounded-full mx-auto flex justify-center transition-colors duration-700"
              style={{ borderColor: isDark ? '#F27405' : '#0476D9', opacity: 0.5 }}
            >
              <div 
                className="w-1 h-3 rounded-full mt-2 transition-colors duration-700"
                style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador visual del modo */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm opacity-50 transition-opacity duration-700">
        <span className={`transition-colors duration-700 ${isDark ? 'text-orange-400' : 'text-blue-600'}`}>
          {isDark ? 'Modo Oscuro' : 'Modo Claro'} • Mueve el ratón para cambiar
        </span>
      </div>
    </section>
  )
}

export default Hero







