'use client'

import { Clock, Shield, FileCheck, TrendingUp, Users, CheckCircle } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const benefits = [
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Reduce horas de trabajo manual en cálculos y documentación. La automatización acelera todos los procesos administrativos.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Reduce Errores',
    description: 'Elimina errores humanos con cálculos automáticos precisos y validación inteligente en cada paso del proceso.',
    color: 'orange',
  },
  {
    icon: FileCheck,
    title: 'Documentación Profesional',
    description: 'Genera documentos PDF de alta calidad listos para compartir con producción y contabilidad.',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Aumenta la Transparencia',
    description: 'Todos los cálculos son visibles y verificables, facilitando la comunicación y el cumplimiento legal.',
    color: 'orange',
  },
  {
    icon: Users,
    title: 'Todo en Uno',
    description: 'Única plataforma que integra planificación, equipo, condiciones, reportes y nóminas en un solo lugar.',
    color: 'blue',
  },
  {
    icon: CheckCircle,
    title: 'Cumplimiento Legal',
    description: 'Referencias al convenio colectivo y políticas claras que facilitan el cumplimiento de normativas laborales.',
    color: 'orange',
  },
]

const Benefits = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
          style={{
            backgroundColor: '#F27405',
            opacity: isDark ? 0.1 : 0.05,
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500"
          style={{
            backgroundColor: '#0476D9',
            opacity: isDark ? 0.1 : 0.05,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span 
              className="text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{ backgroundColor: '#F27405' }}
            >
              VENTAJAS
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300"
            style={{ color: '#F27405' }}
          >
            Ventajas Competitivas
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
            Transforma la gestión de tu departamento de iluminación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isBlue = benefit.color === 'blue'
            const bgColor = isBlue ? '#0476D9' : '#F27405'
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 bg-white border-gray-100"
              >
                {/* Icon with solid color background */}
                <div 
                  className="mb-6 inline-flex p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                  style={{ backgroundColor: bgColor }}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: bgColor }}
                >
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-lg text-gray-600">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
