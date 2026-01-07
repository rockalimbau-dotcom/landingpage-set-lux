import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110"
      style={{
        backgroundColor: isDark ? '#F27405' : '#0476D9',
        color: 'white',
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5" strokeWidth={2} />
      ) : (
        <Moon className="w-5 h-5" strokeWidth={2} />
      )}
    </button>
  )
}

export default ThemeToggle

