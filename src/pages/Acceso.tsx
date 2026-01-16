import ContactForm from '../components/ContactForm'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import { useTheme } from '../contexts/ThemeContext'

const Acceso = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <section className="flex-1 py-12 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs currentPage="Acceso" />
          <div className="mb-8 md:mb-12">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 px-2"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              Solicitud de acceso a SetLux
            </h1>
            <p className={`text-base md:text-lg transition-colors duration-700 px-2 ${isDark ? 'text-gray-200' : 'text-black'}`}>
              SetLux está en fase de desarrollo activo.
              <br />
              Buscamos profesionales del departamento de iluminación para probar la herramienta y aportar feedback real.
            </p>
            <ul className={`mt-4 md:mt-6 space-y-3 text-sm md:text-base px-2 ${isDark ? 'text-white' : 'text-black'}`}>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
                ></span>
                <span>Acceso anticipado a nuevas funciones</span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
                ></span>
                <span>Posibilidad de influir en el desarrollo</span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
                ></span>
                <span>Herramienta pensada desde la experiencia en set</span>
              </li>
            </ul>
          </div>
          <p className={`text-sm md:text-base mb-4 md:mb-6 px-2 ${isDark ? 'text-white' : 'text-black'}`}>
            Rellena el formulario y nos pondremos en contacto contigo.
          </p>
          <ContactForm />
          <p className={`text-xs md:text-sm mt-4 md:mt-6 px-2 ${isDark ? 'text-white' : 'text-black'}`}>
            No spam.
            <br />
            Solo comunicación relacionada con el acceso y evolución de SetLux.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Acceso
