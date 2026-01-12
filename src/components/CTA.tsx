
import ContactForm from './ContactForm'
import { useTheme } from '../contexts/ThemeContext'

const CTA = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <section id="contact" className="relative py-20 overflow-hidden transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#fff7ed' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactForm />
      </div>
    </section>
  )
}

export default CTA
