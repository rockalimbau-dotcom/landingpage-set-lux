import { allFeatures } from '../components/Features'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Caracteristicas = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            style={{ color: isDark ? '#F27405' : '#0476D9' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a inicio
          </Link>
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300"
            style={{ color: '#0476D9' }}
          >
            Características completas
          </h1>
          <p className={`text-xl md:text-2xl transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Todas las herramientas que SetLux ofrece para gestionar tu departamento de iluminación
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isBlue = feature.color === 'blue'
            const bgColor = isBlue ? '#0476D9' : '#F27405'
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 bg-white border-gray-100"
              >
                <div 
                  className="relative mb-6 inline-flex p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: bgColor }}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <h3 
                  className="text-2xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: bgColor }}
                >
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#0476D9' }}
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Caracteristicas
