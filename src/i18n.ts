import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es/common.json'
import ca from './locales/ca/common.json'
import en from './locales/en/common.json'

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'es'
  return localStorage.getItem('setlux-lang') ?? 'es'
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    ca: { translation: ca },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
