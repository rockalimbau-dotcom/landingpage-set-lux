'use client'

import { Calendar, Users, FileText, BarChart3, DollarSign, ClipboardList, Globe, Zap } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const features = [
  {
    icon: Calendar,
    title: 'Planificación',
    description: 'Sistema completo de planificación de rodaje con calendario interactivo, gestión de semanas, asignación de equipo y exportación profesional.',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Gestión de Equipo',
    description: 'Organiza tu equipo de iluminación con roles diferenciados (Gaffer, Best Boy, Eléctrico, etc.) y equipos especializados (Base, Prelight, Pickup).',
    color: 'orange',
  },
  {
    icon: FileText,
    title: 'Condiciones Laborales',
    description: 'Gestiona precios, políticas y condiciones según el tipo de producción (semanal, mensual, publicidad) con cálculos automáticos precisos.',
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
  {
    icon: Globe,
    title: 'Multiidioma',
    description: 'Soporte completo para Español, Inglés y Catalán. Interfaz y documentos exportados en el idioma seleccionado.',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Automatización',
    description: 'Cálculos automáticos que eliminan errores humanos, validación inteligente y sincronización entre todos los módulos.',
    color: 'orange',
  },
]

const Features = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#fff7ed]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl transition-colors duration-500"
          style={{
            backgroundColor: '#0476D9',
            opacity: isDark ? 0.1 : 0.05,
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
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
              CARACTERÍSTICAS
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300"
            style={{ color: '#0476D9' }}
          >
            Todo lo que necesitas
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
            Una plataforma completa para gestionar tu departamento de iluminación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
