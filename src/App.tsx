import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import TheaterIntro from './components/TheaterIntro'
import Home from './pages/Home'
import Caracteristicas from './pages/Caracteristicas'
import CasosDeUso from './pages/CasosDeUso'
import Ventajas from './pages/Ventajas'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [showIntro, setShowIntro] = useState(false)
  const previousPathRef = useRef<string | null>(null)

  useEffect(() => {
    // Solo mostrar intro si estamos en la página principal
    if (!isHomePage) {
      setShowIntro(false)
      previousPathRef.current = location.pathname
      return
    }

    // Si estamos en la página principal
    const introShown = sessionStorage.getItem('intro-shown')
    const previousPath = previousPathRef.current

    // Solo mostrar animación si:
    // 1. No se ha mostrado antes en esta sesión
    // 2. Y NO venimos de una navegación interna desde otra página (sino de un refresh o entrada directa)
    const isNavigationFromOtherPage = previousPath !== null && previousPath !== '/'
    
    if (introShown !== 'true' && !isNavigationFromOtherPage) {
      setShowIntro(true)
    } else {
      setShowIntro(false)
    }

    // Actualizar la referencia para la próxima navegación
    previousPathRef.current = location.pathname
  }, [isHomePage, location.pathname])

  const handleIntroComplete = () => {
    setShowIntro(false)
    sessionStorage.setItem('intro-shown', 'true')
  }

  return (
    <>
      {showIntro && isHomePage && <TheaterIntro onComplete={handleIntroComplete} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/casos-de-uso" element={<CasosDeUso />} />
        <Route path="/ventajas" element={<Ventajas />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <AppContent />
      </Router>
    </div>
  )
}

export default App

