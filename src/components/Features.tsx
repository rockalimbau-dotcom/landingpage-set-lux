

import { Calendar, Users, FileText, BarChart3, DollarSign, ClipboardList, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const allFeatures = [
  {
    icon: FileText,
    title: 'Condiciones Laborales',
    description: 'Gestiona precios, políticas y condiciones según el tipo de producción (semanal, mensual, publicidad) con cálculos automáticos precisos.',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Gestión de Equipo',
    description: 'Organiza tu equipo de iluminación con roles diferenciados (Gaffer, Best Boy, Eléctrico, etc.) y equipos (Base, Prelight, Recogida).',
    color: 'orange',
  },
  {
    icon: Calendar,
    title: 'Planificación',
    description: 'Sistema completo de planificación de rodaje con calendario interactivo, gestión de semanas, asignación de equipo y exportación profesional.',
    color: 'blue',
  },
  {
    icon: BarChart3,
    title: 'Reportes',
    description: 'Sistema avanzado de reportes semanales con registro de horas extra, turn arounds, nocturnidad, dietas y todos los conceptos económicos.',
    color: 'orange',
  },
  {
    icon: DollarSign,
    title: 'Nómina',
    description: 'Cálculo automático de nóminas mensuales con desglose detallado de días trabajados, conceptos adicionales y exportación para contabilidad.',
    color: 'blue',
  },
  {
    icon: ClipboardList,
    title: 'Necesidades',
    description: 'Gestiona todas las necesidades del departamento durante la producción con listas personalizables y exportación profesional.',
    color: 'orange',
  },
]

// Mostrar solo las 4 principales en la landing
const features = allFeatures.slice(0, 4)

const Features = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="features" className="py-16 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span 
              className="text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{ backgroundColor: '#0476D9' }}
            >
              CARACTERÍSTICAS
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300"
            style={{ color: '#0476D9' }}
          >
            Características principales
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            Las herramientas esenciales para gestionar tu departamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isBlue = feature.color === 'blue'
            const bgColor = isBlue ? '#0476D9' : '#F27405'
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 bg-white border-gray-100"
              >
                {/* Icon with solid color background */}
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
                <p className="leading-relaxed text-gray-600 text-sm">
                  {feature.description.split('.')[0]}.
                </p>
              </div>
            )
          })}
        </div>

        {/* Botón ver más */}
        <div className="text-center">
          <Link
            to="/caracteristicas"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#0476D9' }}
          >
            Ver todas las características
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features
export { allFeatures }
