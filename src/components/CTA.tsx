
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const CTA = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="final-cta" className="relative py-12 md:py-20 overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300"
            style={{ color: isDark ? '#F27405' : '#0476D9' }}
          >
            Da el siguiente paso con SetLux
          </h2>
          <p className={`text-base md:text-lg lg:text-xl mb-8 md:mb-10 transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-black'}`}>
            Simplifica la gestión de iluminación y obtén una ventaja real en tus producciones.
          </p>
          <div className="flex justify-center">
            <Link
              to="/solicitud-acceso"
              className="inline-flex items-center gap-2 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              Solicitar acceso
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
