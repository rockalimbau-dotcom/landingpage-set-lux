import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TheaterIntro from './components/TheaterIntro'
import Home from './pages/Home'
import Caracteristicas from './pages/Caracteristicas'
import CasosDeUso from './pages/CasosDeUso'
import Ventajas from './pages/Ventajas'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {showIntro && <TheaterIntro onComplete={handleIntroComplete} />}
      {!showIntro && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/caracteristicas" element={<Caracteristicas />} />
            <Route path="/casos-de-uso" element={<CasosDeUso />} />
            <Route path="/ventajas" element={<Ventajas />} />
          </Routes>
        </Router>
      )}
    </div>
  )
}

export default App

