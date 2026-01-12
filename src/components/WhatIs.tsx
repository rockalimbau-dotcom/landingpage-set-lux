import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const WhatIs = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="what-is" className="py-20 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300"
            style={{ color: isDark ? '#F27405' : '#0476D9' }}
          >
            ¿Qué es SetLux?
          </h2>
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
            Plataforma completa para gestionar el departamento de iluminación en producciones audiovisuales.
          </p>
          <p className={`text-lg md:text-xl mb-10 leading-relaxed transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
            Planificación, gestión de equipo, condiciones laborales, reportes y nóminas en un solo lugar.
          </p>
          
          <Link
            to="/caracteristicas"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            Ver características completas
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhatIs
