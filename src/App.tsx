import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import UseCases from './components/UseCases'
import CTA from './components/CTA'
import Footer from './components/Footer'
import TheaterIntro from './components/TheaterIntro'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {showIntro && <TheaterIntro onComplete={handleIntroComplete} />}
      {!showIntro && (
        <>
          <Hero />
          <Features />
          <Benefits />
          <UseCases />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

