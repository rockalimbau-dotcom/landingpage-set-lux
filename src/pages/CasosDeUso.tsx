
import { allUseCases } from '../components/UseCases'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const CasosDeUso = () => {
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
            Casos de uso detallados
          </h1>
          <p className={`text-xl md:text-2xl transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            SetLux se adapta a cualquier tipo de producción audiovisual
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allUseCases.map((useCase, index) => {
            const Icon = useCase.icon
            const isBlue = useCase.color === 'blue'
            const bgColor = isBlue ? '#0476D9' : '#F27405'
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 overflow-hidden bg-white border-gray-100"
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div 
                      className="rounded-xl p-4 mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      style={{ backgroundColor: bgColor }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 
                      className="text-2xl font-bold transition-colors duration-300"
                      style={{ color: bgColor }}
                    >
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="mb-6 leading-relaxed text-lg text-gray-600">
                    {useCase.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"
                          style={{ backgroundColor: bgColor }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                        </div>
                        <span className="text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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

export default CasosDeUso
