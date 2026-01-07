

import { ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { useTheme } from '../contexts/ThemeContext'

const CTA = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background base */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#fff7ed',
        }}
      ></div>
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" isDark={false} className="transform hover:scale-110 transition-transform duration-300" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            ¿Listo para transformar tu gestión?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-700">
            Únete a los profesionales del departamento de iluminación que ya están 
            digitalizando sus procesos con SetLux
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              style={{ backgroundColor: '#0476D9' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Contacta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#features"
              className="px-10 py-5 rounded-xl font-bold text-lg border-3 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/80 border-blue-600 text-blue-600 hover:bg-blue-50"
              style={{ borderColor: '#0476D9' }}
            >
              Ver características
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
