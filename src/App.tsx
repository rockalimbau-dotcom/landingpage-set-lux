import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import TheaterIntro from './components/TheaterIntro'
import Home from './pages/Home'
import Acceso from './pages/Acceso'
import Caracteristicas from './pages/Caracteristicas'
import CasosDeUso from './pages/CasosDeUso'
import Ventajas from './pages/Ventajas'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [showIntro, setShowIntro] = useState(false)
  const [introCompleted, setIntroCompleted] = useState(false)
  const previousPathRef = useRef<string | null>(null)

  useEffect(() => {
    // Solo mostrar intro si estamos en la página principal
    if (!isHomePage) {
      setShowIntro(false)
      setIntroCompleted(true)
      previousPathRef.current = location.pathname
      return
    }

    // Si estamos en la página principal
    const previousPath = previousPathRef.current
    
    // Mostrar animación si:
    // - previousPath es null (primera carga o refresh)
    // - previousPath es '/' (refresh en la misma página)
    // NO mostrar si previousPath es otra ruta (navegación interna desde otra página)
    const isNavigationFromOtherPage = previousPath !== null && previousPath !== '/'
    
    if (!isNavigationFromOtherPage) {
      setShowIntro(true)
      setIntroCompleted(false)
    } else {
      setShowIntro(false)
      setIntroCompleted(true)
    }

    // Actualizar la referencia para la próxima navegación
    previousPathRef.current = location.pathname
  }, [isHomePage, location.pathname])

  useEffect(() => {
    // Forzar scroll arriba al cambiar de ruta
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  const handleIntroComplete = () => {
    setShowIntro(false)
    setIntroCompleted(true)
  }

  return (
    <>
      {showIntro && isHomePage && <TheaterIntro onComplete={handleIntroComplete} />}
      <Routes>
        <Route path="/" element={<Home introCompleted={introCompleted} />} />
        <Route path="/solicitud-acceso" element={<Acceso />} />
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

