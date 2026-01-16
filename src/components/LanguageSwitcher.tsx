import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'ca', label: 'CA' },
  { code: 'en', label: 'EN' },
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const setLanguage = (code: string) => {
    i18n.changeLanguage(code)
    if (typeof window !== 'undefined') {
      localStorage.setItem('setlux-lang', code)
    }
  }

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => {
        const isActive = i18n.language === lang.code
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`text-xs md:text-sm font-semibold px-2.5 py-1 rounded-lg transition-all ${
              isActive
                ? 'bg-black/80 text-white'
                : 'bg-white/80 text-black hover:bg-white'
            }`}
          >
            {lang.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
