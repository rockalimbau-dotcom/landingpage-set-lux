

import { Clock, Shield, FileCheck, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const allBenefits = [
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

// Mostrar solo las 3 principales en la landing
const benefits = allBenefits.slice(0, 3)

const Benefits = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="benefits" className="py-12 md:py-16 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-3 md:mb-4">
            <span 
              className="text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              VENTAJAS
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 px-4"
            style={{ color: isDark ? '#F27405' : '#0476D9' }}
          >
            Ventajas principales
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto transition-colors duration-700 px-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Beneficios clave de usar SetLux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const bgColor = isDark ? '#F27405' : '#0476D9' // Naranja en oscuro, azul en claro
            
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                {/* Icon with solid color background */}
                <div 
                  className="mb-4 md:mb-6 inline-flex p-3 md:p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                  style={{ backgroundColor: bgColor }}
                >
                  <Icon className="w-6 h-6 md:w-10 md:h-10 text-white" strokeWidth={2} />
                </div>
                
                <h3 
                  className="text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300"
                  style={{ color: bgColor }}
                >
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed text-xs md:text-sm transition-colors duration-700 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {benefit.description.split('.')[0]}.
                </p>
              </div>
            )
          })}
        </div>

        {/* Botón ver más */}
        <div className="text-center">
          <Link
            to="/ventajas"
            className="inline-flex items-center gap-2 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            Ver todas las ventajas
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Benefits
export { allBenefits }
