import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const { t } = useTranslation()

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg ${
        isDark 
          ? 'bg-orange-500 text-white hover:bg-orange-600' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? t('theme.tungsten') : t('theme.daylight')}
    </button>
  )
}

export default ThemeButton
