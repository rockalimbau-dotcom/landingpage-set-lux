import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SetLux - All in One | Gestión del Departamento de Iluminación',
  description: 'La solución completa para la gestión del departamento de iluminación en producciones audiovisuales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
