
import { allUseCases } from '../components/UseCases'
import { useTheme } from '../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'

const CasosDeUso = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      {/* Main Content */}
      <section className="flex-1 py-12 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs currentPage="Casos de Uso" />

          {/* Title and Description */}
          <div className="mb-12">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-colors duration-300"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              Casos de uso detallados
            </h1>
            <p className={`text-lg md:text-xl transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              SetLux se adapta a cualquier tipo de producción audiovisual
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allUseCases.map((useCase, index) => {
              const Icon = useCase.icon
              const bgColor = isDark ? '#F27405' : '#0476D9'
              
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 overflow-hidden border-gray-100 ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  }`}
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
                    
                    <p className={`mb-6 leading-relaxed text-lg transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
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
                          <span className={`text-base transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>{feature}</span>
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
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CasosDeUso
