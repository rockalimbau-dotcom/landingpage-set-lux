import ContactForm from '../components/ContactForm'
import Breadcrumbs from '../components/Breadcrumbs'
import { useTheme } from '../contexts/ThemeContext'

const Acceso = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <section className="flex-1 py-12 md:py-20 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs currentPage="Acceso" />
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              Solicita acceso anticipado
            </h1>
            <p className={`text-base md:text-lg transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-black'}`}>
              Cuéntanos un poco sobre tu trabajo y te daremos acceso a SetLux lo antes posible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Acceso
