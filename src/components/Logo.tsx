import { useTheme } from '../contexts/ThemeContext'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  isDark?: boolean // Mantenemos esta prop por compatibilidad con Hero.tsx
}

const Logo = ({ size = 'md', className = '', isDark: propIsDark }: LogoProps) => {
  const { theme } = useTheme()
  const isDark = propIsDark !== undefined ? propIsDark : theme === 'dark'
  
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 80,
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  }

  const logoLight = '/logos/Logo_SetLux_02_01.png' // Logo para modo claro (fondo azul, elementos naranjas)
  const logoDark = '/logos/Logo_SetLux_02.png'     // Logo para modo oscuro (fondo naranja, elementos azules)
  const imageSize = sizeMap[size]

  return (
    <img
      src={isDark ? logoDark : logoLight}
      alt="SetLux Logo"
      className={`${sizeClasses[size]} ${className} transition-opacity duration-300 object-contain`}
    />
  )
}

export default Logo
