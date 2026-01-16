import { getFeatures } from '../components/Features'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

const Caracteristicas = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()
  const allFeatures = getFeatures(t)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      {/* Main Content */}
      <section className="flex-1 py-12 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs currentPage={t('pages.features.breadcrumb')} />

          {/* Title and Description */}
          <div className="mb-8 md:mb-12">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 transition-colors duration-300 px-2"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              {t('pages.features.title')}
            </h1>
            <p className={`text-base sm:text-lg md:text-xl transition-colors duration-300 px-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t('pages.features.description')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {allFeatures.map((feature, index) => {
              const Icon = feature.icon
              // En modo claro: todas azules con texto negro
              // En modo oscuro: todas naranjas con texto blanco
              const bgColor = isDark ? '#F27405' : '#0476D9'
              
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                  }`}
                >
                  <div 
                    className="relative mb-4 md:mb-6 inline-flex p-3 md:p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: bgColor }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />
                  </div>

                  <h3 
                    className="text-xl md:text-2xl font-bold mb-2 md:mb-3 transition-colors duration-300"
                    style={{ color: bgColor }}
                  >
                    {feature.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

        <p className={`mt-10 md:mt-12 text-base md:text-lg transition-colors duration-700 px-2 ${isDark ? 'text-white' : 'text-black'}`}>
          {t('pages.features.closing')}
        </p>

        {/* CTA */}
        <div className="mt-6 md:mt-8 text-center">
          <Link
            to="/solicitud-acceso"
            className="inline-flex items-center gap-2 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 w-full sm:w-auto min-h-[44px]"
            style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
          >
            {t('pages.features.cta')}
          </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Caracteristicas
