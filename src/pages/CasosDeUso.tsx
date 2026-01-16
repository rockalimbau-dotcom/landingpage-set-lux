
import { allUseCases } from '../components/UseCases'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'

const CasosDeUso = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      {/* Main Content */}
      <section className="flex-1 py-12 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs currentPage="Casos de Uso" />

          {/* Title and Description */}
          <div className="mb-8 md:mb-12">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 transition-colors duration-300 px-2"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              Casos de uso detallados
            </h1>
            <p className={`text-base sm:text-lg md:text-xl transition-colors duration-300 px-2 ${isDark ? 'text-white' : 'text-black'}`}>
              SetLux se adapta a cualquier tipo de producción audiovisual
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {allUseCases.map((useCase, index) => {
              const Icon = useCase.icon
              const bgColor = isDark ? '#F27405' : '#0476D9'
              
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 overflow-hidden border-gray-100 ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div 
                        className="rounded-xl p-3 md:p-4 mr-3 md:mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                        style={{ backgroundColor: bgColor }}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />
                      </div>
                      <h3 
                        className="text-lg md:text-2xl font-bold transition-colors duration-300"
                        style={{ color: bgColor }}
                      >
                        {useCase.title}
                      </h3>
                    </div>
                    
                    <p className={`mb-4 md:mb-6 leading-relaxed text-sm md:text-lg transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
                      {useCase.description}
                    </p>
                    
                    <ul className="space-y-2 md:space-y-3">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/item">
                          <div 
                            className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"
                            style={{ backgroundColor: bgColor }}
                          >
                            <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-white"></div>
                          </div>
                          <span className={`text-sm md:text-base transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/solicitud-acceso"
            className="inline-flex items-center gap-2 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full sm:w-auto min-h-[44px]"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            Solicitar acceso
          </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CasosDeUso
