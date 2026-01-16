

import { Mail, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()

  return (
    <>
      {/* Footer */}
      <footer 
        className="py-12 md:py-16 relative overflow-hidden transition-colors duration-700"
        style={{
          backgroundColor: isDark ? '#1e293b' : '#fff7ed',
        }}
      >

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Brand */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4 md:mb-6">
                <Logo size="md" isDark={isDark} className="mr-2 md:mr-3 md:hidden" />
                <Logo size="lg" isDark={isDark} className="mr-3 hidden md:block" />
                <div>
                  <span className={`text-2xl md:text-3xl font-bold block transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>SetLux</span>
                  <span 
                    className="text-xs md:text-sm font-semibold transition-colors duration-700"
                    style={{ color: isDark ? '#F27405' : '#0476D9' }}
                  >
                    {t('footer.brandSubtitle')}
                  </span>
                </div>
              </div>
              <p className={`text-sm md:text-base leading-relaxed transition-colors duration-700 ${isDark ? 'text-gray-300' : 'text-black'}`}>
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col">
              <h3 className={`font-bold mb-4 md:mb-6 text-base md:text-lg transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t('footer.linksTitle')}</h3>
              <ul className="space-y-2 md:space-y-3 flex-1">
                <li>
                  <Link 
                    to="/solicitud-acceso" 
                    className="hover:opacity-80 transition-opacity block relative pl-0 group text-sm md:text-base"
                    style={{ color: isDark ? '#F27405' : '#0476D9' }}
                  >
                    <span className="w-2 h-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}></span>
                    <span className="pl-0 group-hover:pl-5 transition-all duration-200">{t('footer.accessEarly')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/caracteristicas" 
                    className="hover:opacity-80 transition-opacity block relative pl-0 group text-sm md:text-base"
                    style={{ color: isDark ? '#F27405' : '#0476D9' }}
                  >
                    <span className="w-2 h-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}></span>
                    <span className="pl-0 group-hover:pl-5 transition-all duration-200">{t('footer.features')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ventajas" 
                    className="hover:opacity-80 transition-opacity block relative pl-0 group text-sm md:text-base"
                    style={{ color: isDark ? '#F27405' : '#0476D9' }}
                  >
                    <span className="w-2 h-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}></span>
                    <span className="pl-0 group-hover:pl-5 transition-all duration-200">{t('footer.benefits')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/casos-de-uso" 
                    className="hover:opacity-80 transition-opacity block relative pl-0 group text-sm md:text-base"
                    style={{ color: isDark ? '#F27405' : '#0476D9' }}
                  >
                    <span className="w-2 h-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}></span>
                    <span className="pl-0 group-hover:pl-5 transition-all duration-200">{t('footer.useCases')}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <h3 className={`font-bold mb-4 md:mb-6 text-base md:text-lg transition-colors duration-700 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t('footer.contactTitle')}</h3>
              <ul className="space-y-2 md:space-y-3 flex-1">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0" style={{ color: isDark ? '#ffffff' : '#000000' }} />
                  <a 
                    href="mailto:setluxapp@gmail.com" 
                    className="hover:opacity-80 transition-opacity text-sm md:text-base break-all"
                    style={{ color: isDark ? '#F27405' : '#0476D9' }}
                  >
                    setluxapp@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0" style={{ color: isDark ? '#ffffff' : '#000000' }} />
                  <a 
                    href="https://instagram.com/setluxapp" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity text-sm md:text-base" 
                    aria-label="Instagram"
                    style={{ color: isDark ? '#F27405' : '#0476D9' }}
                  >
                    @setluxapp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t pt-6 md:pt-8 text-center transition-colors duration-700 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            <p className={`mb-2 text-sm md:text-base transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
              {t('footer.bottom1', { year: new Date().getFullYear() })}
            </p>
            <p className={`text-xs md:text-sm transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>
              {t('footer.bottom2')}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
