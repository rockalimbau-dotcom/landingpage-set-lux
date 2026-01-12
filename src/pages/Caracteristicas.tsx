import { allFeatures } from '../components/Features'
import { useTheme } from '../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'

const Caracteristicas = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      {/* Main Content */}
      <section className="flex-1 py-12 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs currentPage="Características" />

          {/* Title and Description */}
          <div className="mb-12">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-colors duration-300"
              style={{ color: isDark ? '#F27405' : '#0476D9' }}
            >
              Características completas
            </h1>
            <p className={`text-lg md:text-xl transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
              Todas las herramientas que SetLux ofrece para gestionar tu departamento de iluminación
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => {
              const Icon = feature.icon
              // En modo claro: todas azules con texto negro
              // En modo oscuro: todas naranjas con texto blanco
              const bgColor = isDark ? '#F27405' : '#0476D9'
              
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                  }`}
                >
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
                  <p className={`leading-relaxed transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: isDark ? '#F27405' : '#0476D9' }}
            >
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Caracteristicas
