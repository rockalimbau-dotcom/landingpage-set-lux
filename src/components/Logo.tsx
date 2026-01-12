import { useTheme } from '../contexts/ThemeContext'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  isDark?: boolean // Mantenemos esta prop por compatibilidad con Hero.tsx
  style?: React.CSSProperties
}

const Logo = ({ size = 'md', className = '', isDark: propIsDark, style }: LogoProps) => {
  const { theme } = useTheme()
  const isDark = propIsDark !== undefined ? propIsDark : theme === 'dark'
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  }

  const logoLight = '/logos/Logo_SetLux_02_01.png' // Logo para modo claro (fondo azul, elementos naranjas)
  const logoDark = '/logos/Logo_SetLux_02.png'     // Logo para modo oscuro (fondo naranja, elementos azules)

  return (
    <img
      src={isDark ? logoDark : logoLight}
      alt="SetLux Logo"
      className={`${sizeClasses[size]} ${className} transition-opacity duration-300 object-contain`}
      style={{
        background: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        ...style,
      }}
    />
  )
}

export default Logo
