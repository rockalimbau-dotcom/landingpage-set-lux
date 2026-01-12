import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import Logo from './Logo'

interface BreadcrumbsProps {
  currentPage: string
}

const Breadcrumbs = ({ currentPage }: BreadcrumbsProps) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8" aria-label="Breadcrumb">
      {/* Logo and SetLux - both clickable */}
      <Link
        to="/"
        className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity group"
      >
        <Logo size="sm" isDark={isDark} className="transition-transform duration-300 group-hover:scale-110" />
        <span
          className="font-bold text-base md:text-lg transition-colors duration-300"
          style={{ color: isDark ? '#F27405' : '#000000' }}
        >
          SetLux
        </span>
      </Link>

      {/* Separator */}
      <ChevronRight
        className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0"
        style={{ color: isDark ? '#F27405' : '#000000' }}
      />

      {/* Current page title */}
      <span
        className="font-semibold text-base md:text-lg transition-colors duration-300 truncate"
        style={{ color: isDark ? '#ffffff' : '#000000' }}
      >
        {currentPage}
      </span>
    </nav>
  )
}

export default Breadcrumbs
