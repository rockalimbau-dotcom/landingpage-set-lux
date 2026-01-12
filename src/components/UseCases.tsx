import { Film, Video, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const allUseCases = [
  {
    icon: Film,
    title: 'Producción de Ficción',
    description: 'Planificación completa de semanas de rodaje, gestión de equipo grande con múltiples roles, cálculo de nóminas mensuales complejas y reportes detallados.',
    features: [
      'Planificación de múltiples semanas',
      'Equipos grandes con múltiples roles',
      'Nóminas mensuales complejas',
      'Reportes semanales detallados',
    ],
    color: 'blue',
  },
  {
    icon: Video,
    title: 'Producción de Publicidad',
    description: 'Condiciones específicas de publicidad, gestión de localizaciones técnicas, cálculo de carga/descarga y nóminas con estructura especializada.',
    features: [
      'Condiciones específicas de publicidad',
      'Localizaciones técnicas',
      'Cálculo de carga/descarga',
      'Nóminas especializadas',
    ],
    color: 'orange',
  },
]

const UseCases = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="use-cases" className="py-16 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span 
              className="text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              CASOS DE USO
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300"
            style={{ color: isDark ? '#F27405' : '#0476D9' }}
          >
            Casos de uso
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
            SetLux se adapta a cualquier tipo de producción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {allUseCases.map((useCase, index) => {
            const Icon = useCase.icon
            const bgColor = isDark ? '#F27405' : '#0476D9' // Naranja en oscuro, azul en claro
            
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
                  
                  <p className={`leading-relaxed text-sm transition-colors duration-700 ${isDark ? 'text-gray-600' : 'text-black'}`}>
                    {useCase.description.split('.')[0]}.
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Botón ver más */}
        <div className="text-center">
          <Link
            to="/casos-de-uso"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            Ver casos de uso detallados
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UseCases
export { allUseCases }
