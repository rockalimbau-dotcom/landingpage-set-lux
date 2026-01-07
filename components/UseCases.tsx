'use client'

import { Film, Tv, Video, Camera } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const useCases = [
  {
    icon: Film,
    title: 'Producción de Largometraje',
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
  {
    icon: Tv,
    title: 'Producción de Serie',
    description: 'Múltiples proyectos (una por temporada/episodio), reutilización de equipo entre proyectos, condiciones estandarizadas y gestión eficiente.',
    features: [
      'Múltiples proyectos',
      'Reutilización de equipo',
      'Condiciones estandarizadas',
      'Gestión eficiente de semanas',
    ],
    color: 'blue',
  },
  {
    icon: Camera,
    title: 'Preproducción',
    description: 'Planificación de semanas de preproducción, gestión de equipo de prelight, cálculo de necesidades y preparación de condiciones laborales.',
    features: [
      'Planificación de preproducción',
      'Equipo de prelight',
      'Cálculo de necesidades',
      'Preparación de condiciones',
    ],
    color: 'orange',
  },
]

const UseCases = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
          style={{
            backgroundColor: '#0476D9',
            opacity: isDark ? 0.1 : 0.05,
          }}
        ></div>
        <div 
          className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
          style={{
            backgroundColor: '#F27405',
            opacity: isDark ? 0.1 : 0.05,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span 
              className="text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{ backgroundColor: '#0476D9' }}
            >
              CASOS DE USO
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300"
            style={{ color: '#0476D9' }}
          >
            Para cada tipo de producción
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
            SetLux se adapta a cualquier tipo de producción audiovisual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
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
      </div>
    </section>
  )
}

export default UseCases
