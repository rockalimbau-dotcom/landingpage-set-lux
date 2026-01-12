import { useTheme } from '../contexts/ThemeContext'

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

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
      {isDark ? 'Darklight' : 'Daylight'}
    </button>
  )
}

export default ThemeButton
