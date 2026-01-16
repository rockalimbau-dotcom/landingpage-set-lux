

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useTheme } from '../contexts/ThemeContext'
import ThemeButton from './ThemeButton'
import LanguageSwitcher from './LanguageSwitcher'
import { useCounterAnimation } from '../hooks/useCounterAnimation'
import { useTranslation } from 'react-i18next'

const Hero = ({ introCompleted }: { introCompleted: boolean }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()
  
  // Animaciones de contadores
  const { count: autoCount, elementRef: autoRef } = useCounterAnimation({
    start: 0,
    end: 100,
    duration: 4500,
    enabled: introCompleted
  })
  
  const { count: errorCount, elementRef: errorRef } = useCounterAnimation({
    start: 1000,
    end: 0,
    duration: 4500,
    enabled: introCompleted
  })
  
  const { count: projectCount, elementRef: projectRef } = useCounterAnimation({
    start: 0,
    end: Infinity,
    duration: 4500,
    infinite: true,
    enabled: introCompleted
  })

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Theme Button - Esquina superior derecha */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        <LanguageSwitcher />
        <ThemeButton />
      </div>
      {/* Background - Modo claro: naranja claro, Modo oscuro: azul oscuro */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundColor: isDark ? '#0476D9' : '#F27405',
          opacity: isDark ? 0.95 : 0.1,
        }}
      ></div>
      
      {/* Background base */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundColor: isDark ? '#1e293b' : '#fff7ed',
        }}
      ></div>
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-0">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-8 animate-fade-in">
            <Logo size="lg" isDark={isDark} className="md:hidden transform hover:scale-110 transition-transform duration-300" />
            <Logo size="xl" isDark={isDark} className="hidden md:block transform hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Main Heading - Sin degradado */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-1 md:mb-2 leading-tight animate-fade-in-up">
            <span 
              className="transition-colors duration-700"
              style={{ color: isDark ? '#ffffff' : '#000000' }}
            >
              {t('hero.title')}
            </span>
            <span 
              className="block text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mt-2 transition-colors duration-700 tracking-[0.3em] uppercase"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              {t('hero.tagline')}
            </span>
          </h1>

          {/* Subtitle - Visual H2 */}
          <h2 className={`text-base sm:text-lg md:text-2xl lg:text-3xl mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up transition-colors duration-700 px-2 ${isDark ? 'text-gray-200' : 'text-black'}`} style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </h2>

          <p className={`text-sm sm:text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up transition-colors duration-700 px-2 ${isDark ? 'text-gray-200' : 'text-black'}`} style={{ animationDelay: '0.3s' }}>
            {t('hero.lead')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/solicitud-acceso"
              className="group text-white w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                {t('hero.primaryCta')}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href="#use-cases"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg border-3 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm ${isDark ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' : 'bg-white/80 border-orange-500 hover:bg-orange-50'}`}
              style={{ 
                borderColor: isDark ? 'rgba(255,255,255,0.3)' : '#F27405',
                color: isDark ? '#ffffff' : '#000000'
              }}
            >
              {t('hero.secondaryCta')}
            </a>
          </div>

          <p className={`mt-3 text-xs sm:text-sm transition-colors duration-700 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('hero.primaryCtaSub')}
          </p>

          {/* Stats or Highlights */}
          <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.8s' }}>
            <div className="text-center" ref={autoRef}>
              <div 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 transition-colors duration-700"
                style={{ color: isDark ? '#F27405' : '#0476D9' }}
              >
                {autoCount}%
              </div>
              <div className={`text-xs sm:text-sm transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>{t('hero.stats.automated')}</div>
            </div>
            <div className="text-center" ref={errorRef}>
              <div 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 transition-colors duration-700"
                style={{ color: isDark ? '#ffffff' : '#000000' }}
              >
                {errorCount}
              </div>
              <div className={`text-xs sm:text-sm transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>{t('hero.stats.errors')}</div>
            </div>
            <div className="text-center" ref={projectRef}>
              <div 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 transition-colors duration-700"
                style={{ color: isDark ? '#F27405' : '#0476D9' }}
              >
                {projectCount === Infinity ? '∞' : projectCount}
              </div>
              <div className={`text-xs sm:text-sm transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>{t('hero.stats.projects')}</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero







