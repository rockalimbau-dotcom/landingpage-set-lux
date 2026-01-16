import { Film, Video, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

const useCaseConfigs = [
  { key: 'fiction', icon: Film, color: 'blue' },
  { key: 'ads', icon: Video, color: 'orange' },
]

const getUseCases = (t: (key: string, options?: { returnObjects?: boolean }) => any) =>
  useCaseConfigs.map((useCase) => ({
    ...useCase,
    title: t(`useCases.items.${useCase.key}.title`),
    description: t(`useCases.items.${useCase.key}.description`),
    features: t(`useCases.items.${useCase.key}.features`, { returnObjects: true }) as string[],
  }))

const UseCases = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()
  const allUseCases = getUseCases(t)
  
  return (
    <section id="use-cases" className="py-12 md:py-16 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-3 md:mb-4">
            <span 
              className="text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-300"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              {t('useCases.label')}
            </span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 px-4"
            style={{ color: isDark ? '#F27405' : '#0476D9' }}
          >
            {t('useCases.title')}
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto transition-colors duration-700 px-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
          {allUseCases.map((useCase, index) => {
            const Icon = useCase.icon
            const bgColor = isDark ? '#F27405' : '#0476D9' // Naranja en oscuro, azul en claro
            
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
                  
                  <p className={`leading-relaxed text-xs md:text-sm transition-colors duration-700 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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
            className="inline-flex items-center gap-2 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            {t('useCases.cta')}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UseCases
export { getUseCases }
