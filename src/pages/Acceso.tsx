import ContactForm from '../components/ContactForm'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

const Acceso = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <section className="flex-1 py-12 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs currentPage={t('accessPage.breadcrumb')} />
          <div className="mb-8 md:mb-12">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 px-2"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              {t('accessPage.title')}
            </h1>
            <p className={`text-base md:text-lg transition-colors duration-700 px-2 ${isDark ? 'text-gray-200' : 'text-black'}`}>
              {t('accessPage.subtitleLine1')}
              <br />
              {t('accessPage.subtitleLine2')}
            </p>
            <ul className={`mt-4 md:mt-6 space-y-3 text-sm md:text-base px-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {(t('accessPage.bullets', { returnObjects: true }) as string[]).map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
                  ></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className={`text-sm md:text-base mb-4 md:mb-6 px-2 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('accessPage.preForm')}
          </p>
          <ContactForm />
          <p className={`text-xs md:text-sm mt-4 md:mt-6 px-2 ${isDark ? 'text-white' : 'text-black'}`}>
            {t('accessPage.microcopyLine1')}
            <br />
            {t('accessPage.microcopyLine2')}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Acceso
