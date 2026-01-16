import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

const WhatIs = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()

  return (
    <section id="what-is" className="py-12 md:py-20 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 transition-colors duration-300 px-4"
            style={{ color: isDark ? '#F27405' : '#0476D9' }}
          >
            {t('whatIs.title')}
          </h2>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed transition-colors duration-300 px-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('whatIs.lead1')}
          </p>
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed transition-colors duration-300 px-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('whatIs.lead2')}
          </p>
          
          <Link
            to="/caracteristicas"
            className="inline-flex items-center gap-2 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            {t('whatIs.cta')}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhatIs
